
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const workoutsRoutes = require('./routes/workouts')
//app initialization
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth')

//middleware
const allowedOrigins = [
  'http://localhost:5173',
  'https://fitness-partner-five.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman, etc.
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  credentials: true
}));
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workouts', workoutsRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/user', authRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, () => {
        console.log("Connected to database & Listening on port!", PORT);
    })
}).catch((error)=>{
    console.log(error, "failed to connect to database");      
})

//listen to port
