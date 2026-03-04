import Sequelize, { Model } from 'sequelize';

class FormaPagamento extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        tipo: {
          type: Sequelize.ENUM(
            'cartao_credito',
            'cartao_debito',
            'pix',
            'paypal',
            'picpay',
            'google_pay',
            'apple_pay',
            'samsung_pay',
            'outros',
          ),
        },
        descontoPercentual: Sequelize.FLOAT,
        descontoFixo: Sequelize.FLOAT,
        taxaPercentual: Sequelize.FLOAT,
        taxaFixa: Sequelize.FLOAT,
        ativo: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Banco, {
      foreignKey: 'idBanco',
      as: 'banco',
    });
  }
}

export default FormaPagamento;
