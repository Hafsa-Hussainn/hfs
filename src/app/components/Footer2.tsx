import React from 'react'
import Image from 'next/image'

import g74 from "../images/Group 74.png"
import g75 from "../images/Group 75.png"
import g73 from "../images/Group 73.png"


const Footer2 = () => {
    return (
        <div >
            <div className='lg:h-[300px] xl:h-[300px] bg-[#FAF4F4] grid items-center pl-16 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:h-[500px] sm:h-[600px]  '>
                <div><Image src={g73} alt="" /></div>
                <div><Image src={g74} alt="" /></div>
                <div><Image src={g75} alt="" /></div>

            
            </div>
        </div>
    )
}

export default Footer2
