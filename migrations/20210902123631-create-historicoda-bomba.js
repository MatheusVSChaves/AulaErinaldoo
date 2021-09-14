'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HistoricodaBombas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BombaId: {
        type: Sequelize.INTEGER,
        references:{
          model:'bombas',
          key:'id'

        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      },
      nivel: {
        type: Sequelize.FLOAT
      },
      data: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HistoricodaBombas');
  }
};