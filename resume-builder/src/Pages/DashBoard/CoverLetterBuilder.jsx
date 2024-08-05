import React, { useState } from "react";
import Button from "./../../components/Button/button";
import { skills } from "./SkillData";
import empowering from "../../assets/images/empowering.png";
import paint from "../../assets/images/paint.png";
import inquisitive from "../../assets/images/inquisitive.png";
import team from "../../assets/images/team.png";
import enterprise from "../../assets/images/enterprise.png";
import standard from "../../assets/images/standard.png";

const CoverLetterBuilder = () => {
  const [bg, setBg] = useState(null);

  const toggle = (index) => {
    setBg(bg === index ? null : index);
  };

  return (
    <div className="px-[5%] lg:px-[10%]">
      {/* skip button div  */}
      <div className="flex justify-end">
        <Button
          text="Skip"
          url=""
          variant="text-base text-[#1E40AF] text-center font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-opacity-0 border-[#1E40AF] border-[1.5px] justify-center"
        />
      </div>
      {/* progress bar div  */}
      <div className=" flex justify-around px-2 lg:px-10 mt-12">
        <span className="text-[12px] lg:text-base">Select a Template</span>
        <span className="text-[12px] lg:text-base">Job Goals</span>
        <span className="text-[12px] lg:text-base">Work info</span>
        <span className="text-[12px] lg:text-base">Finalize</span>
      </div>

      {/* years of relevant experience */}
      <div className="bg-white mt-10 lg:mt-20 rounded-xl">
        <div className="border-[#1E40AF] rounded-xl py-5 px-8 lg:px-0 lg:py-10 border-[1px]">
          <h5 className="text-center text-[15px] lg:text-2xl font-bold">
            How many years of relevant experience do you have?
          </h5>
          <p className="text-center text-[10px] lg:text-[14px]">
            relevant experience can include jobs, freelance contracts,
            internships, and volunteering.
          </p>
        </div>

        <div className="mt-5 flex py-3 px-3 lg:py-10 lg:px-[7%] justify-between">
          <span className="rounded-md lg:text-base text-[9px] flex items-center font-bold border-[#1E40AF] border-[1px] p-2">
            Less than 1
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            1
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            2
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            3
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            4
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            5
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            6
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            7
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            8
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            9
          </span>
          <span className="rounded-[100%] lg:rounded-[50%] text-[12px] flex items-center text-base font-bold border-[#000000] border-[1px] lg:py-2 lg:px-4 py-0 px-3">
            10
          </span>
        </div>
      </div>

      {/* applying for a spectific job */}
      <div className="bg-white mt-10 lg:mt-20 rounded-xl">
        <div className="border-[#1E40AF] rounded-xl py-5 px-8 lg:px-0 lg:py-10 border-[1px]">
          <h5 className="text-center text-[15px] lg:text-2xl font-bold">
            Are you applying for a specific job
          </h5>
          <p className="text-center text-[10px] lg:text-[14px]">
            "If you tell us the job title and employer, we'll tailor your cover
            letter accordingly. If you don't specify a job, we'll provide a
            cover letter that you can personalize later."
          </p>
        </div>

        <div className="mt-5 flex py-8 px-3 lg:py-10 lg:px-[7%] gap-10 lg:gap-20 justify-center">
          <Button
            text="Yes"
            url=""
            variant="text-base text-[#fff] text-center font-bold md:px-12 px-10 lg:py-2 py-2 flex items-center bg-[#1E40AF]  justify-center"
          />
          <Button
            text="Not Yet"
            url=""
            variant="text-base text-[#1E40AF] text-center font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-opacity-0 border-[#1E40AF] border-[1.5px] justify-center"
          />
        </div>
      </div>

      {/* position applying for  */}
      <div className="bg-white mt-10 lg:mt-20 rounded-xl">
        <div className="border-[#1E40AF] rounded-xl py-5 px-8 lg:px-0 lg:py-10 border-[1px]">
          <h5 className="text-center text-[15px] lg:text-2xl font-bold">
            What position are you applying for?
          </h5>
          <p className="text-center text-[10px] lg:text-[14px]">
            Please indicate the position you wish to apply for and the company
            where you would like to work.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center py-8 px-3 lg:py-10 lg:px-[7%] gap-5 lg:gap-5 justify-center">
          <div className="flex flex-col w-[60%]">
            <label>Job Position</label>
            <input
              type="text"
              className="p-2 border-[0.5px] border-[#1E40AF] rounded-none outline-none"
            />
          </div>
          <div className="flex flex-col w-[60%]">
            <label>Company Organization</label>
            <input
              type="text"
              className="p-2 border-[0.5px] border-[#1E40AF] rounded-none outline-none"
            />
          </div>
        </div>
      </div>

      {/* what makes you stand out  */}
      <div className="bg-white mt-10 lg:mt-20 rounded-xl">
        <div className="border-[#1E40AF] rounded-xl py-5 px-8 lg:px-0 lg:py-10 border-[1px]">
          <h5 className="text-center text-[15px] lg:text-2xl font-bold">
            What makes you stand out?
          </h5>
          <p className="text-center text-[10px] lg:text-[14px]">
            Select your best strengths and soft skills to highlight in your
            cover letter.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center py-8 px-3 lg:py-10 lg:px-[7%] gap-5 lg:gap-5 justify-center">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <Button
                key={index}
                style={{ transitionProperty: "background-color" }}
                text={skill + " " + "+"}
                url=""
                variant={`text-[12px] lg:text-base text-[#000] text-center  md:px-3 px-3 lg:py-2 py-2 flex items-center bg-opacity-0 border-[#000] border-[1px] justify-center ${
                  bg === index ? "bg-[#1E40AF]" : ""
                }`}
                onClick={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* relevant jobs  */}
      <div className="bg-white mt-10 lg:mt-20 rounded-xl">
        <div className="border-[#1E40AF] rounded-xl py-5 px-8 lg:px-0 lg:py-10 border-[1px]">
          <h5 className="text-center text-[15px] lg:text-2xl font-bold">
            What your relevant job experience?
          </h5>
          <p className="text-center text-[10px] lg:text-[14px]">
            Select a recent job that’s relevant to the position you’re applying
            for.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center py-8 px-3 lg:py-10 lg:px-[7%] gap-5 lg:gap-5 justify-center">
          <div className="flex flex-col w-[70%]">
            <label>Job Title</label>
            <input
              type="text"
              className="p-2 border-[0.5px] border-[#1E40AF] rounded-none outline-none"
            />
          </div>
        </div>
      </div>

      {/* work you prefer  */}
      <div className="bg-white mt-10 lg:mt-20 rounded-xl">
        <div className="border-[#1E40AF] rounded-xl py-5 px-8 lg:px-0 lg:py-10 border-[1px]">
          <h5 className="text-center text-[15px] lg:text-2xl font-bold">
            How do you prefer to work?
          </h5>
          <p className="text-center text-[10px] lg:text-[14px]">
            we will personalize the tone of your letter based on your working
            style
          </p>
        </div>

        <div className="mt-5 py-8 px-3 lg:py-10 lg:px-[7%] gap-10 lg:gap-5 justify-center">
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="border-[#1E40AF] rounded-xl p-5 lg:p-8 border-[1px]">
              <img src={empowering} alt="" />
              <p className="text-2xl my-2">Empowering</p>
              <p>
                You’re adept at guiding teams through empowering and decisive
                task allocation.
              </p>
            </div>

            <div className="border-[#1E40AF] rounded-xl p-5 lg:p-8 border-[1px]">
              <img src={paint} alt="" />
              <p className="text-2xl my-2">Pioneering</p>
              <p>
                You’re are energized by creative and innovative work
                environment.
              </p>
            </div>

            <div className="border-[#1E40AF] rounded-xl p-5 lg:p-8 border-[1px]">
              <img src={inquisitive} alt="" />
              <p className="text-2xl my-2">Inquisitive</p>
              <p>You have a talent for problem solving and versatility.</p>
            </div>

            <div className="border-[#1E40AF] rounded-xl p-5 lg:p-8 border-[1px]">
              <img src={standard} alt="" />
              <p className="text-2xl my-2">Systematic</p>
              <p>
                You introduce organization and concentration to optimize tasks.
              </p>
            </div>

            <div className="border-[#1E40AF] rounded-xl p-5 lg:p-8 border-[1px]">
              <img src={enterprise} alt="" />
              <p className="text-2xl my-2">Enterprising</p>
              <p>
                You consistently exceed expectations in achieving goals and
                ensuring prompt task completion.
              </p>
            </div>

            <div className="border-[#1E40AF] rounded-xl p-5 lg:p-8 border-[1px]">
              <img src={team} alt="" />
              <p className="text-2xl my-2">Collaborative</p>
              <p>
                You thrive in competitive environments and derive satisfaction
                from assisting others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[20%] mt-16">
        <Button
          text="Generate Cv"
          url=""
          variant="text-base text-[#fff] text-center font-bold md:px-12 px-10 lg:py-2 py-2 flex items-center bg-[#1E40AF]  justify-center"
        />
      </div>
    </div>
  );
};

export default CoverLetterBuilder;
