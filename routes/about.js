const router = require('express').Router();

const AboutController = require('../controllers/aboutController');

router.get('/about', AboutController.viewAbout);