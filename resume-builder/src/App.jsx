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
import EditResume from "./Pages/EditResume/editresume.jsx"
import CreateResume from "./Pages/CreateResume/createresume.jsx"

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
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        <Route path="/editresume" element={<EditResume />} />
        <Route path="/createresume" element={<CreateResume />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
