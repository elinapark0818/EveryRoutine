"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_routines",
      [
        {
          list: toString({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 1,
          daily_check: toString({ checked: [0, 0] }),
        },
        {
          list: toString({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 2,
          user_cal_id: 2,
          daily_check: toString({ checked: [0, 0] }),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
