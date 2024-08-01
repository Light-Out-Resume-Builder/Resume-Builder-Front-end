import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Nav/Navbar.jsx"
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
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // toastClassName="bg-blue-500 text-white font-semibold rounded-lg shadow-lg p-4 mb-4"
        // bodyClassName={() => "text-sm"}
      />
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
