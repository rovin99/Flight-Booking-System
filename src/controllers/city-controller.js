const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');
const { response } = require('express');
const {errorResponse,successResponse}=require('../utils/common');
/**
 * POST : /city 
 * req-body {name : 'london'}
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,
            
        });
        successResponse.message = 'City created successfully';
        successResponse.data=city;
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

module.exports={
    createCity,
}