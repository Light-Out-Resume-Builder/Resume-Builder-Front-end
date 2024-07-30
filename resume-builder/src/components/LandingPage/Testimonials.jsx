import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import TestimonialBg from '../assets/images/benefit1.png';
import AnnImg from '../../assets/images/review-3.svg'; 
import SadeImg from "../../assets/images/review-1.svg" 
import UcheImg from '../../assets/images/review-2.svg'; 

const testimonials = [
 
  {
    img: SadeImg,
    name: "Sade Johnson",
    title: "UI/UX Designer",
    quote: "This is the best resume builder that I have come across so far, getting across. It is user friendly and also HR approved. I got my first job using this template."
  },
  {
    img: UcheImg,
    name: "Uche Ajuzie",
    title: "Software Developer",
    quote: "The experience is just smooth and adaptable, I was called up for an interview I applied with using future resume and my resume was naturally commended. Thanks Future Resume."
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
   <section className="bg-cover bg-center py-10 px-4 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center mb-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-4xl font-bold mt-7 md:mt-14 text-left">Testimonials From <br /> Our Previous Users</h1>
            <p className="text-xs md:text-lg font-bold text-[#1E40AF] mt-5 text-left">What People Say About Us</p>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-">
              <div className="flex items-center mb-4">
                <img src={AnnImg} alt="Ann Effiong" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h2 className="font-bold">AnnEfiong</h2>
                  <p className="text-sm text-gray-600">Cyber Security</p>
                </div>
              </div>
              <p className="text-sm text-gray-800">&quot;{"Light-out's"} resume/cover letter builder app was crucial for landing my cyber security job. Its templates and guidance helped me create a standout cover letter, securing my ideal position quickly.&quot;</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-xs">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h2 className="font-bold">{testimonial.name}</h2>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800">&quot;{testimonial.quote}&quot;</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
