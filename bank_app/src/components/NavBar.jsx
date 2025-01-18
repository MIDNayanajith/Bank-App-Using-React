import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[100px] h-[24px]" />
      <ul className="list-none flex flex-row sm:flex-row justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[5px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-5"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
