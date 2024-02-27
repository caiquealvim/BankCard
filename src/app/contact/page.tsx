import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
import { ArrowDownRightIcon } from '@heroicons/react/20/solid'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'


const Contacts = () => {
  return (
    <div className='bg-white'>
    <div className='grid grid-cols-1 lg:grid-cols-2 w-[100%] items-center justify-center pb-9'>

    <main>
        <div className='flex flex-col gap-6 mt-[2rem] lg:ml-[15rem]  w-[50%]'>
        <button className='border w-[5rem] bg-slate-800 rounded-full p-4 text-white font-semibold 
        hover:p-5 transition-all duration-150 '><a href="/"><ArrowLeftIcon/></a></button>
         <div className='flex'>
         <p className='pr-2  mb-[1.3rem]'>About Us</p>
         <div className='bg-yellow-200 rounded-full w-5 h-5'></div>
        <div className='bg-indigo-300 rounded-full w-5 h-5 '></div>
        </div>
         <div>
        <h1 className='text-6xl lg:text-7xl md:text-5xl'>Empowring Lives,Building Futures</h1>
        <p className='text-zinc-400 mt-5'>
        if you have a dream you can be part of our team
        and what you need we will provide for you as soon as possible.
       </p>
       <div className='mt-[3rem]'>
       <Image src="/images/Card5.png" width={200} height={200} alt='logo2' className='object-cover '/>
       </div>
       </div>
        </div>
      </main>

      <div className='mt-[10rem] w-[50%] flex flex-col gap-[3rem] lg:ml-[7rem] md:mx-auto'>
        <button className='border bg-slate-800 rounded-full p-4 text-white font-semibold 
        hover:p-5 transition-all duration-150 '>GET YOUR CARD</button>
        <div className='flex flex-col gap-5'>
        <div className='flex flex-row border-purple-200 border
         bg-purple-100 items-center justify-between pl-6 hover:bg-slate-600 cursor-pointer'>
            <span className='text-pink-400'>01</span>
            <p>Diverse Loan Options</p>
            <ArrowUpRightIcon className='w-[2rem] '/>
        </div>
        <div className='flex flex-row border-purple-200 border
         bg-purple-100 items-center justify-between pl-6 hover:bg-slate-600 cursor-pointer'>
            <span className='text-pink-400'>02</span>
            <p>Diverse Loan Options</p>
            <ArrowUpRightIcon className='w-[2rem] '/>
        </div>
        <div className='flex flex-row border-purple-200 border
         bg-purple-100 items-center justify-between pl-6 hover:bg-slate-600 cursor-pointer'>
            <span className='text-pink-400'>03</span>
            <p>Diverse Loan Options</p>
            <ArrowUpRightIcon className='w-[2rem] '/>
        </div>
        <div className='flex flex-row border-purple-200 border
         bg-purple-100 items-center justify-between pl-6 hover:bg-slate-600 cursor-pointer'>
            <span className='text-pink-400'>04</span>
            <p>Diverse Loan Options</p>
            <ArrowUpRightIcon className='w-[2rem] '/>
        </div>
        <div className='flex flex-row border-purple-200 border
         bg-purple-100 items-center justify-between pl-6 hover:bg-slate-600 cursor-pointer'>
            <span className='text-pink-400'>05</span>
            <p>Diverse Loan Options</p>
            <ArrowUpRightIcon className='w-[2rem] '/>
        </div>
        
        
        
        
        </div>
        
      </div>

    </div>
    

</div>
        
  )
}

export default Contacts