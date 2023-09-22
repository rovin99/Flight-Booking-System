const CrudRepository = require('./crud-repo');
const { Airplanes } = require('../models');


class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplanes);
    }
}

module.exports = AirplaneRepository;