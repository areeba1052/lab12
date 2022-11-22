const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 



require('dotenv').config();

const app = express();
const port = 8000;


const uri = process.env.ATLAS_URI;
connect(uri, {useNewUrlParser:true});
const connection = _connection;
connection.once('open', () => {
    console.log("Connected to db");
})

app.use(cors());
app.use(json());

import UserRouter from './routes/user';

app.use('/User', UserRouter)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});