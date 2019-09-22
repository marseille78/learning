const express = require('express');
const router = express.Router();

// контроллеры для каждой страницы
const ctrlHome = require('../controllers/index');
const ctrlAbout = require('../controllers/about');
const ctrlContact = require('../controllers/contact');

router.get('/', ctrlHome.getIndex);
router.post('/', ctrlHome.postIndex);

router.get('/about', ctrlAbout.getAbout);

router.get('/contact', ctrlContact.getContact);

module.exports = router;