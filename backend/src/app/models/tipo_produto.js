import Sequelize, { Model } from 'sequelize';

class TipoProduto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default TipoProduto;
