import imgref from "../imgref";


function ServiceHero() {
  return (
    <div className="w-full bg-gradient-to-b from-[#DBEAFE] to-[#60A5FA]">
      <div className="max-w-[1500px] mx-auto text-[#000000] ps-0 lg:ps-6 xl:ps-[92px] pt-[85px] pb-[85px] xl:pb-[153px]  grid grid-cols-1 lg:grid-cols-2">
        <div className="ps-6 lg:ps-0">
          <h3 className="text-[42px] md:text-5xl lg:text-[62px] leading-[80px] font-bold  pb-6 lg:pb-10 text-center lg:text-start ">Our services</h3>
          <p
            className="w-full  pe-6 lg:pe-0 lg:max-w-[465px] xl:max-w-[560px] text-[16.7px] xl:text-[20px] text-justify leading-[25.98px] xl:leading-[30px] pb-8 ">
            Choose from one of our expertly prepared resume types below, by
            using pre-established parts that have been endorsed by recruiters
            internationally, you can begin creating your resume in under 5
            seconds, additionally, you can edit to fit your preferences and
            personality before clicking {"Download"}. Even if you have never
            created a resume before, it is that SIMPLE to use!
          </p>
        </div>
     
        <div className=" h-full w-full max-w-[95%] lg:max-w-[98%]  min-h-[220px] mx-auto ">
          <img
            src={imgref.cv}
            alt="Resume collection"
            className=" w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
