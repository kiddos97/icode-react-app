import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const Navhandler = () => setNav(!nav); // setting nav to the opposite of the current value

  return (
    <div className="fixed w-full h-[80px] flex justify-between bg-[#000] items-center px-4 text-gray-300">
      {/*Logo */}
      <div>
        <img src={Logo} alt="logo" style={{ width: "180px" }} />
      </div>
      {/*Menu */}
      <ul className="hidden md:flex p-4 font-bold">
        <li>Hosting</li>
        <li>VPS</li>
        <li>Domain</li>
        <li>Pricing</li>
      </ul>
      {/*Hamburger */}
      <div onClick={Navhandler} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/*moblie menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]"
            : "fixed hidden ease-in-out duration-700"
        }
      >
        <div>
          <img src={Logo} alt="logo" style={{ width: "180px" }} />
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 font-bold border-b border-gray-600">Hosting</li>
          <li className="p-4 font-bold border-b border-gray-600">VPS</li>
          <li className="p-4 font-bold border-b border-gray-600">Domain</li>
          <li className="p-4 font-bold">Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
