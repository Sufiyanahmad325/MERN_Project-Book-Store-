import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Cards from './Cards';
import axios from 'axios';

function FreeBook() {
const [filterData, setFilterData] = useState([])

    useEffect(()=>{
        const  getBook=async()=>{
            await axios.get("http://localhost:8000/book")
            .then((res)=>{
                console.log(res.data);
                setFilterData(prev=>res.data.filter(ele=>ele.price === 0))
            }).catch(error=>{
                console.log(error)
            })
        }
        getBook()
    },[])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 '>

                <div>
                    <h1 className=' font-semibold text-xl pb-2'>Free Offered Course</h1>
                    <p className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?</p>
                </div>


                <div>

                    <Slider {...settings}>
                    {filterData.map(ele=>(
                        <Cards item={ele} key={ele.id}/>
                    ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default FreeBook