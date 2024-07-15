import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:8000/user/login", userInfo)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Logged in  successfully');
                }
                localStorage.setItem("Users", JSON.stringify(res.data))
            }).catch(error => {
                toast.error(error.response.data.message)
            })
    }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}



            <dialog id="my_modal_3" className="modal dark:text-black">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={'/'} onClick={() => document.getElementById("my_modal_3").close()} 
                         className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Login!</h3>


                        <div className='mt-4 space-y-2 '>
                            <span>Email</span>
                            <br />
                            <input {...register("email", { required: true })}
                                className='w-80 px-3 border rounded-md outline-none py-1  ' type="email" placeholder='Enter your email'
                            /> <br />
                            {errors.email && <span className='text-sm text-red-600'>email is required</span>}
                        </div>

                        <div className='mt-4 space-y-2 '>
                            <span>Password</span>
                            <br />
                            <input {...register("password", { required: true })}
                                className='w-80 px-3 border rounded-md outline-none py-1  ' type="text" placeholder='Enter your password'
                            /> <br />
                            {errors.password && <span className='text-sm text-red-600'>password is required</span>}
                        </div>

                        {/* button */}

                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <Link to={'signup'}>Not registered? <span className='underline text-blue-500 cursor-pointer'>Signup</span> </Link>
                        </div>
                    </form>



                </div>
            </dialog>
        </div>
    )
}

export default Login