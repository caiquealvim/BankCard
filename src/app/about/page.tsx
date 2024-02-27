import React from 'react'
import Image from 'next/image'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/16/solid'

const About = () => {
  return (
    <div className='bg-white w-[100%] h-screen flex flex-row'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <main>
      <div className='flex flex-col gap-6 mt-[2rem] mx-auto  w-[60%]'>
        <button className='border w-[5rem] bg-slate-800 rounded-full p-4 text-white font-semibold 
        hover:p-5 transition-all duration-150 '><a href="/"><ArrowLeftIcon/></a></button>
      <div className='flex'>
       <p className='pr-2  mb-[1.3rem]'>WHY US</p>
       <div className='bg-yellow-200 rounded-full w-5 h-5'></div>
      <div className='bg-indigo-300 rounded-full w-5 h-5 '></div>
       </div>
       <div className=''>
       <h1 className='text-6xl'>The loantema Difference</h1>
       <p className='text-zinc-400 mt-5'>
        if you need contact us only call to our support Team
        and what you need we will provide for you as soon as possible.
       </p>
       </div>
       <div>
        <Image src="/images/logo2.png" width={400} height={400} alt='logo2' className='object-cover lg:mx-auto md:ml-[7rem] '/>
       </div>
       <div className='mt-[5rem]'>
        <Image src="/images/Card3.png" width={600} height={600} alt='logo2' className='object-cover lg:mx-auto md:ml-[7rem]'/>
       </div>
        </div>
      </main>

      <div className='mt-[5rem]'>
        <Image src="/images/cardblack.jpg" width={600} height={600} alt='logo2'
         className='object-cover mx-auto'/>
          <div className='col-span-2 '>
          <div className='w-[60%] flex flex-col gap-5 ml-[7rem]'>
          <h1 className='font-bold'>Online Employers to make your Black Card</h1>
          <div className='flex gap-2'>
          <p>Accessibility</p>
          <CheckCircleIcon className='w-6'/>
          <p>Team Time</p>
          <CheckCircleIcon className='w-6'/>
          </div>
          <p className='text-zinc-500'>
            With you will beggin your Black Card with your team members and members
            of your team. You will be able to be sure.
          </p>
          <button className='border bg-slate-800 rounded-full p-4 text-white font-semibold 
           hover:p-5 transition-all duration-150 '>GET YOUR CARD</button>
         </div>
         </div>
         </div>

      </div>

   


    </div>
  )
}

export default About