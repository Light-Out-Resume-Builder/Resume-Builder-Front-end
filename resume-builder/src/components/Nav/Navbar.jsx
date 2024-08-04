import { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import Login from '../../Pages/Login/login'; 
import Signup from '../../Pages/SignUp/signup'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()


     useEffect(() => {
       const token = localStorage.getItem("token")
       if (token) {
         setIsLoggedIn(true)
       }
     }, [])

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const openLoginModal = (e) => {
    e.preventDefault(); 
    setLoginModalIsOpen(true);
    closeNav(); 
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const openSignupModal = (e) => {
    e.preventDefault(); 
    setSignupModalIsOpen(true);
    closeNav(); 
  };

  const closeSignupModal = () => {
    setSignupModalIsOpen(false);
  };

   const handleLogout = async () => {
     const refreshToken = localStorage.getItem("refreshToken")
     try {
       const response = await fetch("/logout/", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ refresh: refreshToken }),
       })
       const data = await response.json()
       if (response.ok) {
         localStorage.removeItem("token")
         localStorage.removeItem("refreshToken")
         localStorage.removeItem("user")
         setIsLoggedIn(false)
         toast.success("Logout successful!")
         navigate("/")
       } else {
         toast.error("Logout failed: " + data.message)
       }
     } catch (error) {
       toast.error("Logout failed: " + error.message)
     }
  };
  
  return (
    <>
      <div className="flex justify-between items-center max-w-full h-24 mx-auto px-4 mt-4 text-black text-base font-[Poppins] bg-grad">
        <h1 className="w-full text-xl font-bold text-[#050505]">LIGHT-OUT.</h1>
        <ul className="hidden md:flex">
          <li className="p-4 hover:text-[#1E40AF]">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="p-4 hover:text-[#1E40AF]">
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="p-4 hover:text-[#1E40AF]">
            <Link to="/services" onClick={closeNav}>
              Services
            </Link>
          </li>
          <li className="p-4 hover:text-[#1E40AF]">
            <Link to="/template" onClick={closeNav}>
              Templates
            </Link>
          </li>
          <li className="p-4 hover:text-[#1E40AF]">
            <Link to="/dashboard" onClick={closeNav}>
              DashBoard
            </Link>
          </li>

          <div className="flex items-center justify-center gap-3">
            {isLoggedIn ? (
              <>
                <button
                  className="text-base border border-blue-400 bg-transparent text-white text-center w-[115.79px] p-1 rounded-md"
                  onClick={() => navigate("/dashboard")}
                >
                  My Account
                </button>
                <button
                  className="text-base border text-white text-center w-[115.79px] p-1 bg-[#0F74CC]  hover:bg-[#0F74CC] rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-base border border-blue-400 bg-transparent text-white text-center w-[115.79px] p-1 rounded-md"
                  onClick={openLoginModal}
                >
                  Login
                </button>
                <button
                  className="text-base border text-white text-center w-[115.79px] p-1 bg-[#0F74CC] rounded-md"
                  onClick={openSignupModal}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-[#e6ebf0] bg-[#60A5FA] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-normal font-bold text-[#050505] m-4">
            LIGHT-OUT.
          </h1>

          <li className="p-4 border-b border-gray-300">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-300">
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-300">
            <Link to="/services" onClick={closeNav}>
              Services
            </Link>
          </li>
          <li className="p-4 border-b border-gray-300">
            <Link to="/template" onClick={closeNav}>
              Templates
            </Link>
          </li>
          <li className="p-4 border-b border-gray-300">
            <Link to="/dashboard" onClick={closeNav}>
              Dashboard
            </Link>
          </li>
          <div className="flex items-center justify-center mt-4 gap-2">
            {isLoggedIn ? (
              <>
                <button
                  className="text-base border border-blue-400 bg-transparent text-white text-center w-[115.79px] p-1 rounded-md"
                  onClick={() => {
                    closeNav()
                    navigate("/dashboard")
                  }}
                >
                  My Account
                </button>
                <button
                  className="text-base border text-white text-center w-[115.79px] p-1 bg-[#0F74CC] rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-base border border-blue-700 bg-transparent text-white text-center w-[115.79px] p-1 rounded-md"
                  onClick={openLoginModal}
                >
                  Login
                </button>
                <button
                  className="text-base border border-transparent outline-none text-white text-center w-[115.79px] p-1 bg-[#0F74CC] rounded-md"
                  onClick={openSignupModal}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </ul>
        <Login modalIsOpen={loginModalIsOpen} closeModal={closeLoginModal} />
        <Signup modalIsOpen={signupModalIsOpen} closeModal={closeSignupModal} />
      </div>
    </>
  );
};

export default Navbar;
