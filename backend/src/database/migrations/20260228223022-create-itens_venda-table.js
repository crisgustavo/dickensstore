'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itens_venda', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      valorUnitario: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      valorDesconto: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      valorAcrescimo: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      valorTotal: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      venda: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      produto: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cupom: Sequelize.INTEGER,
      promocao: Sequelize.INTEGER,
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
    await queryInterface.dropTable('itens_venda');
  },
};
