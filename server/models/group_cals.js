"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group_cal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group_cal.belongsToMany(user, {
        through: "UserGroupCal",
        as: "user_id",
        foreignKey: user,
      });
      group_cal.hasMany(models.comment);
      // define association here
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
    {
      sequelize,
      modelName: "group_cal",
    }
  );
  return group_cal;
};
