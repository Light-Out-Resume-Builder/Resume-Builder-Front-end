import AboutImg from '../../assets/images/read-more.png';
import Block2 from '../../assets/images/block2.png';
import Button from '../Button/button'; 

const About = () => {
  return (
    <section className="md:px-20 px-10 font-[Poppins]">
      <h1 className="md:text-4xl lg:text-4xl text-lg font-bold mt-7 md:mt-14 text-center">
        About <span className="text-[#1E40AF]">Light-out</span> Resume
      </h1>
      <div className="md:flex justify-evenly">
        <div className="mt-7 md:mt-14 flex-1">
          <img src={AboutImg} alt="About" />
        </div>
        <div className="mt-7 md:mt-14 flex-1">
          <p className="mt-4 text-xs md:text-lg">
            Light-out Resume is a product of Future Labs — a global innovation & digital skill learning center. Light-out Resume was born of the need to create a new way for job-seekers to connect with recruiters. Hence, our best hands got to work with one thing in mind: to help you find a great job faster. We went even further to ensure that our Template designs meet Industry Standards and accepted by leading HR departments. With us, you can spin out an impressive resume that makes a memorable first impression!
          </p>
          <div className="mt-10 mb-4">
            <Button
              text="Read More"
              variant="text-base text-white text-center md:w-[200px] lg:w-[200px] md:px-5 md:py-3 px-3 py-2 flex items-center justify-center"
              url="/"
            />
          </div>
        </div>
      </div>
      <div className="md:flex hidden justify-center mt-14">
        <img src={Block2} alt="Block2" />
      </div>
    </section>
  );
};

export default About;
