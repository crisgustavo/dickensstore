import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        situacao: Sequelize.STRING,
        descricao: Sequelize.STRING,
        avaliacao: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Categoria;
