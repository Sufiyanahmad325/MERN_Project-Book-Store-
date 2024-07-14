import React from 'react'

function Contact() {
    return (
        <div className='w-[100vw]  h-[100vh] flex items-center justify-center'>
            <div className='mt-28 flex flex-col gap-5 justify-center border-2 py-6 px-20 rounded-lg '>
                <h1 className='text-3xl'>Contact Us</h1>

                <div className='flex flex-col gap-2'>
                    <span>Name</span>
                    <input type="text" placeholder='Enter your name'
                    className=' border-2 border-black w-[300px] rounded-md py-1 px-2 dark:bg-slate-400 dark:text-black dark:placeholder:text-blue-100'  />
                </div>
                
                <div className='flex flex-col gap-2'>
                    <span>Email</span>
                    <input type="email" placeholder='Enter your email'
                    className=' border-2 border-black w-[300px] rounded-md py-1 px-2 dark:bg-slate-400 dark:text-black dark:placeholder:text-blue-100'  />
                </div>

                <div className='flex flex-col gap-2'>
                    <span>message</span>
                    <input type="text" placeholder='type your message here'
                    className=' border-2 border-black w-[300px] rounded-md py-1 px-2 dark:bg-slate-400 dark:text-black dark:placeholder:text-blue-100'  />
                </div>

                <button className='mt-12 border text-white bg-blue-500 w-22 mx-auto py-1 px-3 hover:bg-blue-700 duration-300 dark:hover:bg-slate-900 dark:duration-300 rounded-md dark:bg-slate-600 dark:text-white '>Submit</button>

            </div>
        </div>
    )
}

export default Contact