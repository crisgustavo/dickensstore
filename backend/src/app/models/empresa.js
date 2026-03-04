import Sequelize, { Model } from 'sequelize';

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        razao: Sequelize.STRING,
        fantasia: Sequelize.STRING,
        cnpj: Sequelize.BIGINT,
        ie: Sequelize.STRING,
        fone: Sequelize.STRING,
        email: Sequelize.STRING,
        endereco: Sequelize.STRING,
        numero: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        logotipo: Sequelize.STRING,
        logotipoURL: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/empresa-file/${this.logotipo}`; //local para recuperar a imagem
          },
        },
        logomarca: Sequelize.STRING,
        logomarcaURL: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/empresa-file/${this.logomarca}`;
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Empresa;
