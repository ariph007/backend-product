`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
        static associations(models) {
            models.orders.hasMany(models.customer, {
                foreignKey: 'cust_code',
                // onDelete: 'CASCADE',
                onUpdate : 'CASCADE'
            });

            models.orders.hasMany(models.agents, {
                foreignKey: 'agent_code',
                // onDelete: 'CASCADE',
                // onUpdate : 'CASCADE'
            });
        }
    }
    orders.init({
        ord_num: {
            primaryKey: true,
            type: DataTypes.DECIMAL
        },
        ord_amount: DataTypes.DECIMAL,
        advance_amount: DataTypes.DECIMAL,
        ord_date: DataTypes.DATEONLY,
        cust_code: DataTypes.STRING,
        agent_code: DataTypes.CHAR,
        ord_description: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'orders',
        freezeTableName: true,
        timestamps: false
    });
    return orders;
}