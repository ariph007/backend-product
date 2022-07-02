const {tbl_kategori} = require('../models');

exports.getAllKategori = async (req, res) =>{
    try {
        let getKategori = await tbl_kategori.findAll()
        return res.status(200).send({
            message: 'retrieve success',
            data: getKategori
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: error.message,
            data: null
        })
    }
}

exports.createKategori = async(req,res)=>{
    try {
        await tbl_kategori.create(req.body)
        res.status(201).json({
            message: 'kategori created'
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: error.message,
            data: null
        })
    }
};

exports.updateKategori = async (req, res) =>{
    try {
        const {kategori_nama} = req.body;
        const kategori_id_params = req.params.kategori_id;
        
        await agents.update({
            kategori_nama : kategori_nama,
            kategori_id : kategori_id
        },        
        {
            where : {kategori_id: kategori_id_params}
        })

        let getKategori = await agents.findOne({
            where : {kategori_id: kategori_id}
        })
        
        return res.status(201).send({
            message: 'kategori updated',
            data: getKategori.dataValues
        })

    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: error.message,
            data: null
        })
    }
};
