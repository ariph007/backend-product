const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/kategoriController');


router.get('/all', kategoriController.getAllKategori);
router.post('/create', kategoriController.createKategori);
router.put('/update', kategoriController.updateKategori);



module.exports = router