const {customer} = require('../models');

exports.createCustomer = async(req,res)=>{
    try {
        await customer.create(req.body)
        res.status(201).json({
            message: 'customer created'
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

exports.getDetailCustomer = async (req, res) =>{
    try {
        let getCustomer = await customer.findOne({
            where: {cust_code: req.body.cust_code}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data : getCustomer.dataValues
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

exports.updateCustomer = async (req, res) =>{
    try {
        const {cust_code,cust_name, cust_city, working_area,
            cust_country, grade, opening_amt, receive_amt,
            payment_amt, outstanding_amt, phone_no,
            agent_code,} = req.body;
        const customer_code = req.params.cust_code;
        
        await customer.update({
            cust_code: cust_code,
            cust_name: cust_name,
            cust_city: cust_city,
            working_area: working_area,
            cust_country: cust_country,
            grade: grade,
            opening_amt: opening_amt,
            receive_amt: receive_amt,
            payment_amt: payment_amt,
            outstanding_amt: outstanding_amt,
            phone_no: phone_no,
            agent_code: agent_code,
        },        
        {
            where : {cust_code: customer_code}
        })

        let getCustomer = await customer.findOne({
            where : {cust_code: cust_code}
        })
        
        return res.status(201).send({
            message: 'customer updated',
            data: getCustomer.dataValues
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

exports.deleteCustomer = async (req, res) =>{
    try {
        let deleted = customer.destroy({
            where : {cust_code: req.params.cust_code}
        })

        return res.status(200).send({
            message: 'customer deleted'
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

exports.getAllCustomer = async (req, res) =>{
    try {
        let getCustomers = await customer.findAll()
        return res.status(200).send({
            message: 'retrieve success',
            data: getCustomers
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

exports.getAllCustomerArea = async (req, res) =>{
    try {
        let getCustomers = await customer.findAll({
            where: {working_area: req.body.working_area}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data: getCustomers
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
