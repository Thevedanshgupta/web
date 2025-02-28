import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // State for menu visibility
  const [isMenuHidden, setMenuHidden] = useState(true);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuHidden(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-[#F0EAE6]">
        <NavLink to="/" className="text-3xl leading-none" activeClassName="text-blue-500">
          Imagex
        </NavLink>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-black-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${
            isMenuHidden ? 'hidden' : ''
          }`}
        >
          <li className="mb-1">
            <NavLink
              to="/shop-all"
              className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black-600 rounded"
              activeClassName="text-blue-500"
            >
              SHOP ALL
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <NavLink
              to="/our-story"
              className="text-md text-gray-400 hover:text-gray-500"
              activeClassName="text-blue-500"
            >
              OUR STORY
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <NavLink
              to="/blog"
              className="text-md text-gray-400 hover:text-gray-500"
              activeClassName="text-blue-500"
            >
              BLOG
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <NavLink
              to="/help"
              className="text-md text-gray-400 hover:text-gray-500"
              activeClassName="text-blue-500"
            >
              HELP
            </NavLink>
          </li>
          <li className="text-gray-300"></li>
        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="#">
          <img
            className="h-10"
            src="https://i.postimg.cc/brd2VM8J/6-removebg-preview.png"
            alt=""
          />
        </a>
        <a className="hidden lg:inline-block py-2 text-center px-3 mr-6 bg-[#F0EAE6] text-md text-black-600 rounded-xl transition duration-200 hover:bg-gray-300" href="#">
          Login
        </a>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuHidden ? 'hidden' : ''}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#F0EAE6] border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <NavLink to="/" className="mr-auto text-3xl leading-none" activeClassName="text-blue-500">
              Imagex
            </NavLink>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  to="/shop-all"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black-600 rounded"
                  activeClassName="text-blue-500"
                >
                  SHOP ALL
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/our-story"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black-600 rounded"
                  activeClassName="text-blue-500"
                >
                  OUR STORY
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/blog"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black-600 rounded"
                  activeClassName="text-blue-500"
                >
                  BLOG
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/help"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black-600 rounded"
                  activeClassName="text-blue-500"
                >
                  HELP
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-gray-400 hover:text-gray-500 font-semibold bg-[#F0EAE6] hover:bg-[#ecdfd6] rounded-xl" href="#">
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
