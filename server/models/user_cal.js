"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_cal extends Model {
    static associate(models) {}
  }
  user_cal.init(
    {
      date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      user_routine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    // { timestamps: false },
    {
      sequelize,
      modelName: "user_cal",
    }
  );
  return user_cal;
};
