`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class anggota extends Model {
        static associations(models) {
            models.anggota.hasMany(models.peminjaman, {
                foreignKey: 'anggota_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });
            models.anggota.hasMany(models.peminjaman, {
                foreignKey: 'anggota_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE'
            });

        }
    }
    anggota.init({
        anggota_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nama: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        no_telp: DataTypes.INTEGER,
    },{
        sequelize,
        modelName: 'anggota',
        freezeTableName: true,
        // timestamps: false
    });
    return anggota;
}