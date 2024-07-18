import { useState } from "react";
import { faqData } from "../../data/SiteData";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    
    <div className="w-full bg-[#BFDBFE]">
      <div className="w-[95%] lg:w-[90%] max-w-[1095px] mx-auto p-4">
        <h2 className="px-5 md:px-0 pb-5 lg:pb-14 font-bold text-3xl  lg:text-[48px] leading-[35px] xl:leading-[52px] mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-5 ">
        {faqData.map((faq, index) => (
          <div key={index} className="px-4 md:px-10 lg:px-[100px] py-4 lg:py-6 border-2 border-[#1E40AF] rounded-lg">
          <div  className="py-2 md:py-4 ">
            <button
              className="w-full text-left text-lg md:text-2xl font-semibold text-[#1E40AF] mb-4 focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <div className="w-full flex justify-between items-center gap-2">
              {faq.question}
<div className="min-w-[40px] flex justify-center items-center">

              <div
                className={`h-[20px] lg:h-[32px] w-[20px] lg:w-[32px] rounded-full transition-transform ${
                  activeIndex === index ? "bg-[#1E40AF]" : "bg-[#1E40AF]"
                }`}
              ></div>
</div>
              </div>
            </button>
            <div
              className={`mt-2 text-[#27262B] overflow-hidden max-w-[579px] transition-max-height duration-500 ease-in-out text-base md:text-lg pe-0 lg:pe-5 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              style={{ transitionProperty: "max-height" }}
            >
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
          </div>

        ))}
        </div>
          
      </div>
    </div>
  );
}

export default Faq;
