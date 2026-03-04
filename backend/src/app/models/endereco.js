import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        endereco: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        cep: Sequelize.STRING,
        caixaPostal: Sequelize.STRING,
        principal: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cliente, {
      foreignKey: 'idCliente',
      as: 'cliente',
    });
  }
}

export default Endereco;
