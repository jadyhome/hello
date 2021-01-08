"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChineseLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChineseLanguage.init(
    {
      phrases: DataTypes.STRING,
      translation: DataTypes.STRING,
      romanization: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ChineseLanguage",
      tableName: "chinese_languages",
    }
  );
  return ChineseLanguage;
};
