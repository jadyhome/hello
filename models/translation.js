"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Translation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Translation.init(
    {
      inputId: {
        type: DataTypes.INTEGER,
        field: "input_id",
        references: {
          model: "inputs",
          key: "id",
        },
      },
      outputId: {
        type: DataTypes.INTEGER,
        field: "output_id",
        references: {
          model: "outputs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Translation",
      tableName: "translations",
    }
  );
  return Translation;
};
