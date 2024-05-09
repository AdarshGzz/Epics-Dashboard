import React from 'react'

export const Sidecard = ({heading,subheading,onClick}) => {
  // console.log(item);
  return (
    <div onClick={onClick} className="h-20 w-[25rem] border rounded-lg p-3">
          <h1 className='font-bold'>{heading}</h1>
          <h2>{subheading}</h2>
          {/* <p>{item}</p> */}
      </div>
  )
}
