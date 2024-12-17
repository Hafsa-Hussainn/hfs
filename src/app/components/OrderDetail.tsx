import React from 'react'



const OrderDetail = () => {
    return (
        <div className='font-poppins'>
            <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8">


                <div className=" p-4 md:p-6 lg:p-8">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold text-2xl ">Product</th>
                                <th className="text-right font-semibold  text-2xl">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-normal text-base text-[#9F9F9F]  '>Asgaard sofa x 1</td>
                                <td className="font-normal text-base text-right">Rs. 250,000.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='font-normal text-base'>Sub Total</td>
                                <td className="font-normal text-base text-right">Rs. 250,000.00</td>
                            </tr>
                            <tr>
                                <th className="font-bold text-lg text-left">Total</th>
                                <th colSpan={2} className="text-right font-extrabold text-2xl text-[#B88E2F]  ">
                                    Rs. 250,000.00
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="mt-8">

                    <div >
                        <div className=" p-4 md:p-6 lg:p-8 w-full md:w-1/2">
                            <h4 className="text-lg font-bold  mb-2">Direct Bank Transfer</h4>
                            <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use <br />
                                your Order ID as the payment reference. Your order will not be <br />
                                shipped until the funds have cleared in our account.</p>
                        </div>

                        <div className='p-4'>
                            <div className=" flex items-center">
                                <input
                                    type="radio"
                                    id="direct-bank-transfer"
                                    name="payment-method"
                                    className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                                />
                                <label
                                    htmlFor="direct-bank-transfer"
                                    className="ml-2 text-[#9F9F9F]"
                                >
                                    Direct Bank Transfer
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="cash-on-delivery"
                                    name="payment-method"
                                    className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"
                                />
                                <label
                                    htmlFor="cash-on-delivery"
                                    className="ml-2 text-[#9F9F9F]"
                                >
                                    Cash On Delivery
                                </label>
                            </div>
                        </div>
                        <div className='p-4'>

                            <p className="font-light text-base mb-4">
                                Your personal data will be used to support your experience <br />
                                throughout this website, to manage access to your account, and <br />
                                for other purposes described in our <span className='font-semibold text-base'>privacy policy.</span>
                            </p>

                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button
                            className="h-[64px] w-[318px] text-xl font-normal py-2 px-4 border rounded-[15px] focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Place Order
                        </button>
                    </div>
                </div>

            </div>


    
        </div>
    )
}

export default OrderDetail
