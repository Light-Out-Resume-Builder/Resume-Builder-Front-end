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
import EditResume from "./Pages/EditResume/editresume.jsx"
import CreateResume from "./Pages/CreateResume/createresume.jsx"
import Dashboard from "./Pages/DashBoard/Dashboard.jsx";
// import DashboardNav from "./components/Dashboard/DashboardNav.jsx";
import UserResume from "./Pages/DashBoard/UserResume.jsx";
// import DashboardLayout from "./components/Dashboard/DashboardLayout.jsx";
import UserCoverLetter from "./Pages/DashBoard/UserCoverLetter.jsx";


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
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/resume" element={<UserResume />} />
          <Route path="/dashboard/cover-letter" element={<UserCoverLetter />} />
        <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
        <Route path="/editresume" element={<EditResume />} />
        <Route path="/createresume" element={<CreateResume />} />

        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
