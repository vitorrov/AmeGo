module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('distributors', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('distributors', 'phone');
  },
};
