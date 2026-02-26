import React from 'react'
import { useState, useEffect } from "react";
import { useCategoryContext } from '../context/CategoryContext';
import ConfirmationModal from '../ui/ConfirmationModal';
const CategoryForm = () => {

  const [confirmationModal, setConfirmationModal] = useState(false);

  const initialState = {
    name: "",
  }
  const [form, setForm] = useState(initialState);
  const resetForm = () => {
    setForm(initialState);
  };
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <div className='shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl py-5 px-6 w-full'>
      <form action="">
        <div className="flex flex-col px-5 py-5 gap-y-4">
          <div className="text-2xl my-3 flex justify-center items-center gap-2 text-blue-400">New Category </div>


          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-sm">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-500 p-3 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div>
              <button type="button" className="w-full bg-blue-400 rounded-2xl p-3 hover:bg-blue-600 hover:scale-105 transition-transform duration-200" onClick={()=> {confirmationModal(true)}}>Add Category</button>
            </div>
          </div>

        </div>
      </form>

      {confirmationModal && (
        <ConfirmationModal
          message={"Are you sure to add categories"}
          onConfirm={async ()=>{
            await handleSubmit();
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