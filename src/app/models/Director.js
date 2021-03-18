import Sequelize, { Model } from 'sequelize';

class Director extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Director;
