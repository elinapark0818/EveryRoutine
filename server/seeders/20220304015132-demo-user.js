"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "evenabee@gmail.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Doe",
          email: "rose7103@gmail.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert("users", null, {});
  },
};
