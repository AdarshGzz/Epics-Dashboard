import React from 'react'
import chartIcon from '@/public/charicon.png'
import Image from 'next/image'


export const Issuecard = ({title,image,number,onClick}) => {
  return (
    <div onClick={onClick} className=' h-[7rem] bg-white w-[20rem] rounded-lg border flex flex-row items-center gap-3 p-6 justify-between '>
        <div className='flex items-center flex-col'>
            <h1 className=' text-lg p-3'>
            {title}
            </h1>

            <div className='px-4 py-2 h-max w-max text-sm bg-[#E7F5E8] flex items-center justify-center rounded-full'>
                {number}
            </div>
        </div>
        
        <Image src={image} height={50} width={50}/>
    </div>
  )
}
