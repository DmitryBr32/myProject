'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'Boards',
      [
        {
          title: 'Ideas for Summer Vacation',
          userId: 1,
        },
        {
          title: 'Project Alpha - Brainstorm',
          userId: 2,
        },
        {
          title: 'Grocery List - Weekly',
          userId: 3,
        },
        {
          title: 'Coding Resources',
          userId: 4,
        },
        {
          title: 'Home Renovation - Inspiration',
          userId: 5,
        }
      ],
      {},
    );
    
    await queryInterface.bulkInsert(
      'Links',
      [
        {
          title: 'Color Theory',
          url: 'https://en.wikipedia.org/wiki/Color_theory',
          userId: 1,
          boardId: 1,
        },
        {
          title: 'Linear Algebra',
          url: 'https://en.wikipedia.org/wiki/Linear_algebra',
          userId: 2,
          boardId: 2,
        },
        {
          title: 'Quantum Mechanics',
          url: 'https://en.wikipedia.org/wiki/Quantum_mechanics',
          userId: 3,
          boardId: 3,
        },
        {
          title: 'Computer Science',
          url: 'https://en.wikipedia.org/wiki/Computer_science',
          userId: 4,
          boardId: 4,
        },
        {
          title: 'Artificial Intelligence',
          url: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
          userId: 5,
          boardId: 5,
        },
        {
          title: 'Italy',
          url: 'https://en.wikipedia.org/wiki/Italy',
          userId: 1,
          boardId: 1,
        },
        {
          title: 'Game Theory',
          url: 'https://en.wikipedia.org/wiki/Game_theory',
          userId: 2,
          boardId: 2,
        },
        {
          title: 'General relativity',
          url: 'https://en.wikipedia.org/wiki/General_relativity',
          userId: 3,
          boardId: 3,
        },
        {
          title: 'Data structure',
          url: 'https://en.wikipedia.org/wiki/Data_structure',
          userId: 4,
          boardId: 4,
        },
        {
          title: 'Machine learning',
          url: 'https://en.wikipedia.org/wiki/Machine_learning',
          userId: 5,
          boardId: 5,
        },
        {
          title: 'France',
          url: 'https://en.wikipedia.org/wiki/France',
          userId: 1,
          boardId: 1,
        },
        {
          title: 'Evolutionary biology',
          url: 'https://en.wikipedia.org/wiki/Evolutionary_biology',
          userId: 2,
          boardId: 2,
        },
        {
          title: 'String theory',
          url: 'https://en.wikipedia.org/wiki/String_theory',
          userId: 3,
          boardId: 3,
        },
        {
          title: 'Algorithm',
          url: 'https://en.wikipedia.org/wiki/Algorithm',
          userId: 4,
          boardId: 4,
        },
        {
          title: 'Deep learning',
          url: 'https://en.wikipedia.org/wiki/Deep_learning',
          userId: 5,
          boardId: 5,
        },
         {
          title: 'Spain',
          url: 'https://en.wikipedia.org/wiki/Spain',
          userId: 1,
          boardId: 1,
        },
        {
          title: 'Genetics',
          url: 'https://en.wikipedia.org/wiki/Genetics',
          userId: 2,
          boardId: 2,
        },
        {
          title: 'Time travel',
          url: 'https://en.wikipedia.org/wiki/Time_travel',
          userId: 3,
          boardId: 3,
        },
        {
          title: 'Operating system',
          url: 'https://en.wikipedia.org/wiki/Operating_system',
          userId: 4,
          boardId: 4,
        },
        {
          title: 'Neural network',
          url: 'https://en.wikipedia.org/wiki/Neural_network',
          userId: 5,
          boardId: 5,
        },
      ],
      {},
    );
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
