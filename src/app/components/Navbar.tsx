import Link from "next/link";
import React from "react";
import Image from "next/image";
import a from "../Images/ak3.png";
import a1 from "../Images/ak1.png";
import a2 from "../images/ak2.png"
import a3 from "../Images/ak4.png";
export default function Navbar() {
  return (
    <div className="font-poppins bg-transparent font-medium text-[16px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Shop">Shop</Link>
              </li>
              <li>
                <Link href="/Blog">About</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center lg:block sm:hidden">
          <ul className="flex items-center gap-[3rem]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Shop">Shop</Link>
            </li>
            <li>
              <Link href="/Cart">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end   mr-12 lg:block sm:hidden">
          <div className="flex float-right gap-10 items-center">
        
            <div>
              <Link href="/Account"><Image src={a} className="w-[23px] h-[23px]" alt="jshdj" /></Link>
            </div>
            <div>
            <Link href="/Checkout"><Image src={a1} className="w-[20px] h-[20px]" alt="jshdj" /></Link>
            </div>
            <div>
            <Link href="/Contact"><Image src={a2} className="w-[20px] h-[20px]" alt="jshdj" /></Link>
            </div>
            <div>
            <Link href="/Cart"><Image src={a3} className="w-[20px] h-[20px]" alt="jshdj" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}