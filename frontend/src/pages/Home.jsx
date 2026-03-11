import { useState, useEffect } from "react"
import '../index.css'
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import  useWorkoutContext from "../hooks/useWorkoutContext";
import CategoryForm from "../components/CategoryForm";
import Loading from '../ui/Loading';
import { API_URL } from "../config";

const Home = () => {
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const {workouts, dispatch} = useWorkoutContext();
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/categories/`);
        const json = await response.json();
        console.log(json);
        

        if (!response.ok){
            setError(json.error);
        }

        if (response.ok){
            setError(null);
            setCategories(json);
        }
        
        } catch (error) {
        setError(error.message);
        }finally{
        setLoading(false);
        }
    } 

    useEffect(()=>{
        fetchCategories();
    }, [])
    useEffect(()=>{
        const fetchWorkouts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`);
                console.log("API URL:", import.meta.env.VITE_API_URL);
                const json = await response.json();
                
                console.log (response);
                console.log (json);
                if (response.ok){
                    dispatch({type: "SET_WORKOUTS" , payload: json })
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
            <div className="grid grid-cols-1 col-span-2 md:col-span-3 lg:col-span-2 gap-10 sm:grid-cols-2 md:grid-cols-3 md:auto-cols-fr max-h-60">
                {workouts && workouts.map((workout, index) => (
                    <WorkoutCard workout={workout} key={workout._id}/>
                    ))
                }
            </div>
            <div className="hidden lg:block space-y-10">
                <WorkoutForm categories={categories}/>
                <CategoryForm/>
            </div>
            
        </div>

        
    )
}

export default Home;