'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresa', {
      idEmpresa: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      razao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fantasia: Sequelize.STRING,
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ie: Sequelize.STRING,
      fone: Sequelize.STRING,
      email: Sequelize.STRING,
      endereco: Sequelize.STRING,
      numero: Sequelize.STRING,
      bairro: Sequelize.STRING,
      cidade: Sequelize.STRING,
      uf: Sequelize.STRING,
      logotipo: Sequelize.STRING,
      logomarca: Sequelize.STRING,
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
    await queryInterface.dropTable('empresa');
  },
};
