const router = require('express').Router();

const restoController = require('../controllers/restoController');

router.get('/', restoController.viewResto);
router.post('/', restoController.addResto);
router.put('/', restoController.editResto);

module.exports = router;