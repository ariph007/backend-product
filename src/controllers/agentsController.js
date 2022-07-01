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
};

exports.getDetailAgents = async (req, res) =>{
    try {
        let getAgent = await agents.findOne({
            where: {agent_code: req.body.agent_code}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data : getAgent.dataValues
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

exports.updateAgents = async (req, res) =>{
    try {
        const {agent_code, agent_name, working_area, commission, phone_no, country} = req.body;
        const agent_code_params = req.params.agent_code;
        
        await agents.update({
            agent_code : agent_code,
            agent_name: agent_name,
            working_area: working_area,
            commission: commission,
            phone_no : phone_no,
            country: country
        },        
        {
            where : {agent_code: agent_code_params}
        })

        let getAgent = await agents.findOne({
            where : {agent_code: agent_code}
        })
        
        return res.status(201).send({
            message: 'agent updated',
            data: getAgent.dataValues
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

exports.getAllAgents = async (req, res) =>{
    try {
        let getAgent = await agents.findAll()
        return res.status(200).send({
            message: 'retrieve success',
            data: getAgent
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

exports.deleteAgent = async (req, res) =>{
    try {
        let deleted = agents.destroy({
            where : {agent_code: req.params.agent_code}
        })

        return res.status(200).send({
            message: 'agent deleted'
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

exports.getAllAgentsArea = async (req, res) =>{
    try {
        let getAgent = await agents.findAll({
            where: {working_area: req.body.working_area}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data: getAgent
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
