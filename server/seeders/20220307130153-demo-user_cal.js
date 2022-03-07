"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_cals",
      [
        {
          date: 1,
          user_id: 3,
          user_routine_id: 1,
        },
        {
          date: 2,
          user_id: 4,
          user_routine_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_cals", null, {});
  },
};
