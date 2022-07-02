`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class tbl_kategori extends Model {
        static associations(models) {
            models.tbl_kategori.hasMany(models.buku, {
                foreignKey: 'kategori_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });

        }
    }
    tbl_kategori.init({
        kategori_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        kategori_nama: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'tbl_kategori',
        freezeTableName: true,
        // timestamps: false
    });
    return tbl_kategori;
}