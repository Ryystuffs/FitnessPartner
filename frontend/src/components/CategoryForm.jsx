import React from 'react'
import { useState } from "react";
import  useCategoryContext from '../hooks/useCategoryContext';
import ConfirmationModal from '../ui/ConfirmationModal';
const CategoryForm = () => {

  const [confirmationModal, setConfirmationModal] = useState(false);
  const [error, setError] = useState();
  const [submitting, setSubmitting] = useState(false);
  const { dispatch } = useCategoryContext();

  const initialState = {
    name: "",
  }
  const [form, setForm] = useState(initialState);
  const resetForm = () => {
    setForm(initialState);
  };
  const handleChange =  (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleCategorySubmit = async (e) => {
    if(e){
      e.preventDefault();
    }
    const missingFields = [];
    
    if (!form.name.trim() || form.name < 3){
      missingFields.push("Fill up fields")
    }

    try {
      setSubmitting(true);
      const categories = {
        name: form.name
      }
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories/`, 
        { method: "POST",
          body: JSON.stringify(categories),
          headers: {
            "Content-Type" : "application/json"
          }
        });
      const json = await response.json();
      if (!response.ok){
        setError(json.error);
      }
      if (response.ok){
        console.log("submitted");
        dispatch({type: "CREATE_CATEGORY", payload: json})
        resetForm();
      }
    } catch (error) {
      setError(error.message)
    }finally{
      setSubmitting(false);
    }
  }
  return (
    <>
    <div className='shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl py-5 px-6 w-full'>
      <form>
        <div className="flex flex-col px-5 py-5 gap-y-4">
          <div className="text-2xl my-3 flex justify-center items-center gap-2 text-blue-400">New Category </div>


          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-sm">Name:</label>
            <input
              type="text"
              id="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-500 p-3 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div>
              <button disabled={submitting} type="button" className="w-full bg-blue-400 rounded-2xl p-3 hover:bg-blue-600 hover:scale-105 transition-transform duration-200" onClick={()=> {setConfirmationModal(true)}}>Add Category</button>
            </div>
          </div>
            {error && <div className="text-red-600">{error}</div>}
        </div>
      </form>

      

      {confirmationModal && (
        <ConfirmationModal
          message={"Are you sure to add categories"}
          onConfirm={async ()=>{
            await handleCategorySubmit();
            setConfirmationModal(false);
          }}
          onCancel={()=> setConfirmationModal(false)}
        />
      )}

    </div>
</>
  )
}

export default CategoryForm