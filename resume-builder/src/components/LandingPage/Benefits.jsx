import Ben1 from '../../assets/images/man-1.png';
import Ben2 from "../../assets/images/benefit2.png";
import Ben3 from '../../assets/images/benefit3.png';
import Ben4 from '../../assets/images/benefit4.png';
import Ben5 from '../../assets/images/benefit5.png';
import Ben6 from '../../assets/images/benefit6.png';
import Block2 from '../../assets/images/block2.png';

const benefits = [
  { img: Ben1, title: "Easy to Use", description: "The process of writing a resume is substantially sped up and simplified by using our resume builder." },
  { img: Ben2, title: "Secure", description: "We respect your privacy & give you control over your content and your data with us." },
  { img: Ben3, title: "Cool Templates", description: "Our template designs help your resume standout in a pool of others." },
  { img: Ben4, title: "Intelligent Designs", description: "With us, you won't have to bother about the minute details of resume development, such as font choice, layout, etc." },
  { img: Ben5, title: "HR-Approved and ATS Friendly", description: "The core design of our resume templates are HR-Approved & accepted by leading organizations." },
  { img: Ben6, title: "No Hidden Charges", description: "We’ve got a free version and our premium pricing is clear. We notify you about any new changes in good time." }
];

const Benefits = () => {
  return (
    <section className="md:px-20 px-10 py-10  md:mt-14 bg-gradient-to-t from-[#DBEAFE] to-[#60A5FA] font-[Poppins]">
      <h1 className="text-base pt-5 md:text-4xl font-bold text-center">
        Benefits of using our product
      </h1>
      <p className="text-xs pt-5 md:text-lg font-bold text-center text-[#1E40AF]">
        Why Choose Us?
      </p>
      <div className="md:flex justify-center mt-4 hidden">
        <img src={Block2} alt="Block2" />
      </div>
      <div className="grid gap-6 md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center p-4 "
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="md:w-20 md:h-20 lg:w-32 lg:h-32 w-40 h-40 flex-shrink-0 mb-4 md:mb-0 md:mr-4"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold md:text-2xl text-lg mb-2">
                {benefit.title}
              </h1>
              <p className="text-xs md:text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Benefits;
