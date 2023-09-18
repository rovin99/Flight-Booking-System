const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middleware');

const router = express.Router();

// /api/v1/airplanes POST
router.post('/',CityMiddleware.validateCreateCity,CityController.createCity);

module.exports = router;