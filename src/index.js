require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const router = require('./routes/router');
const { sequelize } = require('./models');
const customerRouter = require('../src/routes/customerRoute')
const agentsRouter = require('../src/routes/agentsRoute')
const ordersRouter = require('../src/routes/ordersRoute')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// app.use('/', router);

sequelize
    .authenticate()
    .then(function(err){
        console.log('Database connection has been established successfully')
    })
    .catch(function(err){
        console.log('Unable to connect to the database:', err);
    });

app.use('/customer', customerRouter)
app.use('/agents', agentsRouter)
app.use('/orders', ordersRouter)


app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
