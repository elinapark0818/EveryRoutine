"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group_cal extends Model {
    static associate(models) {
      // group_cal.belongsToMany(models.user, {
      //   through: "UserGroupCal",
      //   targetKey: "user_id",
      //   foreignKey: "id",
      // });
      // group_cal.hasMany(models.comment);
      // group_cal.hasMany(models.user, { foreignKey: "user_id" });
    }
  }
  group_cal.init(
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
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
      checked_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    // { timestamps: false },
    {
      sequelize,
      modelName: "group_cal",
    }
  );
  return group_cal;
};
