'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promocao', {
      idPromocao: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      desricao: {
        allowNull: false,
        tipe: Sequelize.STRING,
      },
      descontoPercentual: Sequelize.FLOAT,
      descontoFixo: Sequelize.FLOAT,
      dataInicio: Sequelize.FLOAT,
      dataFinal: Sequelize.FLOAT,
      ativo: Sequelize.FLOAT,
      produto: Sequelize.INTEGER,
      autor: Sequelize.INTEGER,
      genero: Sequelize.INTEGER,
      categoria: Sequelize.INTEGER,
      tipoProduto: Sequelize.INTEGER,
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
    await queryInterface.dropTable('promocao');
  },
};
