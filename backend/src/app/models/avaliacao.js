import Sequelize, { Model } from 'sequelize';

class Avaliacao extends Model {
  static init(sequelize) {
    super.init(
      {
        alvo: Sequelize.ENUM('plataforma', 'titulo', 'autor', 'genero'),
        comentario: Sequelize.TEXT,
        avaliacao: Sequelize.INTEGER,
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
    this.belongsTo(models.Cliente, {
      foreignKey: 'idCliente',
      as: 'cliente',
    });
  }
}

export default Avaliacao;
