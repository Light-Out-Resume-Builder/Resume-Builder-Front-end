import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import imgref from "../../components/imgref";

const startOptions = [
  {
    title: "Create a New Resume",
    desc: "Start with a blank paper, we will guide you step by step",
    img: imgref.create,
    btn: "Create Resume",
  },
  {
    title: "Import from LinkedIn",
    desc: "Import your well-crafted LinkedIn profile directly into your resume to save time.",
    img: imgref.importLinkedin,
    btn: "Import fom Linkedin",
  },
  {
    title: "Import from files",
    img: imgref.importFile,
    btn: "Import from files",
  },
];

function UserResume() {
  return (
    <DashboardLayout>
      <div className="w-full bg-[#BFDBFE]">
        <div className="w-full max-w-[1500px] mx-auto">
          <div className="pt-[49px] text-black text-center pb-[50px] md:pb-[70px] xl:pb-[100px]">
            <h2 className="font-bold text-[34px] md:text-5xl xl:text-[62px] leading-[36px] md:leading-[60px] xl:leading-[80px]">
              How Do You Want To Start?
            </h2>
            <p className="px-2 w-full max-w-[600px] xl:max-w-[748px] text-base md:text-xl xl:text-[32px] text-center mx-auto leading-[24px] md:leading-[32px] xl:leading-[41px]">
              Start fresh, or connect your LinkedIn profile, or upload a PDF
              document from your files.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-20  xl:gap-y-[150px] xl:gap-x-[134px] justify-center  pb-[53px] px-4">
            {startOptions.map((option, index) => (
              <div key={index} className="flex flex-col items-center ">
                <div className=" bg-white h-[520px] md:h-[630px] xl:h-[700px] w-[100%] md:w-[500px] lg:w-[430px] xl:w-[560px]  ">
                  <div className="pt-[48px]">
                    <h3 className="text-center text-3xl pb-2 px-2">
                      {option.title}
                    </h3>
                    <p className="text-center max-w-[380px] text-sm mx-auto px-4 ">
                      {option.desc}
                    </p>
                  </div>
                  <div className="w-full flex justify-center pt-0  md:pt-6 lg:pt-4 xl:pt-6">
                    <img
                      src={option.img}
                      alt="Start Option"
                      className=" h-[380px] md:h-[500px]"
                    />
                  </div>
                </div>
                <button className="bg-[#0F74CC] text-white rounded-[10.95px] h-[52px] md:h-[58px] w-[80%] md:w-[260px] max-w-[260px] mt-[30px] xl:mt-[48px] text-base md:text-lg font-semibold">
                  {option.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserResume;
