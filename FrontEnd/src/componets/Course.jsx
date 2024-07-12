import React from 'react'
import Cards from './Cards'
import lists from "../../public/list.json"
import { Link } from 'react-router-dom'

function Course() {
    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div className='pt-32 text-center'>
                    <h1 className="text-2xl font-semibold ">We're Delighted to have you <span className='text-pink-500'>Here! : ) </span> </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim veritatis illo recusandae? Accusantium quam rem aperiam porro officia necessitatibus, laboriosam repellat similique asperiores nemo quia nostrum inventore maxime ipsum unde natus in explicabo! Eum, dolor fugit illo perspiciatis excepturi optio culpa beatae odit sunt eaque, quisquam iusto pariatur natus earum quidem assumenda  dolor. Rem.
                    </p>
                    <Link to={"/"}>
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>
                        Back
                    </button>
                    </Link>
                </div>


                <div className='mt-12  grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-4 '>
                    {
                        lists.map(item => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>

            </div>


        </>
    )
}

export default Course