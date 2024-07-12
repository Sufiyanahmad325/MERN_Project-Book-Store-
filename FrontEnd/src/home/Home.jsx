import React from 'react'
import Banner from '../componets/Banner'
import Navbar from '../componets/Navbar'
import FreeBook from '../componets/FreeBook'
import Footer from '../componets/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <FreeBook />
            <Footer />
        </>
    )
}

export default Home