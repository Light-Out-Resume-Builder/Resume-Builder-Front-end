import React from "react";
import Slider from "react-slick";
import { testimonialsData } from "../../data/SiteData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#BFDBFE]">
      <div className="pb-[100px]">
        <div className="w-full">
          <h3 className="text-[#1D1D1D] px-5 md:px-0 pb-5 lg:pb-10 text-center font-bold text-3xl  lg:text-[48px] leading-[35px] xl:leading-[52px]">
            Testimonials From
            <br className="hidden md:block" /> Our Previous Users
          </h3>
          <p className="text-[#1E40AF] text-center text-xl lg:text-2xl">
            What People Say About Us
          </p>
        </div>
        <div className="w-full max-w-[1400px] mx-auto px-4 pt-10 md:pt-20">
          <div className="slider-container">
            <Slider {...settings} arrows={false}>
              {testimonialsData.map((testimony) => (
                <div key={testimony.name} className="px-2">
                  <div className="shadow-lg bg-white h-auto  min-h-[280px] md:h-[280px] rounded-lg p-4">
                    <div className="flex items-center gap-5 pb-4">
                      <div>
                        <img
                          src={testimony.img}
                          alt="Profile"
                          className="h-[64px] xl:h-[94px] w-[64px] xl:w-[94px] rounded-full"
                        />
                      </div>
                      <div className="font-bold">
                        <h4 className="text-xl md:text-2xl">{testimony.name}</h4>
                        <p className="text-[#1E40AF] text-sm">{testimony.role}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm leading-[31px] font-medium">&quot;{testimony.review}&quot;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
