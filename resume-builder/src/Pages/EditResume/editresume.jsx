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
import { IoIosCheckmark } from "react-icons/io";


const editresume = () => {
  return (
    <div className='bg-[#BFDBFE]'>
      <div className='bg-[#1E40AF] text-white flex py-5 pr-96 pl-32 gap-16'>
        <p>My Dashboard</p>
        <p className='underline'>Resume</p>
        <p>Cover Letters</p>
      </div>

      <div className='flex justify-between py-5 pr-28 pl-16'>
        <button className='text-[#1E40AF] border-solid border-2 border-[#1E40AF] px-4 py-0 rounded-lg flex items-center gap-2'><LiaTimesSolid /> Close</button>
        <button className='flex bg-[#1E40AF] text-white items-center gap-2 p-2 rounded-lg'><MdOutlineFileDownload /> Download</button>
      </div>

      <div className='flex gap-20'>
        <div className='bg-[#0E223C] text-white w-[600px] ml-16 '>
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
              <BiFontColor className='absolute left-1' />
              <input type="text" className='bg-transparent border border-white pl-5 py-2 rounded-sm' placeholder='Hindi'/>
              <FaCaretDown className='absolute left-44' />
            </div>
        </div>

        <hr className='my-4 w-full border-t border-gray-300 mt-32' />

        <div>
          <div><h2 className='text-center text-3xl'>Choose Template</h2></div>

          <div className='grid grid-cols-2 gap-8 p-8 '>
            <div className='w-70 h-80 relative group'><img src={Edit1} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 bg-white relative group'><img src={Edit2} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit3} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit4} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit5} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit6} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit7} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit8} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit9} alt="" className='w-full h-full object-coverborder-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

            <div className='w-70 h-80 relative group'><img src={Edit10} alt="" className='w-full h-full object-cover border-4 border-transparent group-hover:border-[#47C8B1] transition-all duration-300'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'><IoIosCheckmark className='bg-[#47C8B1] rounded-full w-7 h-7' /></div>
            </div>

          </div>
        </div>

        </div>

        <div className='flex flex-col'>
          <div className='bg-white rounded-lg w-11/12'><img className='w-full' src={Edit2} alt="" /></div>
          <div className='w-11/12 mt-20'><img className='' src={Edit11} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default editresume
