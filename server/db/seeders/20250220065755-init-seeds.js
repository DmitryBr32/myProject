'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        },
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
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Links',
      [
        {
          title: 'IndianRed',
          hex: '#CD5C5C',
          userId: 5,
          boardId: 7,
        },
        {
          title: 'LavenderBlush',
          hex: '#FFF0F5',
          userId: 3,
          boardId: 2,
        },
        {
          title: 'MistyRose',
          hex: '#FFE4E1',
          userId: 1,
          boardId: 9,
        },
        {
          title: 'LightCoral',
          hex: '#F08080',
          userId: 2,
          boardId: 4,
        },
        {
          title: 'Salmon',
          hex: '#FA8072',
          userId: 4,
          boardId: 1,
        },
        {
          title: 'Crimson',
          hex: '#DC143C',
          userId: 5,
          boardId: 3,
        },
        {
          title: 'HotPink',
          hex: '#FF69B4',
          userId: 3,
          boardId: 10,
        },
        {
          title: 'Tomato',
          hex: '#FF6347',
          userId: 1,
          boardId: 6,
        },
        {
          title: 'OrangeRed',
          hex: '#FF4500',
          userId: 2,
          boardId: 8,
        },
        {
          title: 'Gold',
          hex: '#FFD700',
          userId: 4,
          boardId: 5,
        },
        {
          title: 'PaleGoldenRod',
          hex: '#EEE8AA',
          userId: 5,
          boardId: 2,
        },
        {
          title: 'DarkKhaki',
          hex: '#BDB76B',
          userId: 3,
          boardId: 9,
        },
        {
          title: 'LemonChiffon',
          hex: '#FFFACD',
          userId: 1,
          boardId: 3,
        },
        {
          title: 'Khaki',
          hex: '#F0E68C',
          userId: 2,
          boardId: 7,
        },
        {
          title: 'PapayaWhip',
          hex: '#FFEFD5',
          userId: 4,
          boardId: 1,
        },
        {
          title: 'Moccasin',
          hex: '#FFE4B5',
          userId: 5,
          boardId: 6,
        },
        {
          title: 'PeachPuff',
          hex: '#FFDAB9',
          userId: 3,
          boardId: 4,
        },
        {
          title: 'Bisque',
          hex: '#FFE4C4',
          userId: 1,
          boardId: 10,
        },
        {
          title: 'LightSalmon',
          hex: '#FFA07A',
          userId: 2,
          boardId: 5,
        },
        {
          title: 'Coral',
          hex: '#FF7F50',
          userId: 4,
          boardId: 8,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
