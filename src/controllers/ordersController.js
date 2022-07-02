const { Op } = require('sequelize');
const {orders} = require('../models');

exports.createOrder = async(req,res)=>{
    try {
        await orders.create(req.body)
        res.status(201).json({
            message: 'order created'
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

exports.getAllOrder = async (req, res) =>{
    try {
        let getOrder = await orders.findAll()
        return res.status(200).send({
            message: 'retrieve success',
            data: getOrder
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

exports.getDetailOrder = async (req, res) =>{
    try {
        let getOrder = await orders.findOne({
            where: {ord_num: req.body.ord_num}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data : getOrder.dataValues
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

exports.updateOrders = async (req, res) =>{
    try {
        const {ord_num, ord_amount, advance_amount, ord_date, cust_code, agent_code, ord_description} = req.body;
        const ord_num_params = req.params.ord_num;
        
        await orders.update({
            ord_num : ord_num,
            ord_amount: ord_amount,
            advance_amount: advance_amount,
            ord_date: ord_date,
            cust_code : cust_code,
            agent_code: agent_code,
            ord_description: ord_description
        },        
        {
            where : {ord_num: ord_num_params}
        })

        let getAgent = await orders.findOne({
            where : {ord_num: ord_num}
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

exports.deleteOrder = async (req, res) =>{
    try {
        let deleted = orders.destroy({
            where : {ord_num: req.params.ord_num}
        })

        return res.status(200).send({
            message: 'order deleted'
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

exports.filterOrderByCustomer = async (req, res) =>{
    try {
        let getOrder = await orders.findAll({
            where: {cust_code: req.body.cust_code}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data: getOrder
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

exports.getOrderByRangeDate = async (req, res) =>{
    try {
        const startDate = req.body.starDate
        const endDate = req.body.endDate
        let getOrderRangeDate = await orders.findAll({
            where: {
                "ord_date": {[Op.between] : [startDate, endDate]}
            }
        })

        return res.status(200).send({
            message: 'retrieve success',
            data: getOrderRangeDate
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