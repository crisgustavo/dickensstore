'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parcelamento', {
      idParcelamento: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      maxParcelas: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      valorMinParcela: Sequelize.DECIMAL,
      tipoJuros: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['simples', 'composto', 'sem_juros'],
      },
      jurosPercentual: Sequelize.FLOAT,
      isentoAteParcela: Sequelize.INTEGER,
      formaPagamento: Sequelize.INTEGER,
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
    await queryInterface.dropTable('parcelamento');
  },
};
