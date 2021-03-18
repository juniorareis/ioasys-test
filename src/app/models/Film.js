import Sequelize, { Model } from 'sequelize';

class Film extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        launch: Sequelize.DATE,
        age: Sequelize.INTEGER,
        canceled_at: Sequelize.DATE,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Director, { foreignKey: 'diretor_id' });
    this.belongsTo(models.Genre, { foreignKey: 'genero_id' });
    this.hasMany(models.Like, { foreignKey: 'film_id', as: 'likes' });
  }
}

export default Film;
