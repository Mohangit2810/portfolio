import { useState } from "react";
import { NavLink } from "react-router-dom";

function AppNav() {
  const [color, setColor] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav
        id="navScroll"
        className={
          color
            ? "fixed top-0 left-0 w-full bg-[#2C00557d] z-[100] backdrop-filter backdrop-blur-lg"
            : "fixed top-0 left-0 w-full bg-transparent z-[100]"
        }
        tabIndex="0"
      >
        <div className="flex items-center justify-between mx-12 lg:mx-0 lg:justify-around py-6">
          <span className="text-white text-bold uppercase">MohanRaji</span>
          <ul className="hidden lg:flex items-center gap-12">
            <a href="#homepage">
              <li className="text-white text-lg ">Home</li>
            </a>
            <a href="#about_me">
              <li className="text-white text-lg ">About</li>
            </a>
            <a href="#experience">
              <li className="text-white text-lg ">Experience</li>
            </a>
            <a href="#projects">
              <li className="text-white text-lg ">Projects</li>
            </a>
          </ul>
          <NavLink className="hidden lg:block" to="/contact">
            <span className="text-white text-bold ">Contact</span>
          </NavLink>
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={
          sideBarOpen
            ? "fixed right-0 top-0 h-full z-[105] overflow-hidden transition-all duration-300 ease-in-out w-60 md:w-96 p-8 md:p-24 bg-[#2C0055]"
            : "hidden transition-all duration-300 ease-in-out"
        }
      >
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className=" py-1 pr-6 pl-8 rounded-full absolute top-3 -left-4"
        >
          <svg
            className="w-8 h-8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 15.125 12.28125 L 12.28125 15.125 L 22.21875 25 L 12.28125 34.875 L 15.125 37.71875 L 25.0625 27.84375 L 35 37.71875 L 37.8125 34.875 L 27.90625 25 L 37.8125 15.125 L 35 12.28125 L 25.0625 22.15625 Z"></path>
          </svg>
        </button>
        <div className="text-white text-bold text-center mx-auto uppercase mb-16">
          MohanRaji
        </div>

        <ul className="flex flex-col items-center gap-12">
          <a href="#homepage">
            <li className="text-white text-lg ">Home</li>
          </a>
          <a href="#about_me">
            <li className="text-white text-lg ">About</li>
          </a>
          <a href="#experience">
            <li className="text-white text-lg ">Experience</li>
          </a>
          <a href="#projects">
            <li className="text-white text-lg ">Projects</li>
          </a>
          <NavLink className="" to="/contact">
            <li className="text-white text-bold ">Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default AppNav;
