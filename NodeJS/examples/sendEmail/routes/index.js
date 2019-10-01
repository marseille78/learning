const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index');

router.get('/', ctrlHome.getHome);
router.post('/', ctrlHome.postHome);

module.exports = router;