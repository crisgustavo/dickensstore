'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categoria', {
      idCategoria: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      situacao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      avaliacao: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
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
    await queryInterface.dropTable('categoria');
  },
};
