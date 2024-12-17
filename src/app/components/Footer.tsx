import React from 'react'

function Footer() {
    return (
        <div className='font-[Poppins]  h-[555px] top-[2552px] bg-white '>
            <div className='h-[419px] top-[2650px] bg-white '>
                <footer className="footer  text-base-content p-10 font-[Poppins] ">
                    <aside>

                        <p className='font-[Poppins] font-medium text-base text-[#9F9F9F] '>
                            <br /><br />
                            400 University Drive Suite 200 Coral
                            <br />
                            Gables,<br />
                            FL 33134 USA

                        </p>
                    </aside>

                    <nav className='font-medium text-base text-black'>
                        <h6 className="footer-title">Links</h6>
                        <a className="link link-hover font-medium text-base text-black">Home</a>
                        <a className="link link-hover font-medium text-base text-black">Shop</a>
                        <a className="link link-hover font-medium text-base text-black">About</a>
                        <a className="link link-hover font-medium text-base text-black">Contact</a>
                    </nav>
                    <nav className='font-medium text-base text-black'>
                        <h6 className="footer-title font-medium text-base text-black">Help</h6>
                        <a className="link link-hover font-medium text-base text-black">Payment Options</a>
                        <a className="link link-hover font-medium text-base text-black">Returns</a>
                        <a className="link link-hover font-medium text-base text-black">Privacy Policies</a>

                    </nav>
                    <nav className='font-medium text-base text-black'>
                        <h6 className="footer-title font-medium text-base text-black">Newsletter</h6>
                        <a className="link link-hover underline underline-offset-4 font-medium text-base text-[#9F9F9F]">Enter your Email Address</a>

                    </nav>
                    <nav>
                        <h6 className="footer-title "></h6><br />
                        <a className="link link-hover font-medium text-base text-black underline underline-offset-4 underline-black">SUBSCRIBE</a>

                    </nav>

                </footer>
                <footer className="footer bg-white text-base-content border-base-300 border-t px-10 py-4">
                    <aside className="grid-flow-col items-center">

                        <p className='font-Poppins font-normal text-base text-black '>
                            2022 Meubel House. All rights reverved
                        </p>
                    </aside>

                </footer>
            </div>
        </div >
    )
}

export default Footer
