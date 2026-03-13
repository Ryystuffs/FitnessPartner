import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


{/* pages & components */}
import Home from './pages/Home'
import Navbar from './components/navbar'
import AddWorkout from './pages/AddWorkout'
import AddCategory from './pages/AddCategory'
import Categories from './pages/Categories'
import Auth from './pages/Auth';
function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route
            path='/'
            element={
              <Home />
            }>
            </Route>
            <Route path='/AddWorkout' element={<AddWorkout/>}>
            </Route>
            <Route path='/AddCategory' element={<AddCategory/>}>
            </Route>
            <Route path='/Categories' element={<Categories/>}>
            </Route>
            <Route path='/Login' element={<Auth/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
