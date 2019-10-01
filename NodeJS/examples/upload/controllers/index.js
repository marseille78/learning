const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const db = require('../models/db'); // Подключение локальной базы данных LowDB

module.exports.getHome = (req, res) => {
  res.render('pages/index', {
    title: 'My upload',
    msg: req.query.msg,
    pic: db.get('pics').value() // Запрос массива изобраажений из LowDB
  });
};

module.exports.postHome = (req, res) => {

  // Подключение Formidable
  let form = new formidable.IncomingForm();

  // Создаем папку, куда будем складывать загруженные файлы
  let upload = path.join('./public', 'upload');
  let fileName;

  // Проверка, если папка upload не была создана, ее создадим
  if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
  }

  // Говорим Formidable где находится папка upload. (Чтобы он не сохранял файлы в папку по умолчанию)
  form.uploadDir = path.join(process.cwd(), upload);

  form.parse(req, (err, fields, files) => {
    if (err) {
      return console.error(err);
    }

    // Объект полей загрузки файлов. Свойство соответствует атрибуту "name"
    // files.photo.name - Свойство. Имя загружаемого файла
    // files.photo.size - Свойство. Размер загружаемого файла
    // files.photo.path - Свойство. Путь к временному файлу
    if (files.photo.name === '' || files.photo.size === 0) {
      // Если имя файла пустое или файл не загружен - удаляем временный файл и перезагружаем страницу
      fs.unlink(files.photo.path, (err) => {
        if (err) return console.error(err);
      });
      return res.redirect('/?msg=Не загружена картинка!');
    }
    
    // fields - Объект полей ввода в форму. Свойство соответствует атрибуту "name", Значение - введенной сроке
    if (!fields.photo_name) {
      // Если описание картинки не введено - Удаляем временный файл и перезагружаем страницу
      fs.unlink(files.photo.path, (err) => {
        if (err) return console.error(err);
      });
      return res.redirect('/?msg=Не указано описание картинки!');
    }

    // Установление имени загружаемого файла (соответствует загружаемому файлу)
    fileName = path.join(upload, files.photo.name);

    // Переименование временного файла в реальное название
    fs.rename(files.photo.path, fileName, (err) => {
      if (err) {
        console.error(err);
        // Если файл с таким именем уже существует, перезаписываем его
        fs.unlink(fileName, (err) => {
          if (err) return console.error(err);
        });
        fs.rename(files.photo.path, fileName, (err) => {
          if (err) return console.error(err);
        });
      }

      // Обрезание из пути папки "public"
      const dir = fileName.slice(fileName.indexOf('\\'));

      db
        .get('pics')
        .push({
          src: dir,
          desc: fields.photo_name
        })
        .write();
      
      res.redirect('/?msg=Картинка успешно загружена!');
    });
  });
};