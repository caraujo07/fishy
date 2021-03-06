import { Model, Sequelize } from "sequelize";

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        nascimento: Sequelize.STRING,
        cpf: Sequelize.STRING,
        telefone: Sequelize.STRING,
        estado_civil: Sequelize.STRING,
        ocupacao: Sequelize.STRING,
        numero_de_familiares: Sequelize.STRING,
        nis: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        created_by: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Person;
