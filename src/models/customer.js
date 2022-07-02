`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class customer extends Model {
        static associations(models) {
            models.customer.hasOne(models.orders,{
                foreigKey: 'cust_code'
            });

            models.customer.belongsTo(models.agents,{
                foreigKey: 'agent_code'
            })
        }
    }
    customer.init({
        cust_code: {
            type:DataTypes.STRING,
            primaryKey: true},
        cust_name: DataTypes.STRING,
        cust_city: DataTypes.CHAR,
        working_area: DataTypes.STRING,
        cust_country: DataTypes.STRING,
        grade: DataTypes.INTEGER,
        opening_amt: DataTypes.DECIMAL,
        receive_amt: DataTypes.DECIMAL,
        payment_amt: DataTypes.DECIMAL,
        outstanding_amt: DataTypes.DECIMAL,
        phone_no: DataTypes.STRING,
        agent_code: DataTypes.CHAR,
    },{
        sequelize,
        modelName: 'customer',
        freezeTableName: true,
        timestamps: false
    });
    return customer;
}