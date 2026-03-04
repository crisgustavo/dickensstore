import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        peso: Sequelize.FLOAT,
        comprimento: Sequelize.FLOAT,
        largura: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
        custo: Sequelize.DECIMAL,
        venda: Sequelize.DECIMAL,
        foto: Sequelize.STRING,
        fotoURL: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/produto-file/${this.foto}`;
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.TipoProduto, {
      foreignKey: 'idTipoProduto',
      as: 'tipoProduto',
    });
    this.belongsTo(models.Autor, {
      foreignKey: 'idAutor',
      as: 'autor',
    });
    this.belongsTo(models.Categoria, {
      foreignKey: 'idCategoria',
      as: 'categoria',
    });
    this.belongsTo(models.Genero, {
      foreignKey: 'idGenero',
      as: 'genero',
    });
  }
}

export default Produto;
