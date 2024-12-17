import Link from "next/link";
import a from "./images/mychair.png";
import b from "./images/xyz.png"
import mmm from "./images/mmm.png"
import bbb from "./images/bbb.png"

import b13 from "./images/Rectangle 13.png"
import b14 from "./images/Rectangle 14.png"
import b15 from "./images/Rectangle 15.png"
import g37 from "./images/Group 37.png"

import rocketseater from "./images/Rocket single seater 1.png"
import Image from "next/image";
import RepeatedDiv from "./components/RepeatedDiv";
import ViewMore from "./components/ViewMore";


export default function Home() {
  return (
    <div className="font-poppins " >

      <div className=" font-poppins w-auto bg-[#FBEBB5] relative ">

        <div >
          <div className=" grid grid-cols-2 gap-4 p-4 pt-40 lg:pt-10 ">
            <div className=" text-black  md:pt-40 md:pl-36 lg:pt-72 lg:pl-44 sm:pt-40 sm:pl-24 leading-loose  p-4">
              <p className="lg:font-medium md:font-normal md:text-5xl lg:text-[64px] sm:font-normal sm:text-4xl"  >
                Rocket single seater
              </p><br />
              <a href="#" className=" leading-loose h-[36px] mt-[655px] md:font-normal  lg:font-medium md:text-2xl lg:text-3xl underline underline-offset-[18px] underline-black">Shop Now</a>

            </div>
            <div className="md:pt-20 sm:pt-28 lg:pt-32 p-4">
              <Image src={rocketseater} alt="single seater" />
            </div>
          </div>

        </div>
      </div>


      <div className="  flex justify-evenly items-center  sm:flex-wrap lg:flex-row bg-[#FAF4F4]" >

        <div className="sm:mb-16 lg:mb-0">
          <Image src={a} alt="" className="  " />
          <p className="font-medium text-4xl ml-1 ">Side Table</p><br />
          <a href="" className="font-medium text-2xl underline underline-offset-[18px]  " >View More</a>
        </div>

        <div className="sm:mb-16 lg:mb-16">
          <Image src={b} alt="" className=" lg:pt-12  lg:pb-12" /><br /><br />
          <p className="font-medium text-4xl  ">Side Table</p><br />
          <a href="" className="font-medium text-2xl underline underline-offset-[18px]" >View More</a>
        </div>

      </div>


      <div className=" pt-12">
        <div className="grid justify-center items-center">
          <h1 className="font-medium text-4xl "> Top Picks For You</h1>
        </div><br />
        <div className="grid justify-center items-center">
          <p className="text-base font-medium text-center text-[#9F9F9F]  ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>

        </div>
        <RepeatedDiv />

        <ViewMore />
        

      </div>
       <br/>
       <br/>

      <div className=" bg-[#FFF9E5] flex justify-between pt-4 ">
        {/* <div>
          <Image src={sofa1} alt="" />
        </div>
        <div className="pt-40 ">
          <p className="font-medium text-2xl grid justify-center items-center ">New Arrivals</p>
          <p className=" font-bold text-5xl grid justify-center items-center">Asgaard sofa</p><br />
          <div className="grid justify-center items-center">
            <button className="h-[64px] w-[255px]  font-normal text-xl border border-black  py-2 px-4 hover:bg-gray-200">
              Order Now
            </button>

          </div>
        </div> */}
        <div>
          <Link href="/Details"> <Image src={bbb} alt="" /></Link> 
        </div>

      </div>


      <div className="h-[944px]  ">
        <div className="h-[91px] pt-12 ">
          <h1 className="grid justify-center items-center font-medium text-4xl">Our Blogs</h1><br />
          <p className="grid justify-center  items-center font-medium text-base text-[#9F9F9F] ">Find a bright ideal to suit your taste with our great selection</p>
        </div>

        <div className="h-[679px] pt-20 ">
          <div className="h-[555px] flex justify-evenly items-center ">

            <div>  <Image src={b13} alt="" className="" />
              <div className="h-[129px] pt-8   ">
                <p className="font-normal lg:text-xl sm:text-[16px] grid justify-center items-center">Going all-in with millennial design</p>
                <a href="" className="font-medium lg:text-2xl sm:text-[14px] underline underline-offset-[18px] grid justify-center items-center " >Read More</a>
                <br />
                <div className=" grid justify-center items-center">
                  <Image src={g37} alt="" />
                </div>
              </div>

            </div>

            <div>  <Image src={b14} alt="" />
              <div className="h-[129px] pt-8  ">
                <p className="font-normal lg:text-xl sm:text-[16px] grid justify-center items-center">Going all-in with millennial design</p>
                <a href="" className="font-medium lg:text-2xl sm:text-[14px] underline underline-offset-[18px] grid justify-center items-center" >Read More</a>
                <br />
                <div className=" grid justify-center items-center">
                  <Image src={g37} alt="" />
                </div>
              </div>

            </div>

            <div>  <Image src={b15} alt="" />
              <div className="h-[129px] pt-8 ">
                <p className="font-normal lg:text-xl sm:text-[16px] grid justify-center items-center">Going all-in with millennial design</p>
                <a href="" className="font-medium lg:text-2xl sm:text-[14px] underline underline-offset-[18px] grid justify-center items-center " >Read More</a>
                <br />
                <div className=" grid justify-center items-center">
                  <Image src={g37} alt="" />
                </div>

              </div>

            </div>

          </div>
          <a href="" className="font-medium lg:mt-16 text-2xl underline underline-offset-[18px] grid justify-center items-center " >View All Post</a>


        </div>

      </div>
      <div>
{/* 
        <div className="h-[450px]  relative ">
          <Image src={R17} alt="" className="relative  " />
          <Image src={G41} alt="" className="absolute top-24 left-[24rem] " />
          <Image src={G22} alt="" className="absolute top-60 left-[29rem]" />
        </div> */}

        <div><Image src={mmm} alt="" /></div>


      </div>















    </div>

  );
}
