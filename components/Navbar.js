import Image from 'next/image'
import React from 'react'
import UserImg from '@/public/user.jpg'

export const Navbar = () => {
  return (
    <div className='h-[3rem] w-fullshadow-sm bg-white/70 border-b shadow-black flex justify-end items-center p-2 gap-2'>
          <Image src={UserImg} height={40} width={40} className=' rounded-full border border-black'/>
          <h1 className=' text-md text-black text-sm'>Jalboard officer</h1>
          
    </div>
  )
  }