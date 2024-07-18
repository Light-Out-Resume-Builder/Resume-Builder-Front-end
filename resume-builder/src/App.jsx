import Header from "./components/Nav/Navbar.jsx"
import Home from "./Pages/Home/home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import About from "./Pages/About/about.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Template from "./Pages/Template/Template.jsx";
import Resume from "./Pages/Template/Resume.jsx";
import CoverlLetter from "./Pages/Template/CoverlLetter.jsx";


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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
