'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Board }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Board, { foreignKey: 'boardId' });
    }
  }
  Link.init(
    {
      title: DataTypes.STRING,
      hex: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      boardId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Link',
    }
  );
  return Link;
};
