const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { response } = require('express');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Airplane successfully created',
                    data: response,
                    error: {}
                })
                
    } catch(error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: true,
                message: 'Airplane not successfully created',
                data: response,
                error: error
            })
    }
}


module.exports = {
    createAirplane
}