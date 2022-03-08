"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "group_routines",
      [
        {
          routine_name: "물 2L 마시기",
          user_id: 1,
          editor_id: 1,
          tag_name: "생활",
          image: "",
          contents: "물을 마십시다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "스트레칭 하기",
          user_id: 1,
          editor_id: 1,
          tag_name: "생활",
          image: "",
          contents: "스트레칭을 합시다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("group_routines", null, {});
  },
};
