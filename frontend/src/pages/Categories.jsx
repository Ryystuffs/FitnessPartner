import React, { useEffect } from 'react'
import useCategoryContext from '../hooks/useCategoryContext'
import { API_URL } from '../config';
import Dumbell from "../assets/dumbell.png"
const Categories = () => {

  const { categories, dispatch } = useCategoryContext();
  const fetchCategories = async () => {
    try {
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
      console.log(error)
    }
    
  }
  useEffect(()=>{
    fetchCategories();
  }, [])
  return (
    <div className=''>
      <div>Categories</div>
      <div className='grid grid-cols-1 col-span-2 md:col-span-3 lg:col-span-2 gap-10 sm:grid-cols-2 md:grid-cols-3 md:auto-cols-fr max-h-60'>
        {categories.map((category)=>(
            <div key={category._id} className='flex text-lg'>
              <img src={Dumbell} className='w-6 h-6' alt="" />{category.name}
            </div>
        ))}
      </div>
    </div>
    
  )
}

export default Categories