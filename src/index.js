require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const router = require('./routes/router');
const { sequelize } = require('./models');
const app = express();
const kategoriRouter = require('../src/routes/kategoriRoute')


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

app.use('/kategori', kategoriRouter)



app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
