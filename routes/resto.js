const router = require('express').Router();

const restoController = require('../controllers/restoController');

router.get('/', restoController.viewResto);

module.exports = router;