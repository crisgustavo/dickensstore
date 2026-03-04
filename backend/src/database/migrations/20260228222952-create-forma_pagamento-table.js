'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('forma_pagamento', {
      idFormaPagamento: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tipo: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'cartao_credito',
          'cartao_debito',
          'pix',
          'paypal',
          'picpay',
          'google_pay',
          'apple_pay',
          'samsung_pay',
          'outros',
        ],
      },
      descontoPercentual: Sequelize.FLOAT,
      descontoFixo: Sequelize.FLOAT,
      taxaPercentual: Sequelize.FLOAT,
      taxaFixa: Sequelize.FLOAT,
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      banco: Sequelize.INTEGER,
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
    await queryInterface.dropTable('forma_pagamento');
  },
};
