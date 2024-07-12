import React from 'react'

function Cards({item}) {
    console.log(item)
    return (
        <>
        <div className='mt-4 my-3 p-3'>
            <div className="card  w-92 shadow-xl my-2 flex justify-center p-2 bg-blue-300 hover:scale-105 ">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-between ">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-between">
                        <div className="badge badge-outline ">$:{item.price.toFixed(2)}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white">Buy Now</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cards