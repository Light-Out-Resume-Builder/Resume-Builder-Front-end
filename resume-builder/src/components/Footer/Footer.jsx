import { IoLogoFacebook } from "react-icons/io5"
import { RiTwitterXLine } from "react-icons/ri"
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white px-8 py-12 font-[Quicksand]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-blue-400 text-2xl font-bold mb-2">LIGHT - OUT</h1>
          <p>Create your resume in a minute, get your <br /> dream job in a blink.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <IoLogoFacebook className="w-6 h-6" />
            </a>
            <a href="#">
              <RiTwitterXLine className="w-6 h-6" />
            </a>
            <a href="#">
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a href="#">
              <IoLogoLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Terms & Policies</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Template
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p>(+234) **********</p>
          <p>Light-out@gmail.com</p>
        </div>
      </div>
      <div className="text-center border-t border-gray-800 pt-4 mt-8">
        <p>&copy; 2024 Light-out Resume Builder. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
