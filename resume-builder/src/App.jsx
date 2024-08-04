import Header from "./components/Nav/Navbar.jsx";
// import Home from "./Pages/Home/home.jsx";
// import CoverLetterDash from "./Pages/CoverLetter/CoverLetterDash.jsx";
// import CoverLetter from "./Pages/CoverLetter/CoverLetter.jsx";
import LandingPage from "./Pages/LandingPage/landing.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services/services.jsx";
import About from "./Pages/About/about.jsx";
import Template from "./Pages/Template/Template.jsx";
import Resume from "./Pages/Template/Resume.jsx";
import CoverlLetter from "./Pages/Template/CoverlLetter.jsx";
import Login from "./Pages/Login/login.jsx";
import SignUp from "./Pages/SignUp/signup.jsx";
import DashBoard from "./Pages/DashBoard/DashBoard.jsx";
import CoverLetter from "./Pages/DashBoard/CoverLetter.jsx";
import Dash from "./Pages/DashBoard/Dash.jsx";
import DashResume from "./Pages/DashBoard/DashResume.jsx";
import CoverLetterBuilder from "./Pages/DashBoard/CoverLetterBuilder.jsx";
import CoverLetterBuilderB from "./Pages/DashBoard/CoverLetterBuilderB.jsx";
import CoverLetterBuilderC from "./Pages/DashBoard/CoverLetterBuilderC.jsx";

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
        <Route path="/dashboard" element={<Dash />}>
          <Route index element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/resume" element={<DashResume />} />
          <Route>
            <Route
              path="/dashboard/CoverLetterDash"
              element={<CoverLetter />}
            />
            <Route
              path="/dashboard/CoverLetterDash/a"
              element={<CoverLetterBuilder />}
            />
            <Route
              path="/dashboard/CoverLetterDash/b"
              element={<CoverLetterBuilderB />}
            />
            <Route
              path="/dashboard/CoverLetterDash/c"
              element={<CoverLetterBuilderC />}
            />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
