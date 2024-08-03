import { whyLightOut } from "../../data/SiteData";
import imgref from "../imgref";
function WhyLightOut() {
  return (
    <div className="w-full bg-[#BFDBFE]">
      <div className="w-full max-w-[1334px] px-6 xl:px-[80px] mx-auto  py-[100px] xl:py-[147px]">
        <h3 className=" text-3xl lg:text-[40px] pb-10 lg:pb-[77px] text-center">
          Why Choose Light-Out
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-0">
          <div>
            {whyLightOut.map((why) => (
              <div key={why.title} className="flex gap-0 md:gap-4 xl:gap-8 items-center mb-6 md:mb-3 md:max-w-[90%] lg:max-w-full mx-auto">
                <div>
                  <div className="hidden md:block h-[20px] lg:h-[38px] w-[20px] lg:w-[38px] bg-[#1E40AF] rounded-full"></div>
                </div>
                <div className="border-[1.91px] border-[#1E40AF] rounded-lg w-full max-w-[650px] py-3 ps-4 xl:ps-[59px] pe-4 lg:pe-6">
                  <h4 className="font-semibold  text-xl xl:text-2xl leading-[39px] pb-1">{why.title}</h4>
                  <p className="text-base xl:text-lg ">{why.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-full w-full ms-0 xl:ms-10 mt-5 lg:mt-0">
            <img src={imgref.resume} alt="Resume sample" className="h-full w-full max-h-[837px] mt-[-12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyLightOut;
