const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title:{
        required: true,
        type: String,
    },
    load:{ 
        required: true,
        type: Number
    },
    reps:{
        required: true,
        type: Number

    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false
     

    }
}, { timestamps: true});


module.exports = mongoose.model('Workout', workoutSchema );
