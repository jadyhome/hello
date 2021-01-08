"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KoreanLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KoreanLanguage.init(
    {
      phrases: DataTypes.STRING,
      translation: DataTypes.STRING,
      romanization: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "KoreanLanguage",
      tableName: "korean_languages",
    }
  );
  return KoreanLanguage;
};
