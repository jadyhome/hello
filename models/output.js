"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Output extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Output.init(
    {
      languages_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Output",
      tableName: "outputs",
    }
  );
  return Output;
};
