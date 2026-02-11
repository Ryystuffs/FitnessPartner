import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


{/* pages & components */}
import Home from './pages/Home'
import Navbar from './components/navbar'

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
