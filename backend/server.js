require('dotenv').config();
const express = require('express');
const workoutsRoutes = require('./routes/workouts')
//app initialization
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;

//middlewars
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workouts', workoutsRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, () => {
        console.log("Connected to database & Listening on port!", PORT);
    })
}).catch((error)=>{
    console.log(error)      
})

//listen to port
