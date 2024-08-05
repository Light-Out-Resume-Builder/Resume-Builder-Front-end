import React from "react";
import Button from "./../../components/Button/button";
import ProjectManagement2 from "../../assets/images/ProjectManagement2.png";
import Timelessresume from "../../assets/images/Timelessresume.png";
import Minimalistresume from "../../assets/images/Minimalistresume.png";
import Coverletterexamplesresume from "../../assets/images/Coverletterexamplesresume.png";

const CoverLetterBuilderC = () => {
  return (
    <div className="px-[5%] lg:px-[10%]">
      {/* skip button div  */}
      <div className="flex gap-2 lg:gap-20">
        <div className="w-[60%] flex justify-between">
          <Button
            text="X Close"
            url=""
            variant="text-base text-[#1E40AF] text-center font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-opacity-0 border-[#1E40AF] border-[1.5px]  justify-center"
          />
          <Button
            text="Done"
            url=""
            variant="text-base text-[#fff] text-center font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-[#1E40AF]  justify-center"
          />
        </div>
        <div className="w-[40%] flex justify-end">
          <Button
            text="Download"
            url=""
            variant="text-base text-[#fff] text-center font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-[#1E40AF] justify-center"
          />
        </div>
      </div>

      {/* personal details  */}
      <div className="flex flex-col lg:flex-row gap-20">
        {/* right-side divide  */}
        <div className="w-[100%] lg:w-[60%]">
          {/* personal details  */}
          <div className="bg-[#E4EAFB] py-20 px-8 mt-10 lg:mt-20">
            {/* divde holding input fields  */}
            <div className="flex gap-10 justify-between">
              <div className="flex flex-col w-[50%]">
                <label>Template Color</label>
                <select className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] outline-none">
                  <option value="">#B4D1D5</option>
                </select>
              </div>
              <div className="flex flex-col w-[50%]">
                <label>Font</label>
                <select className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] outline-none">
                  <option value="">Select Font</option>
                </select>
              </div>
            </div>

            {/* divde holding input fields  */}
            <div className="flex mt-10 gap-10 justify-between">
              <div className="flex flex-col w-[50%]">
                <label>Font Size</label>
                <select className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] outline-none">
                  <option value="">Medium</option>
                </select>
              </div>
              <div className="flex flex-col w-[50%]">
                <label>Line Spacing</label>
                <select className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] outline-none">
                  <option value="">Medium</option>
                </select>
              </div>
            </div>
            {/* divde heading  */}
            <div className="flex mt-10 gap-10 justify-center">
              <h3 className="text-center text-2xl">Choose Template</h3>
            </div>

            {/* divide holding images  */}
            <div className="flex flex-col lg:flex-row mt-10 gap-2 justify-between">
              <div className="flex justify-center h-[350px] lg:w-[50%] w-[100%]">
                <img src={ProjectManagement2} alt="" />
              </div>
              <div className="flex mt-4 lg:mt-0 justify-center h-[350px] lg:w-[50%] w-[10">
                <img src={Timelessresume} alt="" />
              </div>
            </div>
            {/* divide holding images  */}
            <div className="flex flex-col lg:flex-row mt-10 gap-2 justify-between">
              <div className="flex justify-center h-[350px] lg:w-[50%] w-[10">
                <img src={Minimalistresume} alt="" />
              </div>
              <div className="flex mt-4 lg:mt-0 justify-center h-[350px] lg:w-[50%] w-[10">
                <img src={Coverletterexamplesresume} alt="" />
              </div>
            </div>
            {/* divide holding images  */}
            <div className="flex flex-col lg:flex-row mt-10 gap-2 justify-between">
              <div className="flex justify-center h-[350px] lg:w-[50%] w-[10">
                <img src={Timelessresume} alt="" />
              </div>
              <div className="flex mt-4 lg:mt-0 place-content-center justify-center h-[350px] lg:w-[50%] w-[10">
                <img src={Timelessresume} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* left-side divide  */}
        <div className="w-[100%] lg:w-[40%] mt-0 lg:mt-20 flex flex-col">
          <img src={ProjectManagement2} alt="" />
          <div className="mt-5 flex gap-10 justify-between">
            <Button
              text="Saved"
              url=""
              variant="mx-auto text-base text-[#fff] text-center font-bold md:px-4 px-2 lg:py-1 py-1 flex items-center bg-[#1E40AF]  justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterBuilderC;
