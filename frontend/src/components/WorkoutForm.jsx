import { useState, useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import Loading from '../ui/Loading';
import ConfirmationModal from "../ui/ConfirmationModal";
import CloseIcon  from '../assets/reject.png';

const WorkoutForm = ({workout, onClose}) => {

  const [confirmationModal, setConfirmationModal] = useState(false);
  const initialForm = {
    title: "",
    load: "",
    reps: "",
  };
  const {dispatch} = useWorkoutContext();

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (workout) {
      setForm({
        title: workout.title,
        load: workout.load,
        reps: workout.reps,
      });
    }
  }, [workout]);

  const resetForm = () => {
    setForm(initialForm);
  };
  const handleSubmit = async (e) => {
    if (e){
      e.preventDefault();
    }
    if (workout){
      try{
        setLoading(true);
        const response = await fetch('/api/workouts/' + workout._id, {
          method: "PATCH",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (!response.ok) {
          setError(json.error);
        }
        if (response.ok) {
          setError(null);
          resetForm();
          dispatch({type: 'UPDATE_WORKOUT' , payload: json})
          onClose && onClose();
          resetForm();
        }
      }catch(error){
        setError(error.message || "Something went wrong");
      }finally{
        setLoading(false);
      }
    }else {
    const workout = {
      title: form.title,
      load: Number(form.load),
      reps: Number(form.reps),
    };
    try {
      setLoading(true);
      const response = await fetch("/api/workouts/", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error + " :" + json.emptyFields);
      }

      if (response.ok) {
        setError(null);
        resetForm();
        dispatch({type: 'CREATE_WORKOUT' , payload: json})

      }
    } catch (error) {
      setError(error.message || "Something went wrong");

    } finally {
      setLoading(false);
    }
  }
  };
  return (
    <>
    
    
    <div className={`shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl py-5 px-6 ${workout ? "w-96" : "w-full"}`}>
        <form>
            <div className="flex flex-col">
                <div className="text-2xl my-3 flex justify-between items-center gap-2 text-blue-400">{workout ? "Edit Workout" : "Add a new Workout"} {workout && <img src={CloseIcon} alt="Close Icon" className="w-6 h-6 ml-2" onClick={onClose}/>}</div>
                <div className="flex flex-col gap-y-4">
                    <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    value={form.title}
                    className="border-b my-1 p-2 "
                    />
                    <input
                    name="load"
                    type="number"
                    placeholder="in Kg"
                    onChange={handleChange}
                    value={form.load}
                    className="border-b my-1 p-2"
                    />
                    <input
                    name="reps"
                    type="number"
                    placeholder="reps"
                    onChange={handleChange}
                    value={form.reps}
                    className="border-b my-1 p-2"
                    />
                    <div>
                        <button type="button" className="w-full bg-blue-400 rounded-2xl p-3 hover:bg-blue-600" onClick={() => setConfirmationModal(true)}>{workout ? "Update Workout" : "Add new Workout"}</button>
                    </div>
                    <div>
                        {error && <div className="text-red-600">{error}</div>}
                    </div>
                </div>
            </div>
            
        </form>
    </div>
    
    {confirmationModal && (
        <ConfirmationModal
          message={"Are you sure to add workout"}
          onConfirm={async ()=>{
            await handleSubmit();
            setConfirmationModal(false);
            
          }}
          onCancel={()=> setConfirmationModal(false)}
        />
      )}
    
    {loading && (
      <Loading/>
    )}
    </>
  );
};

export default WorkoutForm;
