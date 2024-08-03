import React from 'react';
import { Link, useLocation} from 'react-router-dom';

function DashboardNav() {
  const location = useLocation();

  return (
    <div className="w-full h-[98px] bg-[#1E40AF] ps-3 md:ps-10 lg:ps-[125px] flex items-center">
      <div className="flex gap-4 md:gap-[52px] w-full max-w-[1500px] mx-auto flex-wrap">
        <div className='flex flex-col '>
        <Link
          to="/dashboard"
          className='text-white pb-2 text-base md:text-lg'
        >
          My Dashboard
        </Link>
        <div className={`${
            location.pathname === '/dashboard' ? 'h-[6px] bg-white   rounded-[10px]' : ''
          }`}></div>
        </div>
       <div className='flex flex-col'>

        <Link
          to="/dashboard/resume"
          className="text-white pb-2 text-base md:text-lg"
        >
          Resume
        </Link>
        <div className={`${
            location.pathname === '/dashboard/resume' ? 'h-[6px] bg-white   rounded-[10px]' : 'hidden'
          }`}></div>
       </div>

       <div className='flex flex-col'>

        <Link
          to="/dashboard/cover-letter"
          className="text-white pb-2 text-base md:text-lg"
        >
          Cover Letters
        </Link>
        <div className={`${
            location.pathname === '/dashboard/cover-letter' ? 'h-[6px] bg-white   rounded-[10px]' : 'hidden'
          }`}></div>
       </div>
      </div>
    </div>
  );
}

export default DashboardNav;
