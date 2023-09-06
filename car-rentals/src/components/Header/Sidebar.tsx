import { HiOutlineHome } from "react-icons/hi";
// import { BsPeople } from "react-icons/bs";
// import { PiHandshakeLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

interface Sidebarprops {
  togglesidebar: () => void;
  sidebaropen: boolean;
}

const Sidebar: React.FC<Sidebarprops> = ({ togglesidebar, sidebaropen }) => {
  return (
    <div
      className={`flex flex-col gap-5 p-4 justify-start fixed top-0  left-0
     min-w-[30vw] min-h-screen  shadow-md rounded-r-md
     bg-[rgba(255,255,255,0.8)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
      backdrop-blur-[12px] -webkit-backdrop-blur-[12px] z-50
      transition-transform transition-delay-300  
      ${
        sidebaropen
          ? " transform translate-x-0"
          : " transform -translate-x-full"
      } 
      `}
    >
      <div
        onClick={() => togglesidebar}
        className="flex flex-row justify-end  "
      >
        <AiOutlineClose size={20} />
      </div>
      <div className="flex flex-row justify-start items-center gap-3 p-2">
        <HiOutlineHome />
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      {/* <div className="flex flex-row justify-start items-center gap-3 p-2">
        <BsPeople />
        <div>
          <Link to="/about">About Us</Link>
        </div>
      </div> */}
      {/* <div className="flex flex-row justify-start items-center gap-3 p-2">
        <PiHandshakeLight />
        <div>
          <Link to="/services">Our Services</Link>
        </div>
      </div> */}
      <div className="flex flex-row justify-start items-center gap-3 p-2">
        <IoCarSportOutline />
        <div>
          <Link to="/fleets">Our Fleets</Link>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-3 p-2">
        <AiOutlineContacts />
        <div>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
