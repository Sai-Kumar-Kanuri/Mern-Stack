require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require('./routes/workouts')


const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes

app.use('/api/workouts', workoutRoutes)

app.get('/')


//
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000');
        });
    })
    .catch((error) => {
        console.log(error);
    })

