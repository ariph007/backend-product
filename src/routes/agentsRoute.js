const express = require('express');
const router = express.Router();
const customerController = require('../controllers/agentsController');


router.post('/create', customerController.createAgents);


module.exports = router