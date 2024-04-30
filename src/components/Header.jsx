import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zomato_logo } from '../Constant';
import useOnlineStatus from '../Utils/useOnlineStatus ';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between gap-3 shadow-lg m-2 mb-2 h-16">
      <div className="logo-container">
        <img className="absolute left-[70px] top-2 items-center h-[50px] w-[100px] bg-current" alt='' src={Zomato_logo}></img>
      </div>
      <div className="flex items-center">
        <button className="sm:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="sm:hidden absolute top-16 right-0 font-bold flex flex-col p-8 m-10 text-lg bg-white shadow-md rounded-md">
          <li className="px-4">Online Status: {useOnlineStatus ? "✅" : "🔴"}</li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200"><Link to="/">Home</Link></li>
          
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200"><Link to="/about">About</Link></li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Skills</li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Education</li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Work</li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Experience</li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">Contact</li>
          </ul>
        )}
        <ul className={`sm:flex hidden font-bold flex p-8 m-10 text-lg`}>
        <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/">Home</Link></li>
         
          <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/about">About</Link></li>
          <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/contact">Contact</Link></li>
          <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800">Grocery</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
