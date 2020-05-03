module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'phone');
  },
};
