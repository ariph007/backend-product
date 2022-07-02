'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('tbl_buku', {
			buku_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			buku_judul: {
				type: Sequelize.STRING,
			},
			buku_penerbit: {
				type: Sequelize.STRING,
			},
			buku_pengarang: {
				type: Sequelize.STRING,
			},
			kategori_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'tbl_kategori',
					key: 'kategori_id',
				},
			},
			deskripsi: {
				type: Sequelize.TEXT,
			},
			gambar_url: {
				type: Sequelize.STRING,
			},
			stok: {
				type: Sequelize.INTEGER,
			},
			rak_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'tbl_rak',
					key: 'rak_id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('tbl_buku');
	},
};
