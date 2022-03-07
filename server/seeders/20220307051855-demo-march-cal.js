"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "march22_dates",
      [
        {
          month: 3,
          date: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("march22_dates", null, {});
  },
};
