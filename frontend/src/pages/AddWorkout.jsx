import React, { useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import useCategoryContext from '../hooks/useCategoryContext'
import { useEffect } from 'react';
import { API_URL } from '../config';
const AddWorkout = () => {
  const { categories, dispatch } = useCategoryContext();

    const [loading, setLoading] = useState(false);
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/categories`)
        const json = await response.json();
          if (!response.ok){
            console.log(error);
          }
  
          if (response.ok){
            console.log("success");
            dispatch({type: "SET_CATEGORIES", payload: json})
          }
      
      } catch (error) {
        console.log(error.message)
      }
      finally {
        setLoading(false);
      }
      
    }
    useEffect(()=>{
      fetchCategories();
    }, [])
  return (
    <div className='p-10'>
        <WorkoutForm categories={categories}/>
    </div>
  )
}

export default AddWorkout