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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/template" element={<Template />}>
          <Route index element={<Resume />} />
          <Route path="/template/resume" element={<Resume />} />
          <Route path="/template/coverletter" element={<CoverlLetter />} />
        </Route>
        <Route path="/create-cover-letter" element={<CoverLetterDash />}>
          {/* <Route index element={<CoverLetter />} /> */}
          <Route
            path="/create-cover-letter/cover-letter"
            element={<CoverLetter />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
