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
      Output.belongsTo(models.Languages, {
        foreignKey: "languages_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Output.belongsToMany(models.Input, {
        through: models.Translation,
        foreignKey: "input_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Output.init(
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
      modelName: "Output",
      tableName: "outputs",
    }
  );
  return Output;
};
