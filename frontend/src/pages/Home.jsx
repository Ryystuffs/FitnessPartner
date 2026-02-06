import { useState, useEffect } from "react"

const Home = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(()=>{
        const fetchWorkouts = async () => {
            try {
                const allWorkouts = await fetch('/api/workouts')
                const json = await allWorkouts.json();
                
                console.log (allWorkouts);
                console.log (json);
                if (allWorkouts.ok){
                    setWorkouts(json);
                }
                if (!allWorkouts.ok){
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
            Fitness Partner

            <div>
                {workouts && workouts.map((workout, index) => (
            <div key={workout._id} className="">
                <h3>{workout.title}</h3>  
                <p>{workout.load} kg</p>
                <p>{workout.reps} reps</p>
                <p>{workout.createdAt}</p>
            </div>
            ))
        }
            </div>
        </div>

        
    )
}

export default Home;