`use strict`;
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class buku extends Model {
        static associations(models) {
            models.buku.hasOne(models.rak, {
                foreignKey: 'buku_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE',
                // hooks: true
            });
            models.buku.hasMany(models.kategori, {
                foreignKey: 'buku_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE'
            });
            models.buku.hasMany(models.peminjaman, {
                foreignKey: 'buku_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE'
            });
            models.buku.hasMany(models.pengembalian, {
                foreignKey: 'buku_id',
                onDelete: 'CASCADE',
                onUpdate : 'CASCADE'
            });

        }
    }
    buku.init({
        buku_id: {
            primaryKey: true,
            type: DataTypes.CHAR
        },
        buku_judul: DataTypes.CHAR,
        buku_penerbit: DataTypes.CHAR,
        buku_pengarang: DataTypes.DECIMAL,
        kategori_id: DataTypes.CHAR,
        deskripsi: DataTypes.CHAR,
        gambar_url: DataTypes.CHAR,
        stok: DataTypes.CHAR,
        rak_id: DataTypes.CHAR,
    },{
        sequelize,
        modelName: 'buku',
        freezeTableName: true,
        // timestamps: false
    });
    return buku;
}