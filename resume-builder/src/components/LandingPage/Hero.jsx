import Button from "../Button/button"
import HeroImg from "../../assets/images/heroImg.png"

const Hero = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-32 py-5 mt-4 w-full max-md:px-6 max-md:max-w-full">
      <div className="mt-3 w-full max-w-[full] max-md:mt-3 max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-col">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col flex-wrap content-start max-md:mt-4 max-md:max-w-full">
              <div className="shrink-0 w-11 h-11 bg-blue-800 rounded-[58px]" />
              <h1 className="mt-3.5 text-5xl font-bold tracking-wide font-[Poppins] max-md:max-w-full max-md:text-4xl">
                Create a <span className="text-blue-800">resume</span> <br />{" "}
                that secures your{" "}
                <span className="text-blue-800">dream job</span>
              </h1>
              <p className="mt-3.5 text-xl tracking-normal leading-7 text-black max-md:max-w-full">
                Build a resume thats piques the interest of recruiters and{" "}
                <br /> gets you hired. {"It's"} fast and easy to use.
              </p>
              <div className="flex gap-5 justify-between mt-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <Button
                  text="Create Template"
                  variant="self-start w-[200px] text-center px-7 py-3 text-lg font-semibold leading-6 text-white bg-blue-800 max-md:px-5"
                  url="/templates"
                />

                <div className="flex flex-col">
                  <div className="shrink-0 bg-blue-800 h-[49px]" />
                  <div className="shrink-0 ml-4 border-2 border-blue-800 border-dashed h-[49px] w-[53px] max-md:ml-2.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-end px-16 pt-10 pb-5 max-md:px-5 max-md:mt-10">
              <img
                src={HeroImg}
                alt="Resume preview"
                className="w-[360px] h-auto max-md:hidden mr-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
