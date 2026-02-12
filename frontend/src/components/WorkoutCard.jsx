import React, { useState } from "react";
import ConfirmationModal from "../ui/ConfirmationModal";
import { useWorkoutContext } from "../hooks/useWorkoutContext";


const WorkoutCard = ({ workout, index }) => {
  
  const {dispatch} = useWorkoutContext();
  const handleDelete = async () => {
    try{
    const response = await fetch('/api/workouts/'+ workout._id, {
      method: "DELETE"
    });
    const json = await response.json();
    if (response.ok){
      dispatch({type: "DELETE_WORKOUT", payload: json})
      console.log(json);
      console.log("deleted");
    }
  }catch(error){
    console.log(error);
  }
  };
  const [confirmationModal, setConfirmationModal] = useState(false);
  return (
    <>
      <div className="shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl p-5">
        <div className="">
          <h3 className="font-semibold text-blue-400">{workout.title}</h3>
        </div>
        <div className="text-xs flex flex-col gap-3">
          <hr className="my-2" />
          <p>{workout.load} kg</p>
          <p>{workout.reps} reps</p>
          <p>{workout.createdAt}</p>
          <div className="flex gap-2 justify-end">
            <button type="button" className="w-15 h-10 bg-red-400 rounded-xl p-2 hover:bg-red-500 " onClick={()=> setConfirmationModal(true)}>Delete</button>
            <button type="button" className="w-15 h-10 bg-green-400 rounded-xl p-2 hover:bg-green-500 ">Edit</button>
          </div>
        </div>
        
      </div>
      {confirmationModal && (
        <ConfirmationModal
          message={"Are you sure to delete workout"}
          onConfirm={async ()=>{
            await handleDelete();
            setConfirmationModal(false);
          }}
          onCancel={()=> setConfirmationModal(false)}
        />
      )}
    </>
  );
};

export default WorkoutCard;
