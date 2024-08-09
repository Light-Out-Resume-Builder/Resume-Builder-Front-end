import React from "react";
import coverletter from "../../assets/images/coverletter.png";
import importfile from "../../assets/images/importfile.png";
import Button from "./../../components/Button/button";
import { Outlet } from "react-router-dom";

const CoverLetter = () => {
  return (
    <>
      <div className="px-10 py-5 lg:py-10">
        <h2 className="text-center font-bold text-[26px] leading-7 lg:leading-normal lg:text-4xl">
          Personalize Your Cover Letter with Ease
        </h2>
        <p className="text-center flex justify-center lg:text-2xl mt-2 lg:mt-4">
          customizing your cover letter and make a{" "}
          <br className="hidden lg:block" /> lasting impression on employers.
        </p>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-10 justify-center mt-10 lg:mt-20">
          {/* div housing all element of create cover letter  */}
          <div>
            <div className="bg-white py-20 px-10 lg:w-[600px] lg:h-[700px] flex flex-col gap-5 lg:gap-10 justify-center mb-5 lg:mb-10">
              <p className="text-center lg:text-[30px]">
                Create a New Cover Letter
              </p>
              <img src={coverletter} alt="" className="mx-auto shadow-2xl" />
            </div>
            <Button
              text="Create Cover letter"
              url=""
              variant="mx-auto text-base text-white text-center md:w-[100px] lg:w-[200px] md:px-5 md:py-3 px:3 py-2 flex items-center justify-center"
            />
          </div>

          {/* div housing import file  */}
          <div>
            <div className="bg-white py-20 px-10 lg:w-[600px] lg:h-[700px] flex flex-col gap-5 lg:gap-10 justify-center mb-5 lg:mb-10">
              <p className="text-center lg:text-[30px]">Import from filesqqq</p>
              <img src={importfile} alt="" className="mx-auto" />
            </div>
            <Button
              text="Import from files"
              url="/dashboard/cover-letter/a"
              variant="mx-auto text-base text-white text-center md:w-[100px] lg:w-[200px] md:px-5 md:py-3 px:3 py-2 flex items-center justify-center"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default CoverLetter;
