import React from 'react'
import NavBar from '../components/NavBar'
import Middleview from './Middleview'
import Vision from './Vision'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div className="relative bg-[#FFBD05] min-h-screen">
            <NavBar bgColor="#371275" />
            <Middleview />
            <Vision />
            <Contact />
            <Footer />
        </div>
    )
}

export default page