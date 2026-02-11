import { WorkoutContext } from "../context/WorkoutsContext";
import { useContext } from "react";


export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);


    if (!context){
        throw Error("UseContext inside the contextProvider")
    }
    return context;
}