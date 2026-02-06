import { useState, useEffect } from "react"
import '../index.css'
import WorkoutCard from "../components/WorkoutCard";
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
        <div className="h-screen p-5">
            <div className="grid grid-cols-1 gap-10">
                {workouts && workouts.map((workout, index) => (
                    <WorkoutCard workout={workout} key={index}/>
                    ))
                }
            </div>
        </div>

        
    )
}

export default Home;