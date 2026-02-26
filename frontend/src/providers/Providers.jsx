import React from 'react'
import { WorkoutContextProvider } from '../context/WorkoutsContext'
import { CategoryContextProvider } from '../context/CategoryContext'
const Providers = ({children}) => {
  return (
    <CategoryContextProvider>
      <WorkoutContextProvider>
        {children}
      </WorkoutContextProvider>
    </CategoryContextProvider>
  )
}

export default Providers