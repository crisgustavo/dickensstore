import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.BIGINT,
        ie: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (cliente) => {
      if (cliente.senha) {
        cliente.senha_hash = await bcrypt.hash(cliente.senha, 10);
      }
    });

    return this;
  }

  async validaSenha(senha) {
    return await bcrypt.compare(senha, this.senha_hash);
  }
}

export default Cliente;
