"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class user_routine extends Model {
    static associate(models) {
      // user_routine.belongsTo(models.user, {
      //   foreignKey: "id",
      // });
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
        // references: {
        //   model: "users",
        //   key: "id",
        // },
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
    { timestamps: false },
    {
      sequelize: sequelize,
      modelName: "user_routine",
    }
  );
  return user_routine;
};
