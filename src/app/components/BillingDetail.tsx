import React from 'react'

const BillingDetail = () => {
    return (
        <div className='font-poppins'>

            <div className="max-w-md mx-auto p-4">
                <h2 className=" font-bold text-4xl mb-4">Billing Details</h2><br />
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="first-name">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="first-name"
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="last-name">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="last-name"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="company-name">
                        Company Name (Optional)
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="company-name"
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="country">
                        Country / Region
                    </label>
                    <select
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country"
                    >
                        <option value="">Select Country</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Bangladesh">Bangladesh</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="street-address">
                        Street address
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="street-address"
                        type="text"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="town-city">
                        Town / City
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="town-city"
                        type="text"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="province">
                        Province
                    </label>
                    <select
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="province"
                    >
                        <option value="">Select Province</option>
                        <option value="Western Province">Western Province</option>
                        <option value="Central Province">Central Province</option>
                        <option value="Southern Province">Southern Province</option>
                        <option value="Northern Province">Northern Province</option>
                    </select>
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="zip-code">
                        ZIP code
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="zip-code"
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-base font-semibold mb-2" htmlFor="phone">
                        Email address
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                    />
                </div>

                <div className="mb-4">

                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        placeholder='Additional Information'
                    />
                </div>





            </div>




        </div>
    )
}

export default BillingDetail
