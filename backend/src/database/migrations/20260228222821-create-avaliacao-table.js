'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacao', {
      idAvaliacao: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      alvo: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['plataforma', 'titulo', 'autor', 'genero'], // Especificar values
      },
      comentario: {
        type: Sequelize.TEXT,
      },
      avaliacao: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 10,
        },
      },
      produto: Sequelize.INTEGER,
      autor: Sequelize.INTEGER,
      genero: Sequelize.INTEGER,
      cliente: Sequelize.INTEGER,
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
    await queryInterface.dropTable('avaliacao');
  },
};
