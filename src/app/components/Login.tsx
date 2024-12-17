// pages/login.js
import Head from 'next/head';

const Login = () => {
    return (
        <div className='font-poppins'>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex justify-center items-center h-screen ">
                <div className="max-w-md w-full bg-white rounded-md shadow-md p-4">
                    <h2 className="text-4xl font-bold mb-4">Log In</h2>
                    <form>
                        <div className="mb-4 pt-8">
                            <label className="block text-base font-medium mb-2" htmlFor="username">
                                Username or email address
                            </label>
                            <input
                                className="shadow appearance-none border rounded-[10px] w-full h-[75px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block  text-base font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded-[10px] w-full h-[75px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block  text-base font-medium mb-2" htmlFor="remember-me">
                                <input
                                    className="mr-2"
                                    id="remember-me"
                                    type="checkbox"
                                />
                                Remember me
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className=" w-[215px] h-[64px] text-xl font-normal py-2 px-4 border rounded-[15px] focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Log In
                            </button>
                            <a
                                className="inline-block align-baseline font-light text-base"
                                href="#"
                            >
                                Lost Your Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;