'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'todoLists', [
        {
        title: 'Groceries',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Work',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Personal',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    )
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
