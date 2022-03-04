"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.comment);
      // users.belongsToMany(models.group_cal, { through: "UserGroupCal" });
      // users.belongsToMany(models.group_routine, {
      //   through: "UserGroupRoutine",
      // });
      
      // users.hasMany(models.user_routine);
      // users.belongsToMany(models.user_group_routine, {
      //   through: "UserUserGroupRoutine",
      // });
    }
  }
  users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
