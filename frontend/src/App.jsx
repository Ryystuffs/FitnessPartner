import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

{/* pages & components */}
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black">
        <BrowserRouter>
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
