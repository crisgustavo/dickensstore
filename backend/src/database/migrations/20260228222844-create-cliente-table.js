'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cliente', {
      idCliente: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ie: Sequelize.STRING,
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      senha_hash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('cliente');
  },
};
