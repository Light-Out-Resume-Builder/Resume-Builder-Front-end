import React from 'react'
import { CgTemplate } from "react-icons/cg";
import { GrFormUpload } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume1 from "../../assets/images/Frame 12 (1).png"
import { BiCloudUpload } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const createresume = () => {
  return (
    <div className='bg-[#BFDBFE]'>
      <div className='bg-[#1E40AF] text-white flex py-5 pr-96 pl-32 gap-16'>
        <p>My Dashboard</p>
        <p className='underline'>Resume</p>
        <p>Cover Letters</p>
      </div>

      <div className='flex pl-20 py-5 justify-between pr-20'>
        <button className='border-2 border-[#1E40AF] flex items-center justify-center text-[#1E40AF] text-sm pr-7 pl-2 py-1 rounded'><CgTemplate />Templates</button>
        <button className='flex items-center justify-center bg-[#1E40AF] text-white text-sm pr-6 pl-2 py-1 rounded'><GrFormUpload />Upload existing resume</button>
        <button className='flex items-center justify-center bg-[#1E40AF] text-white text-sm pr-3 pl-2 py-1 rounded'><MdOutlineRemoveRedEye />Preview</button>
        <button className='flex items-center justify-center bg-[#1E40AF] text-white text-sm pr-6 pl-2 py-1 rounded'><MdOutlineFileDownload />Download</button>
      </div>

      <div className='flex'>
        <div className='bg-[#BFDBFE] w-[600px]'>
          <div className='bg-white'>
            <h4 className='flex items-center font-semibold gap-2'>Contact info <FaEdit className='text-[#3734A9]'/></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-8'/>

            <form action="" className=''>
              <label htmlFor="" className='block'>First Name</label>
              <input type="text" placeholder=''/>

              <label htmlFor="" className='block'>Last Name</label>
              <input type="text" />

              <label htmlFor="">Job Title</label>
              <input type="text" />

              <label htmlFor="">Address</label>
              <input type="text" />

              <label htmlFor="">Phone Number</label>
              <input type="text" />

              <label htmlFor="">Email</label>
              <input type="text" />
            </form>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div>
          <div className='bg-white'><img src={Resume1} alt="" /></div>
          <div className='flex items-center text-sm font-semibold gap-36'>
            <div className='flex  items-center'><BiCloudUpload />Saved</div>
            <div className='flex  items-center'>Page :<IoIosArrowRoundBack className='text-gray-400 font-semibold' />1/3  <IoIosArrowRoundForward /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default createresume
