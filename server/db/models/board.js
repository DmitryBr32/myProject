'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Link }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Link, { foreignKey: 'boardId' });
    }
  }
  Board.init(
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Board',
    }
  );
  return Board;
};
