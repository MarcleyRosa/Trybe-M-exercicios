'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books_ex', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books_ex');
  }
};
