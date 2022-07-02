`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class pengembalian extends Model {
        static associations(models) {
            models.pengembalian.hasMany(models.anggota, {
                foreignKey: 'anggota_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });
            models.pengembalian.hasMany(models.anggota, {
                foreignKey: 'staff_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });
            models.pengembalian.hasMany(models.buku, {
                foreignKey: 'buku_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });

        }
    }
    pengembalian.init({
        pengembalian_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        pengembalian_tgl: DataTypes.DATEONLY,
        staff_id: DataTypes.INTEGER,
        member_id: DataTypes.INTEGER,
        buku_id: DataTypes.INTEGER,
    },{
        sequelize,
        modelName: 'pengembalian',
        freezeTableName: true,
        // timestamps: false
    });
    return pengembalian;
}