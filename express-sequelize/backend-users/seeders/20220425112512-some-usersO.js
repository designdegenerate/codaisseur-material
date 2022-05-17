"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Leo Messi",
        email: "Leo@messi.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dan Abramov",
        email: "dan@redux.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelet("users", null, {});
  },
};