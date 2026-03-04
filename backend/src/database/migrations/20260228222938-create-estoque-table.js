'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estoque', {
      idEstoque: {
        primaryKKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      qtdAtiga: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      qtdAtual: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estoque');
  },
};
