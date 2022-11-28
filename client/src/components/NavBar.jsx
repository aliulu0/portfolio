/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => setShowNav(!showNav);
  return (
    <div className="w-full h-[140px] flex justify-center items-center ">
      <div className="sm:flex-row-reverse md:flex-row flex items-center justify-between w-[70%] h-full">
        <h1 className="cursor-pointer">
          <Link to="home" smooth={true} duration={800}>
            ALIULU
          </Link>
        </h1>

        {/* Menu */}
        <ul className="navbar-list hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={800}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={800}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={800}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}

        <div onClick={handleNavClick} className="md:hidden z-10">
          <FaBars />
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !showNav
              ? "navbar-options"
              : "navbar-options show-hamburger-options"
          }
        >
          <div className="navbar-options show-hamburger-options">
            <div className="navbar-options show-hamburger-options">
              <FaTimes
                onClick={handleNavClick}
                className="absolute top-10 right-10  "
              />
              <span className="mobile-navbar-list text-3xl">
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  onClick={handleNavClick}
                >
                  Home
                </Link>
              </span>
              <span className="mobile-navbar-list text-3xl">
                <Link to="about" smooth={true} duration={800} onClick={handleNavClick}>
                  About
                </Link>
              </span>
              <span className="mobile-navbar-list text-3xl">
                <Link to="skills" smooth={true} duration={800} onClick={handleNavClick}>
                  Skills
                </Link>
              </span>
              <span className="mobile-navbar-list text-3xl">
                <Link to="projects" smooth={true} duration={800} onClick={handleNavClick}>
                  Projects
                </Link>
              </span>
              <span className="mobile-navbar-list text-3xl">
                <Link to="contact" smooth={true} duration={800} onClick={handleNavClick}>
                  Contact
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
