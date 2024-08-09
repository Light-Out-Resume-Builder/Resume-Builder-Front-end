import ToggleButton from "../../Pages/CreateResume/togglebutton.jsx"
import { CgTemplate } from "react-icons/cg";
import { GrFormUpload } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume1 from "../../assets/images/Frame 12 (1).png"
import { BiCloudUpload } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { TbUnderline } from "react-icons/tb";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { FaMagic } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import Language from "../../assets/images/speech_icon.png"
import Certificate from"../../assets/images/certificate.png"
import Handshake from "../../assets/images/handshake.png"
import Link from "../../assets/images/link-alt.png"
import Award from "../../assets/images/award.png"
import Reference from "../../assets/images/megaphone.png"
import { HiMiniCalendarDays } from "react-icons/hi2";

const createresume = () => {
  return (
    <div className='bg-[#BFDBFE]'>
      <div className='bg-[#1E40AF] text-white flex py-5 pr-20 pl-20 pr-96 pl-32 gap-16 text-lg'>
        <p>My Dashboard</p>
        <p className='border-b-2'>Resume</p>
        <p>Cover Letters</p>
      </div>

      <div className='flex pl-20 py-5 justify-between pr-20'>
        <button className='border-2 border-[#1E40AF] flex items-center justify-center text-[#1E40AF] text-base pr-8 pl-4 py-1 rounded'><CgTemplate />Templates</button>
        <button className='flex items-center justify-center bg-[#1E40AF] text-white text-base pr-7 pl-4 py-1 rounded ml-12'><GrFormUpload />Upload existing resume</button>
        <button className='flex items-center justify-center bg-[#1E40AF] text-white text-base pr-3 pl-3 py-2 rounded '><MdOutlineRemoveRedEye />Preview</button>
        <button className='flex items-center justify-center bg-[#1E40AF] text-white text-base pr-6 pl-4 py-1 rounded'><MdOutlineFileDownload />Download</button>
      </div>

      <div className='flex gap-20 px-8 '>
        <div className='bg-[#BFDBFE] w-[600px] ml-8'>

          {/* Contact Info Section */}
          <div className='bg-white rounded-xl'>
            <h4 className='flex items-center font-semibold gap-2 pl-4 pt-4'>Contact info <FaEdit className='text-[#3734A9]'/></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>

            <form action="" className='grid grid-cols-2 gap-4 px-4'>
              <label htmlFor="" className=''>First Name</label>
              <label htmlFor="" className=''>Last Name</label>
              <input type="text" placeholder='' className='border border-[#B1AEAE] rounded'/>
              <input type="text" className='border border-[#B1AEAE] rounded' /> 

              <label htmlFor="">Job Title</label>
              <label htmlFor="">Address</label>
              <input type="text" className='border border-[#B1AEAE] rounded' />
              <input type="text" className='border border-[#B1AEAE] rounded' /> 

              <label htmlFor="">Phone Number</label>
              <label htmlFor="">Email</label>
              <input type="text" className='border border-[#B1AEAE] rounded mb-16' />
              <input type="text" className='border border-[#B1AEAE] rounded mb-16' />
            </form>
          </div>
            
          {/* Summary Section */}  
          <div className='bg-white rounded-xl mt-20 pb-16'>
            <h4 className='flex items-center font-semibold gap-2 pl-4 pt-4'>Summary</h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>
            <p className='text-gray-400 text-sm pl-4'>Include a short summary about your professional experience</p>
            <div className='border border-[#B1AEAE] mx-4 mt-6 rounded-xl'>
              <div className='flex justify-between border-b border-gray-400'>
                <div className='flex pl-2 text-2xl gap-2'>
                  <BsTypeBold />
                  <BiItalic className='text-gray-400' />
                  <TbUnderline className='border-r border-gray-400' />
                  <MdFormatListBulleted />
                  <MdFormatListNumbered className='border-r border-gray-400' />
                  <AiOutlineLink />
                </div>

                <div className='text-[#1E40AF] flex items-center pr-2 gap-2'>
                  <FaMagic />
                  <p>Pre-Written Examples</p>
                </div> 
              </div>
              <textarea name="" id="" rows={7} className='w-full'></textarea>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className='bg-white rounded-xl mt-20 pb-8'>
            <h4 className='flex items-center font-semibold gap-2 pl-4 pt-4'>Work Experience <FaEdit className='text-[#3734A9]'/></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>
            <p className='text-gray-400 text-sm pl-4'>Include a short summary about your professional experience</p>
            <div className='border border-black mx-4 mt-4 rounded-xl'>
              <div className='flex justify-end mr-14 mt-4 text-xl gap-6'>
                <IoIosArrowUp />
                <GoTrash />
              </div>

              <form action="" className='grid grid-cols-2 gap-4 px-4 mt-2'>
              <label htmlFor="" className=''>Position Title</label>
              <label htmlFor="" className=''>Company Name</label>
              <input type="text" placeholder='' className='border border-[#B1AEAE] rounded'/>
              <input type="text" className='border border-[#B1AEAE] rounded' /> 

              <label htmlFor="">Employment Type</label>
              <label htmlFor="">Location</label>
              <input type="text" className='border border-[#B1AEAE] rounded' />
              <input type="text" className='border border-[#B1AEAE] rounded' /> 

              <label htmlFor="">Start Date</label>
              <label htmlFor="">End Date</label>
              <div className='relative inline-block'><input type="text" className='border border-[#B1AEAE] rounded mb-4 w-64' /><HiMiniCalendarDays className='absolute inset-y-0 mt-1 ml-56 pointer-events-none' /></div>
              <div className='relative inline-block'><input type="text" className='border border-[#B1AEAE] rounded mb-4 w-64' /><HiMiniCalendarDays className='absolute inset-y-0 mt-1 ml-56 pointer-events-none' /></div>
            </form>
            
            <div className='flex gap-2 items-center justify-end pr-20'>
              <ToggleButton />
              <p>Currently Employed</p>
            </div>

            <p className='ml-3 mt-8'>Work Summary</p>
            <div className='border border-[#B1AEAE] mx-4 mt-2 mb-8 rounded-xl'>
              <div className='flex justify-between border-b border-gray-400'>
                <div className='flex pl-2 text-2xl gap-2'>
                  <BsTypeBold />
                  <BiItalic className='text-gray-400' />
                  <TbUnderline className='border-r border-gray-400' />
                  <MdFormatListBulleted />
                  <MdFormatListNumbered className='border-r border-gray-400' />
                  <AiOutlineLink />
                </div>

                <div className='text-[#1E40AF] flex items-center pr-2 gap-2'>
                  <FaMagic />
                  <p>Pre-Written Examples</p>
                </div> 
              </div>
              <textarea name="" id="" rows={7} className='w-full'></textarea>
            </div>
            </div>

            <p className='flex items-center text-[#1E40AF] ml-4 gap-2 mt-4'><MdAdd /> Add more experience</p>
          </div>

          {/* Education Section */}
          <div className='bg-white rounded-xl mt-20 pb-8'>
          <h4 className='flex items-center font-semibold gap-2 pl-4 pt-4'>Education <FaEdit className='text-[#3734A9]'/></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>
            <p className='text-gray-400 text-sm pl-4'>Add your education history, including program’s you’re currently enrolled in.</p>
            <div className='border border-black mx-4 mt-4 rounded-xl'>
              <div className='flex justify-end mr-14 mt-4 text-xl gap-6'>
                <IoIosArrowUp />
                <GoTrash />
              </div>

              <form action="" className='grid grid-cols-2 gap-4 px-4 mt-2'>
              <label htmlFor="" className=''>School Name</label>
              <label htmlFor="" className=''>School Location</label>
              <input type="text" placeholder='' className='border border-[#B1AEAE] rounded'/>
              <input type="text" className='border border-[#B1AEAE] rounded' /> 

              <label htmlFor="">Degree</label>
              <label htmlFor="">Field of Study</label>
              <input type="text" className='border border-[#B1AEAE] rounded' />
              <input type="text" className='border border-[#B1AEAE] rounded' /> 

              <label htmlFor="">Start Date</label>
              <label htmlFor="">End Date</label>
              <div className='relative inline-block'><input type="text" className='border border-[#B1AEAE] rounded mb-4 w-64' /><HiMiniCalendarDays className='absolute inset-y-0 mt-1 ml-56 pointer-events-none' /></div>
              <div className='relative inline-block'><input type="text" className='border border-[#B1AEAE] rounded mb-4 w-64' /><HiMiniCalendarDays className='absolute inset-y-0 mt-1 ml-56 pointer-events-none' /></div>
            </form>

            <div className='flex gap-2 items-center justify-end pr-20'>
              <ToggleButton />
              <p>I currently study here</p>
            </div>

            <p className='ml-3 mt-8'>Description</p>
            <div className='border border-[#B1AEAE] mx-4 mt-2 mb-8 rounded-xl'>
              <div className='flex justify-between border-b border-gray-400'>
                <div className='flex pl-2 text-2xl gap-2'>
                  <BsTypeBold />
                  <BiItalic className='text-gray-400' />
                  <TbUnderline className='border-r border-gray-400' />
                  <MdFormatListBulleted />
                  <MdFormatListNumbered className='border-r border-gray-400' />
                  <AiOutlineLink />
                </div>

                <div className='text-[#1E40AF] flex items-center pr-2 gap-2'>
                  <FaMagic />
                  <p>Pre-Written Examples</p>
                </div> 
              </div>
              <textarea name="" id="" rows={7} className='w-full'></textarea>
            </div>
            </div>

            <p className='flex items-center text-[#1E40AF] ml-4 gap-2 mt-4'><MdAdd /> Add more education</p>
          </div>

          {/* Skills Section */}
          <div className='bg-white rounded-xl mt-20 pb-8'>
            <h4 className='flex items-center font-semibold gap-2 pl-6 pt-4'>Skills <FaEdit className='text-[#3734A9]'/></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>
            <p className='text-gray-400 text-sm pl-6'>List your top skills based on relevant position</p>

            <div className='flex gap-2 items-center justify-start pl-6 mt-4'>
              <ToggleButton />
              <p>Show experience level</p>
            </div>

            <div className='flex ml-10 mt-6 items-center gap-4'>
              <div className='border border-gray-300 flex px-3 py-5 gap-3 items-center'>
                <p>Skill</p>
                <input type="text" className='border border-gray-300 w-80' />
                <div className='flex items-center text-gray-500'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
              </div>
              <div><GoTrash /></div>
            </div>

            <div className='flex ml-10 mt-6 items-center gap-4'>
              <div className='border border-gray-300 flex px-3 py-5 gap-3 items-center'>
                <p>Skill</p>
                <input type="text" className='border border-gray-300 w-80' />
                <div className='flex items-center text-gray-500'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
              </div>
              <div><GoTrash /></div>
            </div>

            <p className='flex items-center text-[#1E40AF] ml-8 gap-2 mt-4'><MdAdd /> Add more skills</p>
          </div>

          {/* References Section */}
          <div className='bg-white rounded-xl mt-20 pb-8'>
            <h4 className='flex items-center font-semibold gap-2 pl-6 pt-4'>References <FaEdit className='text-[#3734A9]'/> <GoTrash /></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>

            <div className='flex gap-2 items-center justify-start pl-6 mt-6'>
              <ToggleButton />
              <p>I’d like to hide references and make them available only on request</p>
            </div>

            <div className='flex ml-14 mt-6 gap-4'>
              <div className='border border-gray-300 pt-2 pb-12 pr-8'>
                <div className='flex justify-end text-2xl text-gray-500 mr-1'><IoIosArrowUp /></div>
                <div>
                  <form action="" className='grid grid-cols-2 gap-4 px-4 mt-2'>
                    <label htmlFor="" className=''>School Name</label>
                    <label htmlFor="" className=''>School Location</label>
                    <input type="text" placeholder='' className='border border-[#B1AEAE]'/>
                    <input type="text" className='border border-[#B1AEAE]' /> 

                    <label htmlFor="">Degree</label>
                    <label htmlFor="">Field of Study</label>
                    <input type="text" className='border border-[#B1AEAE]' />
                    <input type="text" className='border border-[#B1AEAE]' /> 
                  </form>
                </div>
              </div>
              <div>
                <GoTrash className='mt-10' />
              </div>
            </div>

            <p className='flex items-center text-[#1E40AF] ml-12 gap-2 mt-4'><MdAdd /> Add more skills</p>
          </div>

          {/* Languages Section */}
          <div className='bg-white rounded-xl mt-20 pb-8'>
            <h4 className='flex items-center font-semibold gap-2 pl-6 pt-4'>Languages <FaEdit className='text-[#3734A9]'/> <GoTrash /></h4>
            <hr className='my-4 w-full border-t border-gray-300 mt-2'/>
            <p className='text-gray-400 text-sm pl-6'>Add language skills to your resume</p>

            <div className='flex gap-2 items-center justify-start pl-6 mt-6'>
              <ToggleButton />
              <p>Show experience level</p>
            </div>

            <div className='flex ml-10 mt-6 gap-4'>
              <div className='px-4 pt-2 pb-6 border border-gray-300'>
                <div className='flex items-center justify-between'>
                  <div>English <span className='text-gray-400'>- Expert</span></div>
                  <div className='flex items-center gap-3'><GoTrash /> <IoIosArrowUp className='text-xl' /></div>
                </div>

                <div className='flex mt-5 gap-3 items-center'>
                  <p>Language</p>
                  <input type="text" className='border border-gray-300 w-52' />
                  <p>Expertise</p>
                  <div className='flex items-center text-[#1E40AF]'>
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                  </div>
                </div>
              </div>

              <div><GoTrash className='mt-8' /></div>
            </div>

            <p className='flex items-center text-[#1E40AF] ml-9 gap-2 mt-4'><MdAdd /> Add more languages</p>
          </div>

        </div>
        
        {/* Selected Resume Section */}
        <div className='hidden lg:block '>
          <div className='bg-white'><img src={Resume1} alt="" className='w-full'/></div>
          <div className='flex items-center text-base font-semibold gap-96 mt-8'>
            <div className='flex  items-center'><BiCloudUpload />Saved</div>
            <div className='flex  items-center'>Page :<IoIosArrowRoundBack className='text-gray-400 font-semibold' />1/3  <IoIosArrowRoundForward /></div>
          </div>
        </div>
      </div>


      {/* Add Additional Section */}
      <div className='pl-20 mt-20 font-bold text-3xl'><h2>Add Additional Section</h2></div>
      
      <div className='grid grid-cols-2 pl-20 pr-20 mt-20'>
        <div className='flex bg-white border rounded w-11/12 h-24 mb-4'>
          <div className='bg-[#1E40AF] rounded flex items-center justify-center w-1/4 h-auto border-solid border-8 border-[#1E40AF]'><img src={Language} alt="" className='w-16 h-16' /></div>
          <div className='font-medium text-3xl text-center flex flex-grow justify-center items-center'><p className='-ml-24'>Languages</p></div>
        </div>

        <div className='flex bg-white border rounded w-11/12 h-24 mb-4'>
          <div className='bg-[#1E40AF] rounded flex items-center justify-center w-1/4 h-auto border-solid border-8 border-[#1E40AF]'><img src={Certificate} alt="" className='w-16 h-16' /></div>
          <div className='font-medium text-3xl text-center flex flex-grow justify-center items-center'><p className='-ml-20'>Certification</p></div>
        </div>

        <div className='flex bg-white border rounded w-11/12 h-24 mt-8 mb-4'>
          <div className='bg-[#1E40AF] rounded flex items-center justify-center w-1/4 h-auto border-solid border-8 border-[#1E40AF]'><img src={Handshake} alt="" className='w-18 h-16' /></div>
          <div className='font-medium text-3xl text-center flex flex-grow justify-center items-center'><p className='-ml-20'>Volunteering</p></div>
        </div>

        <div className='flex bg-white border rounded w-11/12 h-24 mt-8 mb-4'>
          <div className='bg-[#1E40AF] rounded flex items-center justify-center w-1/4 h-auto border-solid border-8 border-[#1E40AF]'><img src={Link} alt="" className='w-16 h-16' /></div>
          <div className='font-medium text-3xl text-center flex flex-grow justify-center items-center'><p className='-ml-40'>Links</p></div>
        </div>

        <div className='flex bg-white border rounded w-11/12 h-24 mt-8 mb-20'>
          <div className='bg-[#1E40AF] rounded flex items-center justify-center w-1/4 h-auto border-solid border-8 border-[#1E40AF]'><img src={Award} alt="" className='w-16 h-16' /></div>
          <div className='font-medium text-3xl text-center flex flex-grow justify-center items-center'><p className='-ml-36'>Awards</p></div>
        </div>

        <div className='flex bg-white border rounded w-11/12 h-24 mt-8 mb-20'>
          <div className='bg-[#1E40AF] rounded flex items-center justify-center w-1/4 h-auto border-solid border-8 border-[#1E40AF]'><img src={Reference} alt="" className='w-16 h-16' /></div>
          <div className='font-medium text-3xl text-center flex flex-grow justify-center items-center'><p className='-ml-24'>References</p></div>
        </div>

      </div>
    </div>
  )
}

export default createresume
