const {StatusCodes} = require('http-status-codes');

const { FlightRepository } = require('../repositories');
const compareDate=require('../utils/common/helpers/date-compare');
const AppError = require('../utils/errors/app-error');
const flightRepository = new FlightRepository();

async function createFlight(data) {
    console.log('Received data:', data); 
    try {
        if(!compareDate(data.arrival, data.departure)) {
          throw new AppError('Invalid date/time range...', 400); 
        }
    } catch (err) {
        throw new AppError('Invalid date/time range...', 400);
      
    }
    try {
        
        const Flight = await flightRepository.create(data);
        return Flight;
        
    } catch(error) {
        
        if(error.name =='SequelizeValidationError') {
            let explaination=[];
            
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            });
           
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlights() {
    try {
        const Flights = await flightRepository.getAll();
        return Flights;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the Flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight(id) {
    try {
        const Flight = await flightRepository.get(id);

        
        return Flight;
    } catch(error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you requested not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of the Flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyFlight(id) {
    try {
        const response = await flightRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you requested not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot delete data of the Flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function updateFlight(id,data){
    try{
        const updateResponse = await flightRepository.update(id,data);
        return updateResponse;
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you requested not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update data of the Flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createFlight,
    getFlights,
    getFlight,
    destroyFlight,
    updateFlight
}