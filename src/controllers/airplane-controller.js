const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { response } = require('express');
const {errorResponse,successResponse}=require('../utils/common');
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
        successResponse.message = 'Airplane created successfully';
        successResponse.data=airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(successResponse);
                
    } catch(error) {
        
        errorResponse.error=error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }
}
async function getAirplanes(req, res) {
    try {
        const airplanesData = await AirplaneService.getAirplanes();
        
        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    message: 'Airplane successfully created',
                    data: airplanesData,
                    error: {}
                });
                
    } catch(error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: 'Airplane not successfully fetched airplanes',
                data: response,
                error: error
            })
    }
}
async function getAirplane(req, res) {
    try {
        const airplaneData = await AirplaneService.getAirplane(req.params.id);
        
        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    message: 'Airplane successfully fetched one',
                    data: airplaneData,
                    error: {}
                });
                
    } catch(error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: 'Airplane not successfully fetched airplanes',
                data: response,
                error: error
            })
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
}