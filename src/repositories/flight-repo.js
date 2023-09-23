const CrudRepository = require('./crud-repo');
const { flights } = require('../models');


class FlightRepository extends CrudRepository {
    constructor() {
        super(flights);
    }
    async getAllFlights(filter,sortFilter){
        const response= await flights.findAll({
            where: filter,
            order: sortFilter
        });
        return response;
    }
}

module.exports = FlightRepository;