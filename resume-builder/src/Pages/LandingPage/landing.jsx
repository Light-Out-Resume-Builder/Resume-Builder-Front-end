import Hero from "../../components/LandingPage/Hero"
import Steps from "../../components/LandingPage/Steps"
import Services from "../../components/LandingPage/Services"
import About from "../../components/LandingPage/About"
import Benefits from "../../components/LandingPage/Benefits"
import Testimonials from "../../components/LandingPage/Testimonials"

const landing = () => {
  return (
    <div className="">
      <Hero />
      <Steps />
      <Services />
      <About />
      <Benefits />
      <Testimonials />
    </div>
  )
}

export default landing
