"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_routines",
      [
        {
          list: JSON.stringify({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 10,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 11,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 12,
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_routines", null, {});
  },
};
