import React from 'react'
import Image from 'next/image'
import g1 from "../images/group1.png"
import g2 from "../images/group2.png"
import g3 from "../images/group3.png"
import g4 from "../images/group4.png"

const RepeatedDiv = () => {
    return (
        <div className='font-poppins'>
            <div className=" flex justify-evenly items-center sm:flex-wrap lg:flex-row ">
                <div><Image src={g1} alt="" />
                    <div className="pl-8">
                        <p className="font-normal text-base">Trenton modular sofa_3</p>
                        <p className="font-semibold text-2xl">Rs. 25,000.00</p>
                    </div>
                </div>
                <div><Image src={g2} alt="" />
                    <div className="pl-8">
                        <p className="font-normal text-base">Granite dining table with <br /> dining chair</p>
                        <p className="font-semibold text-2xl">Rs. 25,000.00</p>
                    </div>
                </div>
                <div><Image src={g3} alt="" />
                    <div className="pl-8">
                        <p className="font-normal text-base">Outdoor bar table and <br /> stool</p>
                        <p className="font-semibold text-2xl">Rs. 25,000.00</p>
                    </div>
                </div>
                <div><Image src={g4} alt="" />
                    <div className="pl-8">
                        <p className="font-normal text-base">Plain console with teak <br /> mirror</p>
                        <p className="font-semibold text-2xl">Rs. 25,000.00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RepeatedDiv
