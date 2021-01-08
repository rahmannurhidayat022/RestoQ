const router = require('express').Router();

const restoController = require('../controllers/restoController');

router.get('/', restoController.viewResto);
router.post('/', restoController.addResto);

module.exports = router;