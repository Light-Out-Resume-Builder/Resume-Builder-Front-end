import {serviceListData} from "../../data/SiteData";

function ServiceList() {
  return (
    <div className="w-full bg-[#DBEAFE]">
      <div className="w-full bg-[#1E40AF] h-[145px] flex justify-center items-center">
        <h3 className="text-[24px]  md:text-[32px] leading-[30px] lg:leading-[50px] xl:leading-[80px] font-bold  pb-4 lg:pb-6 xl:pb-2 text-center px-6 text-white">
          Services we can help you with
        </h3>
      </div>
      <div className="w-full max-w-[1260px] mx-auto pt-10 lg:pt-[100px] pb-[100px] lg:pb-[180px] ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[20px]  xl:gap-[80px]   place-items-center">
          {serviceListData.map((service)=>(
            <div key={service.title} className="flex flex-col  items-center  w-full max-w-[530px]">
              <div className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] bg-gradient-to-b from-[#213E93] to-[#0A132D] rounded-full mb-2 lg:mb-1">
              </div>
              <h3 className="text-2xl md:text-3xl text-center max-w-[250px] font-medium md:font-normal">{service.title}</h3>
              <p className="text-center  leading-[29px] text-lg pt-4 px-4 md:px-8">{service.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default ServiceList;
