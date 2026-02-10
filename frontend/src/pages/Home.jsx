import { useState, useEffect } from "react"
import '../index.css'
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
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
        <div className="h-screen p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="grid grid-cols-1 col-span-2 gap-10 sm:grid-cols-2 md:grid-cols-3 md:auto-cols-fr max-h-60">
                {workouts && workouts.map((workout, index) => (
                    <WorkoutCard workout={workout} key={workout._id}/>
                    ))
                }
            </div>
            <div>
                <WorkoutForm/>
            </div>
        </div>

        
    )
}

export default Home;