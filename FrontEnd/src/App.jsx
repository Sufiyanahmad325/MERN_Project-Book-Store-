import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './componets/SignUp'
import ContactUs from './home/ContactUs'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import AboutPage from './componets/AboutPage '

function App() {
  const {authUser , setAuthUser} = useAuth()

  return (
    <div className='dark:bg-slate-700 dark:text-white'>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup' />}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
      <Toaster />

    </div>
  )
}

export default App
