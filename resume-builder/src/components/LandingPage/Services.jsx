import Resume from "../../assets/images/resume-stack.png"

const Services = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-evenly md:px-20 px-5 md:mt-14 mt-7 font-[Poppins]">
      <div className="flex-1 md:mt-14 mt-7 pt-4">
        <h1 className="text-center md:text-left text-xl md:text-5xl font-bold">
          Our Services
        </h1>
        <p className="mt-4 text-center md:text-left text-xs md:text-lg leading-relaxed">
          Choose from one of our expertly prepared resume types below. By using
          pre-established parts that have been endorsed by recruiters
          internationally, you can begin creating your resume in under 5
          seconds. Additionally, you can edit to fit your preferences and
          personality before clicking &quot;{"Download"}&quot;!. Even if you have never created
          a resume before, it is that SIMPLE to use!
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center md:mt-14 mt-7">
        <img
          src={Resume}
          alt="Resume"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  )
}

export default Services
