"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("translations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      inputId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        field: "input_id",
        references: {
          model: "inputs",
          key: "id",
        },
      },
      outputId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        field: "output_id",
        references: {
          model: "outputs",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("translations");
  },
};
