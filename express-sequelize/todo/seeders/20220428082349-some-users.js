"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", 
    [
      {
        name: "Amalie",
        email: "amalie@a",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Laurens",
        email: "asfgd@egfdf.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
