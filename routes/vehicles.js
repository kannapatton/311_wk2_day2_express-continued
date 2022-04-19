const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicles');

router.get('/', vehiclesController.allVehicles);
router.get('/:id', vehiclesController.byId);
router.post('/', vehiclesController.create);
module.exports = router;