const { default: mongoose } = require('mongoose');
const Workout = require('../models/workoutModel');

//GET all workouts
const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1});
    if (!workouts){
        return res.status(404).json({error: 'No workouts found'});
    }
    res.status(200).json(workouts);
}

//GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    try{
        
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No such workout"});
        }
        const workout = await Workout.findById(id);
        if (!workout){
            return res.status(400).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    }
    catch(error){
        res.status(400).json({error: "There is no workout with that id"});
    }
    
}
//POST a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} =  req.body;
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error){
        res.status(400).json({error: error.message })
    }
}

//DELETE a workoutd
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No such workout"});
        }
        const workout = await Workout.findOneAndDelete({_id: id});
        if (!workout){
            return res.status(400).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//UPDATE a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params;

    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No such workout"});
        }

        const workout = await Workout.findByIdAndUpdate({_id: id}, {
            ...req.body
        })
        if (!workout){
            return res.status(400).json({error: "No such workout"});
        }   
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }


}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}