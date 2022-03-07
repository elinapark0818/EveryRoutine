"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
      // comment.belongsTo(models.group_cal, {
      //   as: "user_id",
      //   foreignKey: "checked_id",
      // });
    }
  }
  comment.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      group_routine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false },
    {
      sequelize: sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
