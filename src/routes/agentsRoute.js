const express = require('express');
const router = express.Router();
const agentsController = require('../controllers/agentsController');


router.post('/create', agentsController.createAgents);
router.get('/detail', agentsController.getDetailAgents);
router.get('/allagents', agentsController.getAllAgents);
router.put('/:agent_code', agentsController.updateAgents);
router.delete('/:agent_code', agentsController.deleteAgent);
router.get('/area', agentsController.getAllAgentsArea);


module.exports = router