const pug = require('pug');
const path = require('path');
const config = require('../config.json');
const nodeMailer = require('nodemailer');

module.exports.getHome = (req, res) => {
  res.render('pages/index', {
    title: 'Send email'
  });
};

module.exports.postHome = (req, res) => {
  let data = req.body;
  console.log('data', data);

  // Создание шаблона письма в виде строки (для рассылающей компании)
  const htmlString = pug.renderFile(path.join(__dirname, '../views/email/order-info.pug'), {
    name: data.name
  });

  // Создание шаблона письма в виде строки для клиента
  let clientMailHtml = pug.renderFile(path.join(__dirname, '../views/email/order-client-nodestart.pug'), {
    name: data.name
  });

  // Создание транспортера
  const transporter = nodeMailer.createTransport({
    // для Яндекса - yandex
    service: 'gmail',
    auth: config.mailAuthN
  });

  // Настройки письма (Для рассылающей компании)
  const mailOptions = {
    from: `Ruslan Boiko <${config.email}>`, // Отправитель письма
    to: config.email, // Получатель письма
    subject: 'Successful registered', // Тема письма
    html: htmlString // Текст письма
  };

  // Настройки письма для клиента (на введенный адрес)
  const clientMailOptions = {
    from: `Ruslan Boiko <${config.email}>`, // Отправитель письма
    to: data.email, // Получатель письма
    subject: 'Тестовая тема', // Тема письма
    html: clientMailHtml, // HTML-текстт письма
    attachments: [ // Прикрепляемые файлы
      {
        filename: 'logo.png', // Название файла
        path: './mail-static/logo.png', // Путь к файлу
        cid: 'mail@logo.png'
      },
      {
        filename: 'happy.gif',
        path: './mail-static/happy.gif',
        cid: 'mail@happy.gif'
      },
      {
        filename: 'footer.png',
        path: './mail-static/footer.png',
        cid: 'mail@footer.png'
      }
    ]
  };

  transporter.sendMail(clientMailOptions, (error) => {
    if (error) {
      console.error(error);
      return res.send('Error!');
    }

    console.log('Mail 1 sent');
  });

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      return res.send('Error!');
    }

    console.log('Mail 2 sent');
    res.redirect('/');
  });
};