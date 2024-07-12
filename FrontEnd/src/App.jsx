import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import Banner from './componets/Banner'
import Footer from './componets/Footer'
import FreeBook from './componets/FreeBook'
import Home from './home/Home'
import Course from './componets/Course'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
      </Routes>

    </div>
  )
}

export default App
