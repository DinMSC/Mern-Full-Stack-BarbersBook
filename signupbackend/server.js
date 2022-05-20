const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/auth');
const cors = require('cors');

// enable dotEnv
dotenv.config();

//connect to database
mongoose.connect(process.env.DATABASE_ACCESS, () =>
    console.log('Database Connected')
);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// run local host4000/app/register(because of the routesUrls)-->then execute the routes req
app.use('/app', routesUrls);
app.listen(4000, () => console.log('Server is up and running!'));
