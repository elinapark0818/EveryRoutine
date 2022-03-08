"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        // 1 그룹 댓글(오늘)
        {
          user_id: 1,
          group_routine_id: 1,
          comment: '안녕하세요 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          group_routine_id: 1,
          comment: '안녕하세요 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          group_routine_id: 1,
          comment: '안녕하세요 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          group_routine_id: 1,
          comment: '안녕하세요 4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
