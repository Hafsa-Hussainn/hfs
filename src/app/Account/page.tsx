import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Image from 'next/image'
import g78 from "../images/Group 78.png"
import Footer2 from '../components/Footer2'

const Account = () => {
    return (
        <div>
            <div>
                <Image src={g78} alt="" />
            </div>
            <div className='flex justify-evenly sm:flex-wrap lg:flex-row items-center  '>
                <Login />
                <Register />
            </div>
            <br/>
            <Footer2 />
        </div>
    )
}

export default Account
