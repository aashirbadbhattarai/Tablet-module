import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="flex flex-col bg-[#989696] h-screen w-1/6 fixed top-0 left-0">
      <div className="imglogo">
        <img src={logo} alt="Logo" className="m-2 pt-2 pl-2 w-24" />
      </div>
      <div className="flex flex-col justify-evenly navbar-contents px-4 mt-8">
        <ul className="space-y-5">
          <li >
            <NavLink
              to="/table-list"
              className={({ isActive }) =>
                (isActive ? 'bg-white text-black rounded-tl-[30px] rounded-bl-[30px]' : 'bg-black text-white rounded-tl-[30px] rounded-bl-[30px]') + ' block px-5 py-3 transition-colors duration-300 ease-in-out '
              }
            >
              Table List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-status"
              className={({ isActive }) =>
                (isActive ? 'bg-white text-black rounded-tl-[30px] rounded-bl-[30px]' : 'bg-black text-white rounded-tl-[30px] rounded-bl-[30px]') + ' block px-5 py-3 transition-colors duration-300 ease-in-out'
              }
            >
              User Status
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order-status"
              className={({ isActive }) =>
                (isActive ? 'bg-white text-black rounded-tl-[30px] rounded-bl-[30px]' : 'bg-black text-white rounded-tl-[30px] rounded-bl-[30px]') + ' block px-5 py-3 transition-colors duration-300 ease-in-out'
              }
            >
              Order Status
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
