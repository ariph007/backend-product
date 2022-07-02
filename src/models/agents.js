`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class agents extends Model {
        static associations(models) {
            models.agents.hasOne(models.customer, {
                foreignKey: 'agent_code',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                hooks: true
            });
            models.agents.hasOne(models.orders, {
                foreignKey: 'agent_code',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE'
            });

        }
    }
    agents.init({
        agent_code: {
            primaryKey: true,
            type: DataTypes.CHAR
        },
        agent_name: DataTypes.CHAR,
        working_area: DataTypes.CHAR,
        commission: DataTypes.DECIMAL,
        phone_no: DataTypes.CHAR,
        country: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'agents',
        freezeTableName: true,
        timestamps: false
    });
    return agents;
}