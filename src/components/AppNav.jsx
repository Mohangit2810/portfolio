import { useState } from "react";
import { NavLink } from "react-router-dom";

function AppNav() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      id="navScroll"
      className={
        color
          ? "fixed top-0 left-0 w-full bg-[#2C00557d] z-[100] backdrop-filter backdrop-blur-lg"
          : "fixed top-0 left-0 w-full bg-transparent z-[100]"
      }
      tabIndex="0"
    >
      <div className="flex justify-around py-6">
        <span className="text-white text-bold uppercase">MohanRaji</span>

        <ul className="flex gap-12">
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
        <NavLink to="/contact">
          <span className="text-white text-bold ">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default AppNav;
