import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import PopLogin from './PopLogin'

function SignUp() {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='flex justify-center items-center h-screen '>

                <div id="" className=" dark:text-white dark:bg-slate-700">
                    <div className="modal-box w-[600px]">
                        <form onSubmit={handleSubmit(onSubmit)} method="diolog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">SignUp!</h3>


                        <div className='mt-4 space-y-2 '>
                            <span>Name</span>
                            <br />
                            <input {...register("name", { required: true })}
                             className='w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-600 dark:text-white   '
                              type="text" placeholder='Enter your Name' 
                              /> <br />
                              {errors.name && <span className='text-red-600 text-sm'>name is required</span>}
                        </div>

                        <div className='mt-4 space-y-2 '>
                            <span>Email</span>
                            <br />
                            <input  {...register("email", { required: true })}
                            className='w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-600 dark:text:white   '
                             type="email" placeholder='Enter your email' 
                             /> <br />
                             {errors.email && <span className='text-red-600 text-sm'>email is required</span>}
                        </div>

                        <div className='mt-4 space-y-2 '>
                            <span>Password</span>
                            <br />
                            <input  {...register("password", { required: true })}
                            className='w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-600 dark:text:white   '
                             type="text" placeholder='Enter your password' 
                             /> <br />
                             {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                        </div>

                        {/* button */}

                        <div className='flex justify-around mt-4'>
                            <button
                                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                SignUp
                            </button>

                            <p>
                                Have account?{" "}
                                <button>
                                     <span 
                                     className='underline text-blue-500 cursor-pointer'
                                      onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</span>
                                </button>{" "}
                                <Login/>
                            </p>
                        </div>
                        </form>



                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp