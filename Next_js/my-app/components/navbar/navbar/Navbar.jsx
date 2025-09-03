import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='bg-red-500 h-10 text-white px-6 flex items-center justify-between w-full' >
         <h1>NEXT JS</h1>
               <Link href={'/'} >Home</Link>
                <Link href={'/about'} >About</Link>
                <Link href={'/contact'} >Contact</Link>
                <Link href={'/product'} >Product</Link>
                <Link href={'/courses'} >Courses</Link>
                <Link href={'/service'} >Service</Link>
    </div>
  )
}

export default navbar