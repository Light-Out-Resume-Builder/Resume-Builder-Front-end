import imgref from "../../components/imgref";
import FAQ from "../../components/services/Faq";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceList from "../../components/services/ServiceList";
import Testimonials from "../../components/services/Testimonials";
import WhyLightOut from "../../components/services/WhyLightOut";

function Services() {
  return (
    <main className="w-full">
      <ServiceHero />
      <section>
        <div className="w-full bg-[#bfdbfe] pt-[87px] pb-[94px]">
          <div className="w-full max-w-[1110px] mx-auto flex flex-col items-center px-4 md:px-10">
            <div className="text-[#000000]">
              <h3 className="text-2xl md:text-3xl  lg:text-[40px] leading-[30px] xl:leading-[80px] font-bold  pb-4 lg:pb-6 xl:pb-2 text-center px-6 ">
                Build Your Perfect Resume in Minutes
              </h3>
              <p className="text-lg md:text-xl xl:text-2xl text-center pb-8  md:pb-10 ">
                Our user-friendly resume builder helps you craft tailored
                resumes with ATS-<br className="hidden lg:block"/>optimized layouts and suggestions to impress
                recruiters and secure <br className="hidden lg:block"/>interviews.
              </p>
              <div className="w-full flex justify-center">
                <img src={imgref.hr} alt="HR" className="w-full h-full max-h-[300px] max-w-[334px]"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceList/>
      <WhyLightOut/>
      <Testimonials/>
      <FAQ/>
    </main>
  );
}

export default Services;
