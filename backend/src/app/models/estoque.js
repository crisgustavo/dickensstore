import Sequelize, { Model } from 'sequelize';

class Estoque extends Model {
  static init(sequelize) {
    super.init(
      {
        qtdAntiga: Sequelize.FLOAT,
        qtdAtual: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Produto, {
      foreignKey: 'idProduto',
      as: 'produto',
    });
  }
}

export default Estoque;
