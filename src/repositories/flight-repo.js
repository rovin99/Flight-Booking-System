const CrudRepository = require('./crud-repo');
const { flights } = require('../models');


class FlightRepository extends CrudRepository {
    constructor() {
        super(flights);
    }
}

module.exports = FlightRepository;