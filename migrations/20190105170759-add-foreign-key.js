'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tracks', 'albumId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'albums',
        key: 'id'
      },
      allowNull: true
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
