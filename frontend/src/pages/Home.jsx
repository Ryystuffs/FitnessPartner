import { useState, useEffect } from "react"
import '../index.css'
const Home = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(()=>{
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts')
                const json = await response.json();
                
                console.log (response);
                console.log (json);
                if (response.ok){
                    setWorkouts(json);
                }
                if (!response.ok){
                    console.error("Failed to fetch workouts:", json.error);
                }
            } catch (error) {
                console.error("Error fetching workouts:", error);
            }
        }
        fetchWorkouts();
    }, [])
    return (
        <div className="">
            <div>
                {workouts && workouts.map((workout, index) => (
                    <div key={workout._id} className="">
                        <h3>{workout.title}</h3>  
                        <p>{workout.load} kg</p>
                        <p>{workout.reps} reps</p>
                        <p>{workout.createdAt}</p>
                    </div>
                    ) )
                }
            </div>
        </div>

        
    )
}

export default Home;