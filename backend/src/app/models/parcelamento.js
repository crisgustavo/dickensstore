import Sequelize, { Model } from 'sequelize';

class Parcelamento extends Model {
  static init(sequelize) {
    super.init(
      {
        maxParcelas: Sequelize.INTEGER,
        valorMinParcela: Sequelize.DECIMAL,
        tipoJuros: Sequelize.ENUM('simples', 'composto', 'sem_juros'),
        jurosPercentual: Sequelize.FLOAT,
        isentoAteParcela: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.FormaPagamento, {
      foreignKey: 'idFormaPagamento',
      as: 'formaPagamento',
    });
  }
}

export default Parcelamento;
