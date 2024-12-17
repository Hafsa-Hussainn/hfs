import React from 'react'
import Image from 'next/image'
import a1 from "../images/Group 145.png"
import a2 from "../images/bzb.png"
import Footer2 from '../components/Footer2'
export default function Cart() {
  return (
    <div>
       <div className='flex justify-center items-center'>< Image src={a2} alt='' className=''/></div>
       <div className='flex justify-center items-center'>< Image src={a1} alt='' className=''/></div>
       <Footer2/>
       {/* <div>< Image src={} alt=''/></div>
       <div>< Image src={} alt=''/></div> */}
    </div>
  )
}
