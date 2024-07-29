import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Portfolio from '/src/assets/images/portfolio.png';
import Google from '/src/assets/images/Google.png';

Modal.setAppElement('#root');

const Login = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      className=" p-8 rounded-lg shadow-lg mx-4 md:mx-auto my-auto w-full max-w-4xl bg-[#BFDBFE]"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
    >
      <button
        className="absolute top-2 right-2 size-20 text-gray-700 hover:text-gray-900"
        onClick={closeModal}
      >
        &times;
      </button>
      <div className="flex flex-col md:flex-row gap-6 bg-[#BFDBFE]">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-bold mb-6">
            Creating Perfect <br /> Resume Made Easy
          </h2>
          <img src={Portfolio} alt="Portfolio" className="w-full h-auto hidden md:block lg:block" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold">Welcome Back!</h2>
          <form>
            <div className="mb-4 mt-8">
              <label htmlFor="email" className="block text-lg md:text-xl font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="mt-1 block w-full px-3 py-2 border border-blue-700 rounded-md bg-transparent text-lg md:text-xl placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg md:text-xl font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-3 py-2 border border-blue-700 rounded-md bg-transparent text-lg md:text-xl placeholder-gray-500"
              />
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-700 font-bold">Forgot Password?</p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 px-3 py-2 rounded-md mt-6"
            >
              Sign In
            </button>
            <div className="mt-6 text-center font-medium"><p>Or</p></div>
            <button
              type="button"
              className="w-full text-white bg-blue-700 px-3 py-2 rounded-md mt-6 flex items-center justify-center gap-2"
            >
              <img src={Google} alt="Google" className="w-4" /> Sign In With Google
            </button>
            <div className="text-center mt-6">
              <p>{"Don't"} have an account? <span className="text-blue-700 font-bold cursor-pointer">Sign Up</span></p>
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
