import Button from "../../components/Button/button"
import HomeImg from "../../assets/images/home-img.png"
import Block1 from "../../assets/images/block1.png"
import Block2 from "../../assets/images/block2.png"
import Step1 from "../../assets/images/step1.png"
import Step2 from "../../assets/images/step2.png"
import Step3 from "../../assets/images/step3.png"
import Step4 from "../../assets/images/step4.png"
import Resume from "../../assets/images/resume-stack.png"
import AboutImg from "../../assets/images/read-more.png"
import Ben1 from "../../assets/images/benefit1.png"
import Ben2 from "../../assets/images/benefit2.png"
import Ben3 from "../../assets/images/benefit3.png"
import Ben4 from "../../assets/images/benefit4.png"
import Ben5 from "../../assets/images/benefit5.png"
import Ben6 from "../../assets/images/benefit6.png"

const home = () => {
  return (
    <>
      <div className="md:mt-14 md:px-20 px-10 md:flex-row flex bg-gradient-to-t from-[#DBEAFE] to-[#60A5FA] border-none">
        <div className="mt-7 md:mt-14">
          <div className="rounded-full w-8 h-8 bg-[#1E40AF] mb-6 "></div>
          <h1 className="md:text-6xl lg:text-6xl text-3xl font-bold font-[Poppins] ">
            Create a <span className="text-[#1E40AF]">resume</span> that <br />
            secures your <span className="text-[#1E40AF]">dream job</span>
          </h1>
          <p className="md:text-xl mt-5 ">
            Build a resume thats piques the interest of recruiters and <br />{" "}
            gets you hired. It’s fast and easy to use.
          </p>

          <div className=" mt-10 mb-4 ">
            <Button
              text="Create Template"
              variant="text-base text-white text-center md:w-[200px] lg:w-[200px] md:px-5 md:py-3 px:3 py-2 flex items-center justify-center "
              url="/templates"
            />
            {/* <div className="rounded-none w-8 h-8 bg-[#1E40AF] "></div> */}
          </div>
        </div>
        <div className="mt-80 z-10">
          <img src={Block1} alt="" className="" />
        </div>

        <div className="">
          <img
            src={HomeImg}
            alt=""
            className="hidden md:flex md:w-[380px] md:h-[380px] md:ml-32"
          />
        </div>
      </div>
      <section className="mt-7 md:mt-14 md:px-20 px-10 font-[Poppins] ">
        <div className="">
          <h1 className="md:text-4xl lg:text-4xl text-base font-bold text-center">
            Build your <span className="text-[#1E40AF]"> resume </span>in 4
            steps
          </h1>
          <div className="md:flex block pt-8 md:pt-1">
            <img
              src={Step1}
              alt=""
              className="md:size-60 size-32 flex justify-center "
            />
            <h1 className="text-[#1E40AF] text-bold text-2xl md:text-6xl md:ml-6 md:pt-16">
              1.
            </h1>
            <div className="md:ml-4 md:pt-16">
              <h1 className="text-[#1E40AF] text-bold md:text-2xl text-xl">
                Pick a Template
              </h1>
              <p className="text-xs md:text-base">
                select our template from a range of field tested styles and
                formats
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:pt-1 justify-end ">
            <img
              src={Step2}
              alt=""
              className="md:size-60 size-32 flex justify-center "
            />
            <h1 className="text-[#1E40AF] text-bold text-2xl md:text-6xl md:ml-6 md:pt-16">
              2.
            </h1>
            <div className="md:ml-4 md:pt-16">
              <h1 className="text-[#1E40AF] text-bold md:text-2xl text-xl">
                Add Your Information{" "}
              </h1>
              <p className="text-xs md:text-base">
                fill in the blanks, use our pre-written phrases and interactive
                layout to <br /> create a winning resume/cover letter
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:pt-1 ">
            <img
              src={Step3}
              alt=""
              className="md:size-60 size-32 flex justify-center "
            />
            <h1 className="text-[#1E40AF] text-bold text-2xl md:text-6xl md:ml-6 md:pt-16">
              3.
            </h1>
            <div className="md:ml-4 md:pt-16">
              <h1 className="text-[#1E40AF] text-bold md:text-2xl text-xl">
                Customise Your Layouts
              </h1>
              <p className="text-xs md:text-base">
                Give your document a professional and elegant look.
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:pt-1 justify-end ">
            <img
              src={Step4}
              alt=""
              className="md:size-60 size-32 flex justify-center "
            />
            <h1 className="text-[#1E40AF] text-bold text-2xl md:text-6xl md:ml-6 md:pt-16">
              4.
            </h1>
            <div className="md:ml-4 md:pt-16">
              <h1 className="text-[#1E40AF] text-bold md:text-2xl text-xl">
                Hit Download!
              </h1>
              <p className="text-xs md:text-base">
                Download your resume, apply, get more interviews.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-row-reverse md:flex md:flex-row justify-between md:px-20 px-10 md:mt-14 bg-gradient-to-t from-[#DBEAFE] to-[#60A5FA] font-[Poppins] ">
        <div className="mt-7 pt-4 md:mt-14">
          <h1 className="text-lg md:text-5xl font-bold flex md:block justify-center">
            Our Services
          </h1>
          <p className="mt-4 text-xs md:text-lg px-0 ">
            Choose from one of our expertly <br /> prepared resume types below,
            by using <br /> pre-established parts that have been <br /> endorsed
            by recruiters internationally,
            <br /> you can begin creating your resume in
            <br /> under 5 seconds, additionally, you can <br /> edit to fit
            your preferences and <br /> personality before clicking {"Download"}
            .
            <br />
            Even if you have never created a <br /> resume before, it is that
            SIMPLE to use!
          </p>
        </div>
        <div className="mt-7 md:mt-14">
          <img src={Resume} alt="" className="" />
        </div>
      </section>
      <section className="md:px-20 px-10 font-[Poppins] ">
        <h1 className="md:text-4xl lg:text-4xl text-lg font-bold mt-7 md:mt-14 text-center">
          About <span className="text-[#1E40AF]">Light-out</span> Resume
        </h1>
        <div className="md:flex-row md:flex justify-evenly space-x-0">
          <div className="mt-7 md:mt-14">
            <img src={AboutImg} alt="" />
          </div>
          <div className="mt-7 md:mt-14">
            <p className="mt-4 text-xs md:text-lg px-0 md:w-[500px]">
              Light-out Resume is a product of Future Labs — a global innovation
              & digital skill learning center. Light-out Resume was born of the
              need to create a new way for job-seekers to connect with
              recruiters. Hence, our best hands got to work with one thing in
              mind: to help you find a great job faster. We went even further to
              ensure that our Template designs meet Industry Standards and
              accepted by leading HR departments. With us, you can spin out an
              impressive resume that makes a memorable first impression!
            </p>

            <div className=" mt-10 mb-4 ">
              <Button
                text="Read More"
                variant="text-base text-white text-center md:w-[200px] lg:w-[200px] md:px-5 md:py-3 px:3 py-2 flex items-center justify-center "
                url="/"
              />
            </div>
          </div>
        </div>
        <div className="md:flex hidden">
          <img src={Block2} alt="" />
        </div>
      </section>
      <section className=" md:px-20 px-10 md:mt-14 bg-gradient-to-t from-[#DBEAFE] to-[#60A5FA] font-[Poppins]">
        <h1 className="text-base pt-5 md:text-4xl font-bold flex md:block text-center">
          Benefits of using our product
        </h1>
        <p className="text-xs pt-5 md:text-lg font-bold flex justify-center text-[#1E40AF]">
          Why Choose Us?
        </p>
        <div className="md:flex justify-center md:mr-32 pt-4 hidden">
          <img src={Block2} alt="" className="" />
        </div>
        <div className="md:grid md:grid-cols-3 gap-6 ">
          <div className="md:flex content-center block pt-8 md:mt-5">
            <div className="justify-center">
              <img
                src={Ben1}
                alt=""
                className="md:size-32 size-32 flex content-center"
              />
            </div>

            <div className="md:ml-7 text-center ">
              <h1 className=" font-bold md:text-2xl text-xl">Easy to Use</h1>
              <p className="md:w-[180px] text-xs md:text-sm">
                The process of writing a resume is substantially sped up and
                simplified by using our resume builder.
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:mt-5">
            <img
              src={Ben2}
              alt=""
              className="md:size-32 size-40 flex items-center"
            />
            <div className="md:ml-7 text-center">
              <h1 className="font-bold md:text-2xl text-xl">Secure</h1>
              <p className="md:w-[180px] text-xs md:text-sm">
                We respect your privacy & give you control over your content and
                your data with us..
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:mt-5">
            <img
              src={Ben3}
              alt=""
              className="md:size-32 size-40 flex items-center"
            />
            <div className="md:ml-7 text-center">
              <h1 className="font-bold md:text-2xl text-xl">Cool Templates</h1>
              <p className="md:w-[180px] text-xs md:text-sm">
                Our template designs help your resume standout in a pool of
                others.
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:mt-5">
            <img
              src={Ben4}
              alt=""
              className="md:size-32 size-40 flex items-center"
            />
            <div className="md:ml-7 text-center">
              <h1 className="font-bold  md:text-2xl text-xl">
                Intelligent Designs
              </h1>
              <p className="md:w-[270px] text-xs md:text-sm">
                With us, you{" won't"} have to bother about the minute details
                of resume development, such as font choice, layout, etc.
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:mt-5">
            <img
              src={Ben5}
              alt=""
              className="md:size-32 size-40 flex items-center"
            />
            <div className="md:ml-7 text-center">
              <h1 className="font-bold md:text-2xl text-xl">
                HR-Approved and ATS Friendly
              </h1>
              <p className="md:w-[250px] text-xs md:text-sm">
                The core design of our resume templates are HR-Approved &
                accepted by leading organizations.
              </p>
            </div>
          </div>

          <div className="md:flex block pt-8 md:mt-5">
            <img
              src={Ben6}
              alt=""
              className="md:size-32 size-40 flex items-center"
            />
            <div className="md:ml-7 text-center">
              <h1 className="font-bold md:text-2xl text-xl">
                No Hidden Charges
              </h1>
              <p className="md:w-[250px] text-xs md:text-sm">
                We’ve got a free version and our premium pricing is clear. We
                notify you about any new changes in good time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default home
