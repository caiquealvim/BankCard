import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='w-[100%] z-[100] bg-white p-[2rem]'>
        <div className='flex flex-row items-center justify-around text-zinc-400 mx-auto'>
        <Image width={200} height={200} className='rounded-full' src="/images/Logo.png" alt='foto do perfil-caique'/>
        <div className='flex items-center gap-4 '>
            <ul className='md:flex hidden items-center space-x-10'>
                <li><a href="#" className=' hover:text-black'>Home</a></li>
                <Link href='/about'><li className=' hover:text-black'>About Us</li></Link>
                <li> <a href="/services"  className=' hover:text-black'>Services</a></li>
                <li><a href="/contact"  className=' hover:text-black'>Contact Us </a></li>
                <li><a href="/blog"  className=' hover:text-black'>Blog</a></li>
            </ul>   
        </div>
        <div>
        <button className='border bg-black rounded-full p-4 text-white font-semibold hover:p-5 transition-all duration-150'>GET STARTED</button>
        </div>
     
        </div>

    </div>
  )
}

export default NavBar