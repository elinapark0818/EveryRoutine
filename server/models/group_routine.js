"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group_routine extends Model {
    static associate(models) {
      // group_routine.belongsToMany(models.user, {
      //   through: "UserGroupRoutine",
      //   as: "user_id",
      //   foreignKey: user,
      // });
    }
  }
  group_routine.init(
    {
      routine_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      editor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      tag_name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    },
    { timestamps: false },
    {
      sequelize: sequelize,
      modelName: "group_routine",
    }
  );
  return group_routine;
};
