import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import Edit1 from '../../assets/images/edit1.png'
import Edit2 from '../../assets/images/Frame 12.png'
import Edit3 from '../../assets/images/edit3.png'
import Edit4 from '../../assets/images/edit4.png'
import Edit5 from '../../assets/images/edit5.png'
import Edit6 from '../../assets/images/edit6.png'
import Edit7 from '../../assets/images/edit7.png'
import Edit8 from '../../assets/images/edit8.png'
import Edit9 from '../../assets/images/edit9.png'
import Edit10 from '../../assets/images/edit10.png'
import Edit11 from '../../assets/images/Group 1000002462 (2).png'
import { RxLineHeight } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { BiFontColor } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import ResumeGrid from "../../Pages/EditResume/resumegrid.jsx"


const editresume = () => {
  const images = [
    {src: Edit1, alt: ''},
    {src: Edit2, alt: ''},
    {src: Edit3, alt: ''},
    {src: Edit4, alt: ''},
    {src: Edit5, alt: ''},
    {src: Edit6, alt: ''},
    {src: Edit7, alt: ''},
    {src: Edit8, alt: ''},
    {src: Edit9, alt: ''},
    {src: Edit10, alt: ''},
  ]

  return (
    <div className='bg-[#BFDBFE]'>
      <div className='bg-[#1E40AF] text-white flex pl-20 py-5 md:pr-96 md:pl-32 gap-8 md:gap-16'>
        <p>My Dashboard</p>
        <p className='border-b-2'>Resume</p>
        <p>Cover Letters</p>
      </div>

      <div className='flex justify-between py-5 pr-28 pl-16 '>
        <button className='text-[#1E40AF] border-solid border-2 border-[#1E40AF] px-4 py-0 rounded-lg flex items-center gap-2'><LiaTimesSolid /> Close</button>
        <button className='flex bg-[#1E40AF] text-white items-center gap-2 p-2 rounded-lg'><MdOutlineFileDownload /> Download</button>
      </div>

      <div className='flex gap-20'>
        <div className='bg-[#0E223C] text-white w-[600px] md:ml-16 '>
          <div className='w-full px-10 pt-20'>
            <div className='flex items-center gap-10 text-xl'>
                <div><p>Line Spacing (100%)</p></div>
                <div className='flex items-center gap-3'>
                  <FiMinus />
                  <RxLineHeight />
                  <GoPlus />
                </div>
            </div>

            <div className='flex gap-12 mt-16'>
              <div className='bg-[#2F80ED] rounded-full w-6 h-6'></div>
              <div className='bg-[#C3AB56] rounded-full w-6 h-6 text-white flex items-center justify-center'><FaCheck /></div>
              <div className='bg-[#90D97D] rounded-full w-6 h-6'></div>
              <div className='bg-[#BD7AC8] rounded-full w-6 h-6'></div>
              <div className='bg-[#0E0C0C] rounded-full w-6 h-6 text-white flex items-center justify-center'><GoPlus /></div>
            </div>

            <div className='relative flex items-center mt-16'>
              <BiFontColor className='absolute left-3' />
              <input type="text" className='bg-transparent border border-white pl-10 py-2 rounded-sm w-80 text-lg' placeholder='Hindi'/>
              <FaCaretDown className='absolute left-72' />
            </div>
        </div>

        <hr className='my-4 w-full border-t border-gray-300 mt-28' />

        <div>
          <div><h2 className='text-center text-3xl'>Choose Template</h2></div>

          <div className='grid md:grid-cols-2 grid-cols-2 gap-4 md:gap-8 p-8'>
            {images.map((image, index) => (
              <ResumeGrid key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>

        </div>

        <div className='flex flex-col hidden md:block'>
          <div className='bg-white rounded-lg w-11/12'><img className='w-full' src={Edit2} alt="" /></div>
          <div className='w-11/12 mt-20'><img className='' src={Edit11} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default editresume
