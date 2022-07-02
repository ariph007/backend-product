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
        type: Sequelize.STRING(6),
        references: {
          model: 'customer',
          key: 'cust_code'
        }
      },
      agent_code:{
        allowNul: false,
        type: Sequelize.CHAR(6),
        references: {
          model: 'agents',
          key: 'agent_code'
        }
      },
      ord_description:{
        allowNul:false,
        type: Sequelize.STRING(60)
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
