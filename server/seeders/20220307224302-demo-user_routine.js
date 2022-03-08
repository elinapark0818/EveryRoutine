"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_routines",
      [
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 10,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "고양이 털 청소하기"],
          }),
          user_id: 1,
          user_cal_id: 11,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 12,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 13,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["스트레칭 하기", "물 3L 마시기"] }),
          user_id: 1,
          user_cal_id: 14,
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["산책 30분 하기", "오전 5시 기상하기"],
          }),
          user_id: 1,
          user_cal_id: 15,
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["고양이 털 청소하기", "물 3L 마시기"],
          }),
          user_id: 1,
          user_cal_id: 16,
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 3L 마시기", "오전 5시 기상하기"],
          }),
          user_id: 1,
          user_cal_id: 17,
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 18,
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
