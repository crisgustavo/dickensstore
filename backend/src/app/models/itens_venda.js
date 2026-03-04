import Sequelize, { Model } from 'sequelize';

class ItensVenda extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: Sequelize.FLOAT,
        valorUnitario: Sequelize.DECIMAL,
        valorDesconto: Sequelize.DECIMAL,
        valorAcrescimo: Sequelize.DECIMAL,
        valotTotal: Sequelize.DECIMAL,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Venda, {
      foreignKey: 'idVenda',
      as: 'venda',
    });
    this.belongsTo(models.Produto, {
      foreignKey: 'idProduto',
      as: 'produto',
    });
    this.belongsTo(models.Cupom, {
      foreignKey: 'idCupom',
      as: 'cupom',
    });
    this.belongsTo(models.Promocao, {
      foreignKey: 'idPromocao',
      as: 'promocao',
    });
  }
}

export default ItensVenda;
