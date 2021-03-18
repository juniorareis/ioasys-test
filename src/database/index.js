import Sequelize from 'sequelize';

import User from '../app/models/User';
import Director from '../app/models/Director';
import Genre from '../app/models/Genre';
import Film from '../app/models/Film';
import Like from '../app/models/Like';

import databaseConfig from '../config/database';

const models = [User, Director, Genre, Film, Like];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
