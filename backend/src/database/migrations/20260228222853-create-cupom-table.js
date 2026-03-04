'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cupom', {
      idCupom: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      regra: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['frete', 'valor_total', 'item_venda'],
      },
      descontoPercentual: Sequelize.FLOAT,
      descontoFixo: Sequelize.FLOAT,
      descontoMaximo: Sequelize.FLOAT,
      dataInicio: Sequelize.DATE,
      dataFinal: Sequelize.DATE,
      quantidade: Sequelize.INTEGER,
      usados: Sequelize.INTEGER,
      ativo: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('cupom');
  },
};
