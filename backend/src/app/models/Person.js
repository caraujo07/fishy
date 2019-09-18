import { Model, Sequelize } from "sequelize";

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        nascimento: Sequelize.STRING,
        cpf: Sequelize.STRING,
        telefone: Sequelize.STRING,
        estadoCivil: Sequelize.STRING,
        ocupacao: Sequelize.STRING,
        numeroDeFamiliares: Sequelize.STRING,
        nis: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    
    return this;
  }
}

export default Person;
