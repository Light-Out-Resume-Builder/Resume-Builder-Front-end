import React from 'react'
import { IoIosCheckmark } from "react-icons/io";

const resumegrid = ({ src, alt,}) => {
  return (
    <div className={'relative group w-70 h-80 bg-white'}>
      <img src={src} alt={alt} className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300' />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'>
        <IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' />
      </div>
    </div>
  )
}

export default resumegrid
