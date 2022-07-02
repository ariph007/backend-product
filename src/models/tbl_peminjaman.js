`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class peminjaman extends Model {
        static associations(models) {
            models.peminjaman.hasMany(models.anggota, {
                foreignKey: 'anggota_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });
            models.peminjaman.hasMany(models.anggota, {
                foreignKey: 'staff_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });
            models.peminjaman.hasMany(models.buku, {
                foreignKey: 'buku_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });

        }
    }
    peminjaman.init({
        peminjaman_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        peminjaman_tgl: DataTypes.DATEONLY,
        staff_id: DataTypes.INTEGER,
        member_id: DataTypes.INTEGER,
        buku_id: DataTypes.INTEGER,
    },{
        sequelize,
        modelName: 'peminjaman',
        freezeTableName: true,
        // timestamps: false
    });
    return peminjaman;
}