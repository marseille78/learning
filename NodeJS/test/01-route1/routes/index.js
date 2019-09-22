const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index');
const ctrlAbout = require('../controllers/about');
const ctrlContact = require('../controllers/contact');

router.get('/', ctrlHome.getHome);
router.post('/', ctrlHome.postHome);

router.get('/about', ctrlAbout.getAbout);

router.get('/contact', ctrlContact.getContact);

module.exports = router;