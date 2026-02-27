import React from 'react'
import { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'

const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw Error("useCategoryContext must be used inside a CategoryContextProvider");
  }

  return context;
}


export default useCategoryContext;