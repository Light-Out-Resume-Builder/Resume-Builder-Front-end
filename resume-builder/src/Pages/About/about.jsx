import AboutImg from "../../assets/images/read-more.png";
import Candidate from "../../assets/images/Successfulcandidate.png";
import Woman from "../../assets/images/youngwoman.png";
import { coreValue, keyFeatures } from "./AboutData.js";
// import Icon from "../../assets/images/block1.png";

const about = () => {
  return (
    <>
      {/* -------------------------------about section---------------------------  */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[1rem] lg:gap-[8rem] py-20 px-10 lg:px-20 bg-gradient-to-t from-[#09122b] to-[#1d3987]">
        {/* left side of about section  */}
        <div className="leftside w-[100%]">
          <h3 className="text-white text-4xl mb-5 lg:mb-10">
            About Light-out Resume
          </h3>
          <p className="text-white text-base text-justify lg:text-left mb-10">
            Light-out Resume is a distinguished product proudly crafted by
            Expertise — a renowned global innovation and digital skill learning
            center at the forefront of shaping future talent. Our commitment to
            innovation drove the inception of Light-out Resume, aimed at
            revolutionizing the job-seeking experience by facilitating seamless
            connections between job-seekers and recruiters. Our dedicated team
            spared no effort in developing cutting-edge tools designed
            specifically to expedite your job search journey. Furthermore, we
            have meticulously engineered our template designs to not only meet
            but set industry standards, ensuring they are endorsed by leading HR
            departments worldwide. Trust Light-out Resume to empower you with
            the tools and resources needed to create an outstanding resume that
            leaves a lasting impression and propels your career forward!
          </p>
        </div>

        {/* right side of about section  */}
        <div className="rightside  w-[100%] md:w-[100%]">
          <img src={AboutImg} alt="" className="content-center w-[100%]" />
        </div>
      </div>

      {/* ------------------------------section for mission----------------------------------- */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[1rem] lg:gap-[8rem] py-10 px-10 lg:px-20 bg-[#bfdbfe]">
        <div className="leftside w-[100%]">
          <h2 className="text-4xl text-black font-bold mb-6">Our Mission</h2>
          <p>
            Our mission at Light-out Resume is to empower job-seekers globally
            with innovative tools and expert guidance, simplifying resume
            creation to enhance connections with recruiters and accelerate
            career success.
          </p>
        </div>

        {/* right side of the mission section  */}
        <div className="rightside w-[100%]">
          <img src={Candidate} alt="" />
        </div>
      </div>

      {/* ----------------------section for core values------------------------------- */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[1rem] lg:gap-[8rem] py-10 lg:py-20 px-10 lg:px-20 bg-[#d0e4fe]">
        {/* left side of the core value section  */}
        <div className="leftside w-[100%] mb-10 lg:mb-0 flex justify-center items-center">
          <img src={Woman} alt="" />
        </div>

        {/* right side of the core value section  */}
        <div className="rightside w-[100%]">
          <h1 className="text-5xl font-bold mb-8 lg:mb-20">Our core value</h1>
          <div className="flex-col">
            {/* map for fetching all the core values  */}
            {coreValue.map((item, index) => (
              <div
                className="flex gap-[1.5rem] mb-[2.5rem] w-[60%]"
                key={index}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[51.14px] h-[51.14px]"
                />
                <div className="flex-col">
                  <h3 className="text-3xl mb-4">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
            {/* end of mapping */}
          </div>
        </div>
      </div>

      {/* -------------------------------key feature section -------------------------------------- */}
      <div className="flex flex-col lg:flex-col justify-center items-center gap-[1rem] lg:gap-[8rem] py-10 px-10 lg:px-20">
        <h1 className="text-4xl lg:text-5xl text-center font-bold mt-5 lg:mt-10 mb-10 lg:mb-0">
          Our key features
        </h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center lg:gap-y-[3rem] md:gap-y-[2rem] gap-y-[1.5rem] gap-x-[5rem]">
          {keyFeatures.map((item, index) => (
            <div
              className={`rounded-lg p-10  flex-col ${item.color}`}
              key={index}
            >
              <div className="lg:flex md:flex-col gap-8 mb-4 ">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[70px] h-[70px] lg:w-[96px] lg:h-[96px] mb-3 lg:mb-1"
                />
                <h6 className="text-[18px] font-bold">{item.title}</h6>
              </div>
              <p className="text-justify lg:text-left">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default about;
