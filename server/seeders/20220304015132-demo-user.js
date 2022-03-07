"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nickname: "John",
          email: "evenabee@gmail.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "Doe",
          email: "rose7103@gmail.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
