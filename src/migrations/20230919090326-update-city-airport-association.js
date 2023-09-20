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
    await queryInterface.addConstraint('airports',{
      fields: ['city_id'],
      type: 'foreign key',
      name: 'airport_city_association',
      references:{
        table: 'cities',
        field: 'id'
      },
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('airports', 'city_id', {
      type: Sequelize.INTEGER, // remove foreign key constraint
      onDelete: null,
      references: null
    });
  }
};
