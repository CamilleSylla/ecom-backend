const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')


//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/private/posts');
const ItemRoute = require('./routes/private/Item');
const getItemRoute = require('./routes/getItem')
//Config
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('connected to db');
})

//Middleware
app.use(express.json());

//route middleware

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/', ItemRoute);
app.use('/api/', getItemRoute);

app.listen(5000, () => console.log('server is runnig'));