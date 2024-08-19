import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Portfolio from "/src/assets/images/portfolio.png";
import Google from "/src/assets/images/Google.png";

Modal.setAppElement("#root");

const Signup = ({ modalIsOpen, closeModal, onClick }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://resume-builder-backend-wvco.onrender.com/register",
        {
          method: "POST",
          body: JSON.stringify({ fullname: fullName, email, password }),
          headers: { "Content-Type": "application/json" },
        });
        
      if (response.status === 200) {
        alert("Registration Successfull");
      } else {
        alert("Registration Failed. Try again later");
      }

      // const data = await response.json();

      // if (response.ok) {
      //   toast.success("User created successfully");
      //   closeModal();
      //   navigate("/login");
      // } else {
      //   toast.error("Signup failed: " + data.message);
      // }
    } catch (error) {
      toast.error("Signup failed: " + error.message);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Signup Modal"
      className="p-8 rounded-lg shadow-lg mx-4 md:mx-auto my-auto w-full max-w-4xl bg-[#BFDBFE]"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
    >
      <button
        className="absolute top-2 right-8 lg:right-64 text-black-700 hover:text-gray-900"
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
            className="w-full h-auto hidden md:block lg:block "
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Sign Up To Light-Out
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-8">
              <label
                htmlFor="full-name"
                className="block text-lg md:text-xl font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="fullname"
                placeholder="Enter Full Name"
                className="mt-1 block w-full px-3 py-2 border border-blue-700 rounded-md bg-transparent text-lg md:text-xl placeholder-gray-500"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg md:text-xl font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
            <div className="flex items-center">
              <input type="checkbox" className="w-5 h-5" />
              <p className="ml-2 text-sm font-medium">
                I agree to the Terms and Conditions and Privacy Policy
              </p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 px-3 py-2 rounded-md mt-6"
            >
              Sign Up
            </button>
            <div className="mt-6 text-center font-medium">
              <p>Or</p>
            </div>
            <button
              type="button"
              className="w-full text-white bg-blue-700 px-3 py-2 rounded-md mt-6 flex items-center justify-center gap-2"
            >
              <img src={Google} alt="Google" className="w-4" /> Sign Up With
              Google
            </button>
            <div className="text-center mt-6">
              <p>
                Already have an account?{" "}
                <span
                  className="text-blue-700 font-bold cursor-pointer"
                  onClick={onClick}
                >
                  Sign In
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

Signup.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Signup;
