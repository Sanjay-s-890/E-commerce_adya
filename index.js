const express = require('express');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
require('./dbConnection');
const { auth } = require('./middlewares/auth');
const checkout = require('./controllers/checkout');
const logout = require('./controllers/logout');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./openapi.json');

// initializing application
const app = express();
app.use(express.json());
app.use('/apis-adya',swaggerUI.serve,swaggerUI.setup(swaggerJson));
// API's
app.use('/user', userRoute);
app.use('/product', productRoute);
app.post('/checkout', auth, checkout);
app.post('/logout',auth, logout);
// running server

app.listen(5001, ()=>{
    console.log('Server running...');
})

