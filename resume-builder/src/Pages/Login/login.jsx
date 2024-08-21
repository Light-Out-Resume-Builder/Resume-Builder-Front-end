import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSpinner } from "react-icons/fa6"
import Portfolio from '/src/assets/images/portfolio.png';
import Google from '/src/assets/images/Google.png';

Modal.setAppElement('#root');


const Login = ({ modalIsOpen, closeModal, onClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {

      const response = await fetch(
        "https://resume-builder-backend-wvco.onrender.com/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      )

      const data = await response.json();

      if (response.ok) {
        console.log(data)
        localStorage.setItem("token", data.token.access)
        localStorage.setItem("refreshToken", data.token.refresh)
        localStorage.setItem("user", JSON.stringify(data.user))
        toast.success('Login successful!') 
         window.location.reload()
         closeModal()
          setLoading(false)
         navigate("/dashboard")

      } else {
        toast.error("Login failed: " + data.message);
      }
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
     setLoading(false)
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      className=" p-8 rounded-lg shadow-lg mx-4 md:mx-auto my-auto w-full max-w-4xl bg-[#BFDBFE]"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
    >
      <button
        className="absolute -top-2 right-2 lg:right-60 size-20 text-black-700 hover:text-gray-900"
        onClick={closeModal}
      >
        &times;
      </button>
      <div className="flex flex-col md:flex-row gap-6 bg-[#BFDBFE]">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-bold mb-6">
            Creating Perfect <br /> Resume Made Easy
          </h2>
          <img
            src={Portfolio}
            alt="Portfolio"
            className="w-full h-auto hidden md:block lg:block"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold">Welcome Back!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-8">
              <label
                htmlFor="email"
                className="block text-lg md:text-xl font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="mt-1 block w-full px-3 py-2 border border-blue-700 rounded-md bg-transparent text-lg md:text-xl placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg md:text-xl font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-3 py-2 border border-blue-700 rounded-md bg-transparent text-lg md:text-xl placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-700 font-bold">
                Forgot Password?
              </p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full text-white bg-blue-700 px-3 py-2 rounded-md mt-6"
              >
                {loading ? <FaSpinner className="animate-spin" /> : "Sign In"} 
              </button>
            </div>
            <div className="mt-6 text-center font-medium">
              <p>Or</p>
            </div>
            <button
              type="button"
              className="w-full text-white bg-blue-700 px-3 py-2 rounded-md mt-6 flex items-center justify-center gap-2"
            >
              <img src={Google} alt="Google" className="w-4" /> Sign In With
              Google
            </button>
            <div className="text-center mt-6">
              <p>
                {"Don't"} have an account?{" "}
                <span className="text-blue-700 font-bold cursor-pointer" >
                 Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

Login.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired, 
  closeModal: PropTypes.func.isRequired, 
};

export default Login;
