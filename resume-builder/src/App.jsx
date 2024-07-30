
import Header from "./components/Nav/Navbar.jsx";
import Home from "./Pages/Home/home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./Pages/About/about.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "./Pages/Template/Template.jsx";
import Resume from "./Pages/Template/Resume.jsx";
import CoverlLetter from "./Pages/Template/CoverlLetter.jsx";
import CoverLetterDash from "./Pages/CoverLetter/CoverLetterDash.jsx";
import CoverLetter from "./Pages/CoverLetter/CoverLetter.jsx";
import Header from "./components/Nav/Navbar.jsx"
// import Home from "./Pages/Home/home.jsx"
import LandingPage from "./Pages/LandingPage/landing.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from "./Pages/Services/services.jsx"
import About from "./Pages/About/about.jsx"
import Template from "./Pages/Template/Template.jsx"
import Resume from "./Pages/Template/Resume.jsx"
import CoverlLetter from "./Pages/Template/CoverlLetter.jsx"
import Login from "./Pages/Login/login.jsx"
import SignUp from "./Pages/SignUp/signup.jsx"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/template" element={<Template />}>
          <Route index element={<Resume />} />
          <Route path="/template/resume" element={<Resume />} />
          <Route path="/template/coverletter" element={<CoverlLetter />} />
        </Route>
<<<<<<< HEAD
        <Route path="/create-cover-letter" element={<CoverLetterDash />}>
          {/* <Route index element={<CoverLetter />} /> */}
          <Route
            path="/create-cover-letter/cover-letter"
            element={<CoverLetter />}
          />
        </Route>
=======
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
>>>>>>> c51a92cd51aac6b4465fe10535f47a877b9a9e97
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
