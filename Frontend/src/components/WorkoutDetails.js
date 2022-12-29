import { useWorkoutContext } from "../hooks/useWorkoutsContext"

import formatDistancToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
    const {dispatch}=useWorkoutContext();

    const handleClick = async()=> {
        const response = await fetch('/api/workouts/'+workout._id,{
            method:'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE',payload:json})
        }
    }

    return ( <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (Kgs): {workout.load}</strong></p> 
        <p><strong>Reps: {workout.reps}</strong></p> 
        {/* <p>{workout.createdAt}</p> */}
        <p>{formatDistancToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div> );
}
 
export default WorkoutDetails;