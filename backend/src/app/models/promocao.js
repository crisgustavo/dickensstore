import Sequelize, { Model } from 'sequelize';

class Promocao extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        descontoPercentual: Sequelize.FLOAT,
        descontoFixo: Sequelize.FLOAT,
        dataInicio: Sequelize.DATE,
        dataFinal: Sequelize.DATE,
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

export default Promocao;
