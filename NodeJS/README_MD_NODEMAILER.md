# NodeMailer

*Рассылка на электронную почту*

1. Подключение *(шаблонизатор `pug`)*

```javascript
const pug = require('pug');
const config = require('PATH/config.json');
const nodeMailer = require('nodemailer');
```

2. Файл `config.json`

```json
{
  // email компании, которая отправляет письмо
  // То, что будет в поле "From"
  "email": "test@test.com",

  // Аутентификационная информация о пользователе
  "mailAuthN": {
    "user": "test@test.com",
    "pass": "**********"
  }
}
```

3. Парсинг данных из формы

```javascript
let data = req.body;
```

4. Получение HTML-строки для письма

```javascript
// Создание шаблона письма в виде строки (для рассылающей компании)
const htmlString = pug.renderFile(path.join(__dirname, 'PATH.pug'), {
  name: data.name
});
```

5. Создание транспортера

```javascript
const transporter = nodeMailer.createTransport({
  // для Яндекса - yandex
  service: 'gmail',
  auth: config.mailAuthN
});
```

6. Создание настроек письма

```javascript
const mailOptions = {
  from: `UserName <${config.email}>`, // Отправитель письма
  to: data.email, // Получатель письма
  subject: 'Тестовая тема', // Тема письма
  html: htmlString, // HTML-текстт письма
  attachments: [ // Прикрепляемые файлы (Необязательно)
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
```

*Подключение вложенных файлов*

```pug
img(src="cid:mail@footer.png")
```

7. Отправка письма

```javascript
transporter.sendMail(mailOptions, (error) => {
  if (error) {
    console.error(error);
    return res.send('Error!');
  }

  console.log('Mail was sent');
  res.redirect('/');
});
```

[Пример. Отправка письма клиенту и пользователю](./examples/sendEmail/) (Отправка вопроса от клиента)