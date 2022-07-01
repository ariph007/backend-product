`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
        static associations(models) {
            models.orders.hasMany(model.customer, {
                foreignKey: 'cust_code'
            });

            models.orders.hasMany(model.agents, {
                foreignKey: 'agent_code'
            });
        }
    }
    orders.init({
        ord_num: DataTypes.DECIMAL,
        ord_amount: DataTypes.DECIMAL,
        advance_amount: DataTypes.DECIMAL,
        ord_date: DataTypes.DATEONLY,
        cust_code: DataTypes.STRING,
        agent_code: DataTypes.STRING,
        ord_description: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'orders',
    });
    return orders;
}