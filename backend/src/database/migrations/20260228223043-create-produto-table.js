'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      idProduto: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      peso: Sequelize.FLOAT,
      comprimento: Sequelize.FLOAT,
      largura: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
      custo: Sequelize.FLOAT,
      venda: Sequelize.FLOAT,
      foto: Sequelize.STRING,
      tipoProduto: Sequelize.INTEGER,
      autor: Sequelize.INTEGER,
      categoria: Sequelize.INTEGER,
      genero: Sequelize.INTEGER,
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
    await queryInterface.dropTable('produto');
  },
};
