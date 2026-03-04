import Sequelize, { Model } from 'sequelize';

class Banco extends Model {
  static init(sequelize) {
    super.init(
      {
        codigoBanco: Sequelize.STRING,
        nomeBanco: Sequelize.STRING,
        agencia: Sequelize.STRING,
        agenciaDv: Sequelize.STRING,
        conta: Sequelize.STRING,
        contaDv: Sequelize.STRING,
        tipoConta: {
          type: Sequelize.ENUM('corrente', 'poupanca', 'pagamento'),
          defaultValue: 'corrente',
        },
        chavePix: Sequelize.STRING,
        tipoChave: {
          type: Sequelize.ENUM('cpf', 'cnpj', 'email', 'telefone', 'aleatoria'),
          default: 'aleatoria',
        },
        beneficiarioNome: Sequelize.STRING,
        beneficiarioCnpj: Sequelize.STRING,
        provedor: {
          type: Sequelize.ENUM(
            'asaas',
            'gerencianet',
            'pagarme',
            'strip',
            'mercadopago',
            'manual',
          ),
          defaultValue: 'manual',
        },
        token: Sequelize.JSONB,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Banco;
