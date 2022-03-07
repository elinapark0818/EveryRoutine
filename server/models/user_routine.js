"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_routine extends Model {
    static associate(models) {
      user_routine.belongsTo(models.user, { foreignKey: "user_id" });
    }
  }
  user_routine.init(
    {
      list: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "user",
          key: "id",
        },
      },
      user_cal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      daily_check: {
        type: DataTypes.STRING, //list 길이와 같은 array
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user_routine",
    }
  );
  return user_routine;
};
