'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('venda', {
      idVenda: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'pago',
          'producao',
          'enviado',
          'entregue',
          'cancelado',
          'devolvido',
        ],
      },
      valorProdutos: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      valoFrete: Sequelize.DECIMAL,
      valorAcrescimo: Sequelize.DECIMAL,
      valorTotal: Sequelize.DECIMAL,
      tipoEnvio: Sequelize.STRING,
      rastreio: Sequelize.STRING,
      dataPrazoInicial: Sequelize.DATE,
      dataPrazoFinal: Sequelize.DATE,
      dataEntregue: Sequelize.STRING,
      cliente: {
        allowNull: fale,
        type: Sequelize.INTEGER,
      },
      endereco: {
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
    await queryInterface.dropTable('venda');
  },
};
