"use strict";
var DataTypes = require("sequelize/lib/data-types");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_routines", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      list: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        // references: {
        //   model: "users",
        //   key: "id",
        // },
      },
      user_cal_id: {
        type: Sequelize.INTEGER,
      },
      daily_check: {
        type: Sequelize.STRING, //list 길이와 같은 array
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_routines");
  },
};
