import Header from "./components/Nav/Navbar.jsx"
import Home from "./Pages/Home/home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import About from "./Pages/About/about.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Template from "./Pages/Template/Template.jsx";
import Resume from "./Pages/Template/Resume.jsx";
import CoverlLetter from "./Pages/Template/CoverlLetter.jsx";
import Services from "./Pages/Services/services.jsx";
import Login from "./Pages/Login/login.jsx";
import SignUp from "./Pages/SignUp/signup.jsx";
import EditResume from "./Pages/EditResume/editresume.jsx";
import CreateResume from "./Pages/CreateResume/createresume.jsx"

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
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />  
        <Route path="/editresume" element={<EditResume />} />
        <Route path="/createresume" element={<CreateResume />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
