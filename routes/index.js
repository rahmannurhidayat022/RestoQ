const express = require('express');
const router = express.Router();

const AboutController = require('../controllers/aboutController');

router.get('/', async (req, res, next) => {
  await res.redirect('/resto');
});

router.get('/about', AboutController.viewAbout);

module.exports = router;
