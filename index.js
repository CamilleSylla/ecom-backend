const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
var cors = require('cors')


//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/private/posts');
const ItemRoute = require('./routes/private/Item');
const MailRoute = require('./routes/private/Mail');
const getItemRoute = require('./routes/getItem');
const orderRoute = require('./routes/private/Orders');
//Config
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('connected to db');
})

//Middleware
app.use(cors())
app.use(express.json());
//route middleware

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/', ItemRoute);
app.use('/api/', getItemRoute);
app.use('/api/', orderRoute);
app.use('/api/', MailRoute);

app.listen(process.env.PORT || 5000, () => console.log('server is runnig'));