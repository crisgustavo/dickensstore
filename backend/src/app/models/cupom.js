import Sequelize, { Model } from 'sequelize';

class Cupom extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        regra: Sequelize.ENUM('frete', 'valor_total', 'item_venda'),
        descontoPercentual: Sequelize.FLOAT,
        descontoFixo: Sequelize.FLOAT,
        descontoMaximo: Sequelize.FLOAT,
        dataInicio: Sequelize.DATE,
        dataFinal: Sequelize.DATE,
        quantidade: Sequelize.INTEGER,
        usados: Sequelize.INTEGER,
        ativo: Sequelize.BOOLEAN,
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
    this.belongsTo(models.Autor, {
      foreignKey: 'idAutor',
      as: 'autor',
    });
    this.belongsTo(models.Genero, {
      foreignKey: 'idGenero',
      as: 'genero',
    });
    this.belongsTo(models.Categoria, {
      foreignKey: 'idCategoria',
      as: 'categoria',
    });
    this.belongsTo(models.TipoProduto, {
      foreignKey: 'idTipoProduto',
      as: 'tipoProduto',
    });
  }
}

export default Cupom;
