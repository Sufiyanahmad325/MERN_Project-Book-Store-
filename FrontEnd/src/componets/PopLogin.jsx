import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function PopLogin() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}



        <dialog id="my_modal_3" className="modal dark:text-black">
            <div className="modal-box">
                <form  method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                <h3 className="font-bold text-lg">Login!</h3>


                <div className='mt-4 space-y-2 '>
                    <span>Email</span>
                    <br />
                    <input  required
                    className='w-80 px-3 border rounded-md outline-none py-1  ' type="email" placeholder='Enter your email' 
                    /> <br />
                </div>

                <div className='mt-4 space-y-2 '>
                    <span>Password</span>
                    <br />
                    <input required
                    className='w-80 px-3 border rounded-md outline-none py-1  ' type="text" placeholder='Enter your password' 
                    /> <br />
                </div>

                {/* button */}

                <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                </div>
                </form>



            </div>
        </dialog>
    </div>
    )
}

export default PopLogin