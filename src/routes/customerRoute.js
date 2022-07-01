const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');



router.post('/create', customerController.createCustomer);
router.get('/detail', customerController.getDetailCustomer);
router.get('/allcustomers', customerController.getAllCustomer);
router.get('/:working_area', customerController.getAllCustomerArea);
router.put('/:cust_code', customerController.updateCustomer);
router.delete('/:cust_code', customerController.deleteCustomer);

module.exports = router