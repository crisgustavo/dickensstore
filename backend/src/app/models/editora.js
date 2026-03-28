import Sequelize, { Model } from 'sequelize';

class Editora extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Editora;
