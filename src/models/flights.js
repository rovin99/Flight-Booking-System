'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplanes,{
        foreignKey: 'airplane',
        onDelete: 'CASCADE',
        
      });
      this.belongsTo(models.airport,{
        foreignKey: 'from',
        onDelete: 'CASCADE',
        
      });
      this.belongsTo(models.airport,{
        foreignKey: 'to',
        onDelete: 'CASCADE',
        
      });
    }
  }
  flights.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    from:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    to:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },

    arrival: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departure: {
      type: DataTypes.DATE,
      allowNull: false
    },    
    airplane: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate:{
      type: DataTypes.INTEGER,
    },
    totalSeats:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};