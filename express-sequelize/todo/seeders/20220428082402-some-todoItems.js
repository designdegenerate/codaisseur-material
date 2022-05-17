"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "Get the milk",
        deadline: "Today",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Learn to code",
        deadline: "Today",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Get drunk",
        deadline: "Tomorrow",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Feed the cat",
        deadline: "Today",
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Prep veggies",
        deadline: "Tomorrow",
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    queryInterface.bulkDelete('todoItems')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
