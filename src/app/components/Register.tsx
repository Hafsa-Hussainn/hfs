import React from 'react'

const Register = () => {
    return (
        <div className='font-poppins'>
            <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
                <h2 className="text-4xl font-semibold mb-4">Register</h2>
                <div className="mb-4">
                    <label className="block  text-base font-medium mb-2" htmlFor="email">
                        Email address
                    </label>
                    <input
                        className="shadow appearance-none h-[75px] border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        
                    />
                </div>
                <p className="font-light text-base mb-4">
                    A link to set a new password will be sent to your email address.
                </p>
                <p className="font-light text-base mb-4">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold text-base'>privacy policy.</span> 
                </p>
                <button
                    className="h-[64px] w-[215px] text-xl font-normal py-2 px-4 border rounded-[15px] focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register
