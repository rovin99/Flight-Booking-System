const express = require('express');

const { AirplaneController } = require('../../controllers');
const {AirplaneMiddleware } = require('../../middleware');

const router = express.Router();

// /api/v1/airplanes POST
router.post('/', AirplaneMiddleware.validateCreateAirplane,
        AirplaneController.createAirplane);
router.get('/',AirplaneController.getAirplanes);
//router.get('/:id',AirplaneController.getAirplane);

module.exports = router;