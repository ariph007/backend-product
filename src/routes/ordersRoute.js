const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController')


router.post('/create', ordersController.createOrder);
router.get('/allorders', ordersController.getAllOrder);
router.get('/detail', ordersController.getDetailOrder);
router.put('/:ord_num', ordersController.updateOrders);
router.delete('/:ord_num', ordersController.deleteOrder);
router.get('/by_cust', ordersController.filterOrderByCustomer);


module.exports = router