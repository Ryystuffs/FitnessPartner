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
        const workout = await Workout.findById(id);
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
        res.status(400).json({error: error.message})
    }
}

//DELETE a workout


//UPDATE a workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}