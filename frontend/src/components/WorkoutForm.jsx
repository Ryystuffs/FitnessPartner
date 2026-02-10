import { useState } from "react";

const WorkoutForm = () => {
  const initialForm = {
    title: "",
    load: "",
    reps: "",
  };

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = {
      title: form.title,
      load: Number(form.load),
      reps: Number(form.reps),
    };
    try {
      const response = await fetch("/api/workouts/", {
        method: "POST",
        body: JSON.stringify(workout),
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
      }
    } catch (error) {
      setError(err.message || "Something went wrong");
    } finally {

    }
  };
  return (
    <div className="shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl py-5 px-6">
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <div className="text-2xl my-3 flex justify-center text-blue-400">Add a new Workout</div>
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
                        <button type="submit" className="w-full bg-blue-400 rounded-2xl p-3 hover:bg-blue-600">Add new Workout</button>
                    </div>
                    <div>
                        {error && <div className="text-red-600">{error}</div>}
                    </div>
                </div>
            </div>
            
        </form>
    </div>
  );
};

export default WorkoutForm;
