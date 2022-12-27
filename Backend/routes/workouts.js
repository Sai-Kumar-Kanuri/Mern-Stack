const express = require('express');
// const Workout = require('../models/workoutmodel')
const router = express.Router();
const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutcontroller');

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router