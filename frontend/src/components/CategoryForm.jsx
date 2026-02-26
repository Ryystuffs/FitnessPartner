import React from 'react'
import { useState, useEffect } from "react";
const CategoryForm = () => {
  
  const initialState = {
    name: "",
  }
  const [form, setForm] = useState(initialState);
  const resetForm = () => {
    setForm(initialState);
  };
  const handleChange = (e) => {
    setForm((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
  }))
  }
  return (
    <div className='shadow-2xl/45 border bg-gray-800 border-gray-700 rounded-2xl py-5 px-6 w-full'>
      <h2>Category Form</h2>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default CategoryForm