'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customer',{
      cust_code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(6)
      },
      cust_name: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      cust_city:{
        allowNull: false,
        type: Sequelize.CHAR(35)
      },
      working_area:{
        allowNull:false,
        type: Sequelize.STRING(35)
      },
      cust_country:{
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      grade:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      opening_amt:{
        allowNull: false,
        type: Sequelize.DECIMAL(12,2)
      },
      receive_amt:{
        allowNull: false,
        type: Sequelize.DECIMAL(12,2)
      },
      payment_amt:{
        allowNull: false,
        type: Sequelize.DECIMAL(12,2)
      },
      outstanding_amt:{
        allowNull: false,
        type: Sequelize.DECIMAL(12,2)
      },
      phone_no:{
        allowNull:false,
        type:Sequelize.STRING(17)
      },
      agent_code:{
        allowNull:false,
        type:Sequelize.CHAR(6),
        references: {
          model: 'agents',
          key: 'agent_code'
        }
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
