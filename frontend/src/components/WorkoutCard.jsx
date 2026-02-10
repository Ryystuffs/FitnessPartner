import React from "react";

const WorkoutCard = ({ workout, index }) => {
  return (
    <div className="shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl p-5">
      <div className="">
        <h3 className="font-semibold text-blue-400">{workout.title}</h3>
      </div>
      <div className="text-xs flex flex-col gap-3">
        <hr className="my-2" />
        <p>{workout.load} kg</p>
        <p>{workout.reps} reps</p>
        <p>{workout.createdAt}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;
