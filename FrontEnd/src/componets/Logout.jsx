import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'



function Logout() {
    
    const {authUser , setAuthUser} = useAuth()
    console.log(authUser)

    const handleLogout =()=>{
        try {
            setAuthUser({...authUser , user:null})
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            setTimeout(()=>{
                window.location.reload()
            },2000)
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <button className='px-2 py-2 bg-red-500 text-white rounded-md cursor-pointer'
    onClick={handleLogout}
    >
        Logout</button>
  )
}

export default Logout