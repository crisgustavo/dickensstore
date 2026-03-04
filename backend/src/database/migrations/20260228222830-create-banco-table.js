'use strict';

const { JSONB } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('banco', {
      idBanco: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      codigoBanco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nomeBanco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      agencia: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      agenciaDiv: Sequelize.STRING,
      conta: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contaDv: Sequelize.STRING,
      tipoConta: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['corrente', 'poupanca', 'pagamento'],
        defaultValue: 'corrente',
      },
      chavePix: Sequelize.STRING,
      tipoChave: {
        type: Sequelize.ENUM,
        values: ['cpf', 'cnpj', 'email', 'telefone', 'aleatoria'],
        defaultValue: 'aleatoria',
      },
      beneficiarioNome: Sequelize.STRING,
      beneficiarioCNPJ: Sequelize.STRING,
      provedor: {
        type: Sequelize.ENUM,
        values: [
          'asaas',
          'gerencianet',
          'pagarme',
          'strip',
          'mercadopago',
          'manual',
        ],
        defaultValue: 'manual',
      },
      token: Sequelize.JSONB,
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
    await queryInterface.dropTable('banco');
  },
};
