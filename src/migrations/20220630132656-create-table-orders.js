'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders',{
      ord_num:{
        allowNul: false,
        primaryKey: true,
        type: Sequelize.DECIMAL(6,0)
      },
      ord_amount:{
        allowNul: false,
        type: Sequelize.DECIMAL(12,2)
      },
      advance_amount:{
        allowNul: false,
        type: Sequelize.DECIMAL(12,2)
      },
      ord_date:{
        allowNul: false,
        type:Sequelize.DATEONLY
      },
      cust_code:{
        allowNul: false,
        type: Sequelize.STRING(6)
      },
      agent_code:{
        allowNul: false,
        type: Sequelize.STRING(6)
      },
      ord_description:{
        allowNul:false,
        type: Sequelize.STRING(60)
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  }
};
