module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
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
    //timestamps는 생성일과 수정일, paranoid는 삭제일(복구용)입니다
    // charset과 collate를 다음과 같이 해야 한글이 깨지지 않습니다.
    {
      timestamp: false,
      underscored: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
};
