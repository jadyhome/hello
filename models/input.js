"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Input extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Input.belongsTo(models.Languages, {
        foreignKey: "languages_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Input.belongsToMany(models.Output, {
        through: models.Translation,
        foreignKey: "output_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Input.init(
    {
      languagesId: {
        type: DataTypes.INTEGER,
        field: "languages_id",
        references: {
          model: "languages",
          key: "id",
        },
      },
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Input",
      tableName: "inputs",
    }
  );
  return Input;
};
