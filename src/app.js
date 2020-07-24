import express from "express";
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import route  from './routes';
const app = express();
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', route);

// Connect to mongodb
mongoose.connect(
    process.env.DB_CON_STRING,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully Connected to the database');
        }
    }
);

app.listen(process.env.PORT, () => {
    if(process.env.NODE_ENV !== "production")
        console.log(`The magic happens at http://localhost:${process.env.PORT}`);
});
