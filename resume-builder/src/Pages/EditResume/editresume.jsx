import React, { useState } from 'react'
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
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import ResumeGrid from "../../Pages/EditResume/resumegrid.jsx"
import DashboardNav from "../../components/Dashboard/DashboardNav.jsx"


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

  {/* Color Palette Section */}
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  /* Language Dropdown Component Section */
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (language) => {
    console.log(`Selected language: ${language}`);
    setIsOpen(false);
  }


  return (
    <div className='bg-[#BFDBFE]'>
      <div>
        <DashboardNav />
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
              <div onClick={() => handleColorClick('#2F80ED')} className={`flex items-center justify-center rounded-full w-6 h-6 cursor-pointer border ${selectedColor === '#2F80ED' ? 'border-black' : 'border-gray-200'}`} style={{ backgroundColor: '#2F80ED' }}> {selectedColor === '#2F80ED' && (<FaCheck className='text-white text-base absolute' />)}</div>
              <div onClick={() => handleColorClick('#C3AB56')} className={`flex items-center justify-center rounded-full w-6 h-6 cursor-pointer border ${selectedColor === '#C3AB56' ? 'border-black' : 'border-gray-200'}`} style={{ backgroundColor: '#C3AB56' }}> {selectedColor === '#C3AB56' && (<FaCheck className='text-white text-base absolute' />)}</div>
              <div onClick={() => handleColorClick('#90D97D')} className={`flex items-center justify-center rounded-full w-6 h-6 cursor-pointer border ${selectedColor === '#90D97D' ? 'border-black' : 'border-gray-200'}`} style={{ backgroundColor: '#90D97D' }}> {selectedColor === '#90D97D' && (<FaCheck className='text-white text-base absolute' />)}</div>
              <div onClick={() => handleColorClick('#BD7AC8')} className={`flex items-center justify-center rounded-full w-6 h-6 cursor-pointer border ${selectedColor === '#BD7AC8' ? 'border-black' : 'border-gray-200'}`} style={{ backgroundColor: '#BD7AC8' }}> {selectedColor === '#BD7AC8' && (<FaCheck className='text-white text-base absolute' />)}</div>
              <div className='bg-[#0E0C0C] rounded-full w-6 h-6 text-white flex items-center justify-center'><GoPlus /></div>
            </div>

            <div className='relative flex items-center mt-16'>
              <BiFontColor className='absolute left-3' />
              <input type="text" readOnly className='bg-transparent border border-white pl-10 py-2 rounded-sm w-80 text-lg' placeholder='Hindi'/>
              <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>{isOpen ? <FaCaretUp className='absolute left-72' /> : <FaCaretDown className='absolute left-72' />}</div>
            </div>

            {/* Language Dropdown Options */}
            {isOpen && (
              <div className='absolute left-36 w-[280px] border border-gray-300 bg-white rounded shadow-lg z-10 text-black'>
                <div onClick={() => handleSelect('English')} className='p-2 cursor-pointer hover:bg-gray-200'>English</div>
                <div onClick={() => handleSelect('Spanish')} className='p-2 cursor-pointer hover:bg-gray-200'>Spanish</div>
                <div onClick={() => handleSelect('French')} className='p-2 cursor-pointer hover:bg-gray-200'>French</div>
                <div onClick={() => handleSelect('Igbo')} className='p-2 cursor-pointer hover:bg-gray-200'>Igbo</div>
                <div onClick={() => handleSelect('Hausa')} className='p-2 cursor-pointer hover:bg-gray-200'>Hausa</div>
                <div onClick={() => handleSelect('Yoruba')} className='p-2 cursor-pointer hover:bg-gray-200'>Yoruba</div>
              </div>
            )}

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
