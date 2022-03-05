"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // comment.belongsTo(models.group_cal, {
      //   as: "user_id",
      //   foreignKey: "checked_id",
      // });
      // define association here

      // comment.belongsTo(models.user);
      // models.user.hasMany(comment)
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
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
