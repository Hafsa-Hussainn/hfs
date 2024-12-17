import React from 'react'
import Image from 'next/image'
import g84 from "../images/Group 84.png"
import g85 from "../images/Group 85.png"
import g86 from "../images/Group 86.png"
import g102 from "../images/Group 102.png"
import g101 from "../images/Group 101.png"
import g105 from "../images/Group 105.png"
import g107 from "../images/ak5.png"
import g106 from "../images/Group 106.png"
import ViewMore from '../components/ViewMore'
import RepeatedDiv from '../components/RepeatedDiv'


const Details = () => {
    return (
        <div className='font-poppins'>


            <div className=' flex gap-8 items-center pl-24  '>
                <div><Image src={g84} alt="" /></div>
                <div><Image src={g85} alt="" /></div>
                <div><Image src={g86} alt="" /></div>

            </div>

            <div className=' flex justify-evenly mt-8 sm:flex-wrap lg:flex-row'>

                <div className=' '>
                    <Image src={g102} alt="" />
                </div>

                <div className=' '>
                    <Image src={g101} alt="" />
                </div>

            </div><br /><br /><br /><hr />

            <div className=' '>
                <div className='flex justify-center items-center pt-16 md:pt-24 lg:pt-16 xl:pt-40'>
                    <Image src={g105} alt="" />
                </div>
                <br /><br />

                <div className='  text-[#9F9F9F] sm:pl-8 md:pl-24 lg:pl-24 xl:pl-120'>

                    <p className=' text-sm md:text-base lg:text-lg xl:text-xl'>
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />
                        sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <br />
                    <br />
                    <p className='text-sm md:text-base lg:text-lg xl:text-xl'>
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
                        speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />
                        and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />
                        to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>

                </div>
                <br/>

                <div className=' flex justify-evenly sm:flex-wrap lg:flex-row '>
                    <div>
                        <Image className=' ' src={g107} alt="" />
                    </div>
                    <div>
                        <Image className='' src={g106} alt="" />
                    </div>

                </div>

            </div>
            <br />
            <hr />
             <br/>
            <div className='  '>
                <div >
                    <h1 className='font-medium text-4xl flex justify-center '>Related Products</h1>
                </div>


                <RepeatedDiv />



                <ViewMore />


            </div><br />















































        </div>
    )
}

export default Details
