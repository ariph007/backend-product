`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class customer extends Model {
        static associations(models) {
            //hasone => one to one => source.hasone(target) => fk def in trg O
            models.customer.hasOne(models.orders,{
                foreigKey: 'cust_code'
            });

            //hasone => one to one => source.belongsTo(target) => fk def in src A
            models.customer.belongsTo(models.agents,{
                foreigKey: 'agent_code'
            })
        }
    }
    customer.init({
        cust_code: DataTypes.STRING,
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
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },{
        sequelize,
        modelName: 'customer',
    });
    return customer;
}