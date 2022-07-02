`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class rak extends Model {
        static associations(models) {
            models.rak.hasMany(models.buku, {
                foreignKey: 'rak_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });

        }
    }
    rak.init({
        rak_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        rak_nama: DataTypes.STRING,
        rak_lokasi: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'rak',
        freezeTableName: true,
        // timestamps: false
    });
    return rak;
}