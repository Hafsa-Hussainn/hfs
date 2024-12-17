import React from 'react'
import Image from 'next/image'
import checkout from "../images/checkout.png"
import BillingDetail from '../components/BillingDetail'
import OrderDetail from '../components/OrderDetail'
import Footer2 from '../components/Footer2'

const page = () => {
    return (
        <div>
            <div>
                <Image src={checkout} alt="" />
            </div>

            <div className='grid grid-cols-2  pt-16' >
                <BillingDetail />
                <OrderDetail />
            </div>













            <Footer2/>
        </div>
    )
}

export default page
