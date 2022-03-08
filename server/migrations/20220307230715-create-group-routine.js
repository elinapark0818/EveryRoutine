"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("group_routines", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      routine_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      editor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      tag_name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contents: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("group_routines");
  },
};
