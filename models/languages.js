"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Languages.hasMany(models.Input, {
        foreignKey: "language_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Languages.hasMany(models.Output, {
        foreignKey: "language_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Languages.init(
    {
      languages: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Languages",
      tableName: "languages",
    }
  );
  return Languages;
};
