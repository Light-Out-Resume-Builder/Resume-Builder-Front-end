import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CoverLetterDash = () => {
  const [tab, setTab] = useState("0");
  return (
    <>
      <div className="w-[100%] py-10 px-20 bg-[#1E40AF] items-center">
        <div className="flex justify-start text-white font-bold gap-[45px]  cursor-pointer">
          <span className="flex flex-col" onClick={() => setTab("0")}>
            My Dashboard
            <Link
              to="/letter-dash"
              className={
                tab == "0"
                  ? "transition ease-in-out delay-75 absolute mx-auto h-2 w-[7.5%] mt-9 rounded-lg bg-white after:top-10 shadow-md after:content-[''] after:absolute after:h-5 after:rounded-full after:w-10 before:bg-white"
                  : ""
              }
            ></Link>
          </span>
          <span className="flex flex-col" onClick={() => setTab("1")}>
            Resume
            <Link
              to="resume-letter"
              className={
                tab == "1"
                  ? "transition ease-in-out delay-75 absolute mx-auto h-2 w-[4%] mt-9 rounded-lg bg-white after:top-10 shadow-md after:content-[''] after:absolute after:h-5 after:rounded-full after:w-10 before:bg-white"
                  : ""
              }
            ></Link>
          </span>
          <span className="flex flex-col" onClick={() => setTab("2")}>
            Cover letters
            <Link
              to="/create-cover-letter/cover-letter"
              className={
                tab == "2"
                  ? "transition ease-in-out delay-75 absolute mx-auto h-2 w-[6%] mt-9 rounded-lg bg-white after:top-10 shadow-md after:content-[''] after:absolute after:h-5 after:rounded-full after:w-10 before:bg-white"
                  : ""
              }
            ></Link>
          </span>
        </div>
      </div>
          <div className="py-10 px">
              <Outlet />
      </div>
    </>
  );
};

export default CoverLetterDash;
