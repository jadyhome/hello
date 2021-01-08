"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JapaneseLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JapaneseLanguage.init(
    {
      phrases: DataTypes.STRING,
      translation: DataTypes.STRING,
      romanization: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JapaneseLanguage",
      tableName: "japanese_languages",
    }
  );
  return JapaneseLanguage;
};
