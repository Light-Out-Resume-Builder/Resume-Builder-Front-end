import React from "react";
import TemplateHeading from "./TemplateHeading";
import Button from "./../../components/Button/button";
import { Basic, Creative, Modern, Professional } from "./TemplateData";

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules'

const Resume = () => {

  return (
    <div className="py-[10%]">
      <div className="mb-20">
        <TemplateHeading title="Basic" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Basic.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-20">
        <TemplateHeading title="Modern" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Modern.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-20">
        <TemplateHeading title="Professional" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper Professional"
        >
          {Professional.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-20">
        <TemplateHeading title="Creative" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Creative.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-20 items-center">
        <Button
          text="Build My Resume"
          variant="text-base text-white text-center md:w-[200px] lg:w-[200px] md:px-5 md:py-3 px:3 py-2 flex items-center justify-center "
          url="/"
        />
      </div>
    </div>
  );
};

export default Resume;
