const {agents} = require('../models');

exports.createAgents = async(req,res)=>{
    try {
        await agents.create(req.body)
        res.status(201).json({
            message: 'agent created'
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