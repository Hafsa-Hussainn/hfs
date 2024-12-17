import React from 'react'
import Image from 'next/image'
import Blog from "../images/Blog .png"
export default function page() {
  return (
    <div>
       <div><Image src={Blog} alt='' /></div>
    </div>
  )
}
