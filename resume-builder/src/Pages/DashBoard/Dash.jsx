import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dash = () => {
  const [tab, setTab] = useState("0");
  const nagvigate = useNavigate("");
  return (
    <div className="pb-20">
      <div className="w-[100%] py-8 px-10 lg:py-10 lg:px-20 bg-[#1E40AF] items-center">
        <div className="flex justify-start text-white text-[14px] font-bold gap-3 lg:gap-[45px]  cursor-pointer">
          <span
            className="flex flex-col"
            onClick={() => {
              setTab("0");
              nagvigate("/dashboard");
            }}
          >
            My Dashboard
            <span
              className={
                tab == "0"
                  ? "transition ease-in-out delay-75 absolute mx-auto h-1 lg:h-2 w-[25%] lg:w-[7.5%] mt-7 lg:mt-9 rounded-lg bg-white"
                  : ""
              }
            ></span>
          </span>
          <span
            className="flex flex-col"
            onClick={() => {
              setTab("1");
              nagvigate("/dashboard/resume");
            }}
          >
            Resume
            <span
              className={
                tab == "1"
                  ? "transition ease-in-out delay-75 absolute mx-auto h-1 lg:h-2 w-[14%] lg:w-[7.5%] mt-7 lg:mt-9 rounded-lg bg-white"
                  : ""
              }
            ></span>
          </span>
          <span
            className="flex flex-col"
            onClick={() => {
              setTab("2");
              nagvigate("/dashboard/CoverLetterDash");
            }}
          >
            Cover letters
            <span
              className={
                tab == "2"
                  ? "transition ease-in-out delay-75 absolute mx-auto h-1 lg:h-2 w-[23%] lg:w-[7.5%] mt-7 lg:mt-9 rounded-lg bg-white"
                  : ""
              }
            ></span>
          </span>
        </div>
      </div>
      <div className="py-10 px">
        <Outlet />
      </div>
    </div>
  );
};

export default Dash;
