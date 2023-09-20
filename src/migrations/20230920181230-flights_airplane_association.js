'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('flights',{
      fields: ['airplane'],
      type: 'foreign key',
      name: 'flights_airplane_association',
      references:{
        table: 'Airplanes',
        field: 'id',
      },
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('flights', 'airplane', {
      type: Sequelize.INTEGER, // remove foreign key constraint
      onDelete: null,
      references: null
    });
  }
};
