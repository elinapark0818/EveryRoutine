"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class march22_dates extends Model {
    static associate(models) {}
  }
  march22_dates.init(
    {
      month: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "march22_dates",
    }
  );
  return march22_dates;
};
