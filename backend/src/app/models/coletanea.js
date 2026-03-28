import Sequelize, { Model } from 'sequelize';

class Coletanea extends Model {
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

export default Coletanea;
