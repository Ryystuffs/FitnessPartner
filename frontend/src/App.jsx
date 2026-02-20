import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


{/* pages & components */}
import Home from './pages/Home'
import Navbar from './components/navbar'
import AddWorkout from './pages/AddWorkout'

function App() {
  const [count, setCount] = useState(0)

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
