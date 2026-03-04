import Sequelize, { Model } from 'sequelize';

class Venda extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.ENUM(
          'pago',
          'producao',
          'enviado',
          'entregue',
          'cancelado',
          'devolvido',
        ),
        valorProdutos: Sequelize.DECIMAL,
        valorFrete: Sequelize.DECIMAL,
        valorAcrescimo: Sequelize.DECIMAL,
        ValotTotal: Sequelize.DECIMAL,
        tipoEnvio: Sequelize.STRING,
        rastreio: Sequelize.STRING,
        dataPrazoInicial: Sequelize.DATE,
        dataPrazoFinal: Sequelize.DATE,
        dataEntregue: Sequelize.STRING,
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
    this.belongsTo(models.Endereco, {
      foreignKey: 'idEndereco',
      as: 'endereco',
    });
    this.belongsTo(models.FormaPagamento, {
      foreignKey: 'idFormaPagamento',
      as: 'formaPagamento',
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

export default Venda;
