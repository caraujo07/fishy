import Sequelize from "sequelize";
import User from "../app/models/User";
import Person from "../app/models/Person";
import databaseConfig from "../config/database";

const models = [User, Person];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
