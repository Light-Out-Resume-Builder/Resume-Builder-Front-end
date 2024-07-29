import  { useState } from "react";
import search from "../../assets/images/search.png";
import { Link, Outlet } from "react-router-dom";

const Template = () => {
  const [tab, setTab] = useState(true);
  return (
    <>
      <div className="flex justify-center items-center w-[100%] py-[8%] px-[5%] lg:px-[15%] bg-[#d0e4fe]">
        <div className="flex justify-center items-center gap-2 rounded p-2 w-[70%] bg-[#fff]">
          <img src={search} alt="Search Icon" className="w-[35px]" />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none w-[80%]"
          />
        </div>
      </div>
      <div className="px-5 lg:px-20 bg-[#d0e4fe]">
        <div className="flex justify-center gap-[15%]">
          <div className="flex-col">
            <Link
              to="/template/resume"
              className="text-2xl lg:text-4xl font-bold"
              onClick={() => setTab(true)}
            >
              Resume
            </Link>
            <div className="mt-3 lg:mt-7"></div>
            {tab && <div className="bg-[#1E40AF] w-[100%] rounded h-2"></div>}
          </div>

          <div className="flex-col">
            <Link
              to="/template/coverletter"
              className="text-2xl lg:text-4xl font-bold"
              onClick={() => setTab(false)}
            >
              Cover Letter
            </Link>
            <div className="mt-3 lg:mt-7"></div>
            {!tab && <div className="bg-[#1E40AF] w-[100%] rounded h-2"></div>}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Template;
