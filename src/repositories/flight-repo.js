const CrudRepository = require('./crud-repo');
const { flights,Airplanes,airport} = require('../models');
const {Sequelize,Op}=require('sequelize');


class FlightRepository extends CrudRepository {
    constructor() {
        super(flights);
    }
    async getAllFlights(filter,sortFilter){
        try {
            const response = await flights.findAll({
              where: filter,
              order: sortFilter,
              include: [
                {
                  model: Airplanes,
                  as: 'AirplaneDetails',
                  required: true
                },
                {
                  model: airport,
                  required: true,
                  as: 'DepartureAirport',
                  on:{
                    col1: Sequelize.where(Sequelize.col("flights.from"),"=",Sequelize.col("DepartureAirport.code"))
                  }  
                },
                {
                  model: airport,
                  required: true,
                  as: 'ArrivalAirport',
                  on:{
                    col1: Sequelize.where(Sequelize.col("flights.to"),"=",Sequelize.col("ArrivalAirport.code"))
                  }  
                }
                
              ],
            });
            return response;
          } catch (error) {
            console.error('Error fetching flights:', error);
            throw new AppError('Cannot fetch data of all the Flights', StatusCodes.INTERNAL_SERVER_ERROR);
          }
          
    }
}

module.exports = FlightRepository;