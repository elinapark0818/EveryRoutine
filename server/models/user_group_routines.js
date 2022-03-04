"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_group_routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_group_routine.belongsToMany(models.user, {
        through: "UserUserGroupRoutine",
        as: "user_id",
        foreignKey: user,
      });
      // define association here
    }
  }
  user_group_routine.init(
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
    {
      sequelize,
      modelName: "user_group_routine",
    }
  );
  return user_group_routine;
};
