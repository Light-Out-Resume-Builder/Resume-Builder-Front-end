import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import Button from "../Button/button"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between  items-center max-w-full h-24 mx-auto px-4 mt-4 text-black text-base font-[Poppins] bg-grad">
      <h1 className="w-full text-xl font-bold text-[#050505]">LIGHT-OUT.</h1>
      <ul className="hidden md:flex">

        <li className="p-4 hover:text-[#1E40AF]">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-[#1E40AF]">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 hover:text-[#1E40AF]">
          <Link to="/service">Services</Link>
        </li>
        <li className="p-4 hover:text-[#1E40AF]">
          <Link to="/template">Templates</Link>
        </li>
        
        {/*<li className="p-4 hover:text-[#1E40AF]">Home</li>
        <li className="p-4 hover:text-[#1E40AF]">About</li>
        <Link to={'/services'}>
        <li className="p-4 hover:text-[#1E40AF]">Services</li>
        </Link>
        <li className="p-4 hover:text-[#1E40AF]">Templates</li>*/}

        <div className="flex items-center justify-center gap-3">
          <Button
            text="Login"
            variant="text-base border border-blue-400 bg-transparent text-white text-center w-[115.79px] p-1 "
            url="/login"
          />
          <Button
            text="Sign Up"
            variant="text-base border text-white text-center w-[115.79px] p-1 "
            url="/signup"
          />
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
        
        <li className="p-4 border-b border-gray-300">Home</li>
        <li className="p-4 border-b border-gray-300">About</li>
        <Link to={'/services'}>
        <li className="p-4 border-b border-gray-300">Services</li>
        </Link>
        <li className="p-4 border-b border-gray-300">Templates</li>
        <div className="flex items-center justify-center mt-4 gap-2">
          <Button
            text="Login"
            variant="text-base border border-blue-700 bg-transparent text-white text-center w-[115.79px] p-1 "
            url="/login"
          />
          <Button
            text="Sign Up"
            variant="text-base border border-transparent outline-none text-white text-center w-[115.79px] p-1 "
            url="/signup"
          />
        </div>
      </ul>
    </div>
  );
}

export default Navbar
