'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('agents',{
      agent_code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR(6)
      },
      agent_name: {
        allowNull: false,
        type: Sequelize.CHAR(40),
      },
      working_area:{
        allowNull: false,
        type: Sequelize.CHAR(35)
      },
      commission:{
        allowNull:false,
        type: Sequelize.DECIMAL(10,2)
      },
      phone_no:{
        allowNull:false,
        type: Sequelize.CHAR(15)
      },
      country:{
        type: Sequelize.STRING(25)
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
