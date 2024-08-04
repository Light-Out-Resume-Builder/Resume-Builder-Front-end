import TemplateHeading from "./TemplateHeading";
import Button from "./../../components/Button/button";
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Navigation } from 'swiper/modules'
import { Coverletterexamples, Minimalist, Progressive, Timeless } from "./TemplateData";


const CoverlLetter = () => {
  return (
    <div className="py-[10%]">
      <div className="mb-20">
        <TemplateHeading title="Progressive" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Progressive.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-20">
        <TemplateHeading title="Minimalist" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Minimalist.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-20">
        <TemplateHeading title="Timeless" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Timeless.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-20">
        <TemplateHeading title="Cover letter examples" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Coverletterexamples.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-20 items-center">
        <Button
          text="Build My Cover Letter"
          variant="text-base text-white text-center md:w-[200px] lg:w-[200px] md:px-5 md:py-3 px:3 py-2 flex items-center justify-center bg-[#1E40AF;
  ]"
          url="/"
        />
      </div>
    </div>
  );
};

export default CoverlLetter;
