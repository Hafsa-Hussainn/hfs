import React from 'react'
import Image from 'next/image'
import contct from "../images/contact.png"
import Footer2 from '../components/Footer2'
import add from "../images/add.png"
import ContactDetail from '../components/ContactDetail'


const contact = () => {
    return (
        <div className='font-poppins'>

            <div>
                <Image src={contct} alt="" />
            </div>
            <div>
                <div className=' '>
                    <p className='text-center font-[600] text-[36px] pt-24'>Get In Touch With Us</p>
                    <p className='text-center font-[400] text-[12px] text-[#9F9F9F] '>For More Information About Our Product & Services. Please Feel Free To Drop Us <br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    
                </div>
                <div className=' grid grid-cols-2 gap-8 p-8 '>
                    <div className='pl-32'>
                        <Image src={add} alt="" />
                    </div>
                    <div>
                        <ContactDetail />
                    </div>
                </div>
            </div>








            <Footer2 />
        </div>
    )
}

export default contact
