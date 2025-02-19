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
      url: DataTypes.STRING,
      userId: DataTypes.NUMBER,
      boardId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Link',
    }
  );
  return Link;
};
