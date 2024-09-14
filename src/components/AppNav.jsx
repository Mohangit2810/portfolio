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
      {/* Desktop Nav */}
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
          <span className="logo text-xl text-white text-bold uppercase">
            MohanRaji
          </span>
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
            <a href="#contact" className="">
              <span className="text-white text-lg  ">Contact</span>
            </a>
          </ul>
          <div className="btn-container hidden lg:block">
            <a
              href="https://drive.google.com/file/d/1oVc8cIwqRwR6h6zpgX92x4QbRcvk03T9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button id="space-btn" name="space-button" type="submit">
                <span className="space">Resume</span>
                <div
                  style={{
                    position: "absolute",
                    left: 119.273 + "px",
                    top: 18.0747 + "px",
                    animationDelay: 3.37051 + "s",
                    transform: "scale(0.196521)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 166.774 + "px",
                    top: 47.4519 + "px",
                    animationDelay: 3.03913 + "s",
                    transform: "scale(0.33078)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 238.677 + "px",
                    top: 19.6434 + "px",
                    animationDelay: 3.85796 + "s",
                    transform: "scale(1.29037)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 22.2022 + "px",
                    top: 4.69534 + "px",
                    animationDelay: 4.9415 + "s",
                    transform: "scale(1.82231)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 206.74 + "px",
                    top: 40.7685 + "px",
                    animationDelay: 1.59195 + "s",
                    transform: "scale(1.01375)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 241.531 + "px",
                    top: 14.2516 + "px",
                    animationDelay: 1.67616 + "s",
                    transform: "scale(0.811597)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 14.754 + "px",
                    top: 25.2924 + "px",
                    animationDelay: 0.0348248 + "s",
                    transform: "scale(0.102529)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 220.444 + "px",
                    top: 43.9803 + "px",
                    animationDelay: 1.5106 + "s",
                    transform: "scale(0.16088)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 95.948 + "px",
                    top: 54.8942 + "px",
                    animationDelay: 3.18662 + "s",
                    transform: "scale(1.7822)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 30.3484 + "px",
                    top: 36.5984 + "px",
                    animationDelay: 4.30868 + "s",
                    transform: "scale(1.16326)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 184.622 + "px",
                    top: 20.0923 + "px",
                    animationDelay: 2.83829 + "s",
                    transform: "scale(1.27781)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 142.1 + "px",
                    top: 22.3542 + "px",
                    animationDelay: 2.73988 + "s",
                    transform: "scale(1.62715)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 145.079 + "px",
                    top: 6.97553 + "px",
                    animationDelay: 0.0408754 + "s",
                    transform: "scale(0.468075)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 6.67886 + "px",
                    top: 38.4849 + "px",
                    animationDelay: 3.84019 + "s",
                    transform: "scale(0.272217)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 201.17 + "px",
                    top: 39.9168 + "px",
                    animationDelay: 2.93587 + "s",
                    transform: "scale(0.521258)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 224.215 + "px",
                    top: 42.9903 + "px",
                    animationDelay: 0.895495 + "s",
                    transform: "scale(0.0458902)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 42.2308 + "px",
                    top: 9.78383 + "px",
                    animationDelay: 4.58407 + "s",
                    transform: "scale(0.0422065)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 91.2734 + "px",
                    top: 14.0408 + "px",
                    animationDelay: 2.05927 + "s",
                    transform: "scale(0.11997)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 35.6985 + "px",
                    top: 52.6403 + "px",
                    animationDelay: 3.07343 + "s",
                    transform: "scale(0.672992)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 76.4191 + "px",
                    top: 48.453 + "px",
                    animationDelay: 2.35679 + "s",
                    transform: "scale(1.46957)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 184.503 + "px",
                    top: 4.18267 + "px",
                    animationDelay: 1.43409 + "s",
                    transform: "scale(0.606616)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 221.039 + "px",
                    top: 54.2493 + "px",
                    animationDelay: 2.92356 + "s",
                    transform: "scale(0.638665)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 185.612 + "px",
                    top: 44.3 + "px",
                    animationDelay: 1.36401 + "s",
                    transform: "scale(1.65012)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 154.027 + "px",
                    top: 45.9848 + "px",
                    animationDelay: 3.723 + "s",
                    transform: "scale(1.4118)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 220.591 + "px",
                    top: 4.95194 + "px",
                    animationDelay: 0.363098 + "s",
                    transform: "scale(0.52369)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 236.028 + "px",
                    top: 11.1663 + "px",
                    animationDelay: 3.67493 + "s",
                    transform: "scale(0.956478)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 110.241 + "px",
                    top: 20.2684 + "px",
                    animationDelay: 2.94906 + "s",
                    transform: "scale(1.2193)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 12.602 + "px",
                    top: 19.8836 + "px",
                    animationDelay: 4.072 + "s",
                    transform: "scale(1.49026)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 30.0911 + "px",
                    top: 37.9746 + "px",
                    animationDelay: 1.02002 + "s",
                    transform: "scale(1.41008)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 62.3096 + "px",
                    top: 9.64604 + "px",
                    animationDelay: 3.9445 + "s",
                    transform: "scale(0.231214)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 44.7189 + "px",
                    top: 32.4307 + "px",
                    animationDelay: 4.78921 + "s",
                    transform: "scale(0.359408)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 191.866 + "px",
                    top: 27.151 + "px",
                    animationDelay: 1.34451 + "s",
                    transform: "scale(1.13484)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 47.6744 + "px",
                    top: 3.00604 + "px",
                    animationDelay: 1.04567 + "s",
                    transform: "scale(0.682023)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 98.6225 + "px",
                    top: 49.6115 + "px",
                    animationDelay: 2.41384 + "s",
                    transform: "scale(1.96254)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 57.4785 + "px",
                    top: 29.6588 + "px",
                    animationDelay: 3.3569 + "s",
                    transform: "scale(1.53118)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 13.2213 + "px",
                    top: 24.538 + "px",
                    animationDelay: 1.69582 + "s",
                    transform: "scale(1.6236)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 131.656 + "px",
                    top: 31.1837 + "px",
                    animationDelay: 1.29918 + "s",
                    transform: "scale(1.84486)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 56.9067 + "px",
                    top: 51.9904 + "px",
                    animationDelay: 4.74375 + "s",
                    transform: "scale(0.749788)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 82.8361 + "px",
                    top: 54.3876 + "px",
                    animationDelay: 1.28648 + "s",
                    transform: "scale(0.566118)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 193.213 + "px",
                    top: 43.9428 + "px",
                    animationDelay: 0.390178 + "s",
                    transform: "scale(1.411)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{ animationDelay: 1.2122 + "s" }}
                  className="shooting-star shooting-star-1"
                ></div>
                <div
                  style={{ animationDelay: 0.777895 + "s" }}
                  className="shooting-star shooting-star-2"
                ></div>
                <div
                  style={{ animationDelay: 4.90483 + "s" }}
                  className="shooting-star shooting-star-3"
                ></div>
                <div
                  style={{ animationDelay: 3.66012 + "s" }}
                  className="shooting-star shooting-star-4"
                ></div>
              </button>
            </a>
          </div>

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

      {/* Mobile Side Bar */}
      <nav
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
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/1a6wJhmuCLSkKrhTwY4XytBK_mdab6c-b/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button id="space-btn" name="space-button" type="submit">
                <span className="space">Resume</span>
                <div
                  style={{
                    position: "absolute",
                    left: 119.273 + "px",
                    top: 18.0747 + "px",
                    animationDelay: 3.37051 + "s",
                    transform: "scale(0.196521)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 166.774 + "px",
                    top: 47.4519 + "px",
                    animationDelay: 3.03913 + "s",
                    transform: "scale(0.33078)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 238.677 + "px",
                    top: 19.6434 + "px",
                    animationDelay: 3.85796 + "s",
                    transform: "scale(1.29037)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 22.2022 + "px",
                    top: 4.69534 + "px",
                    animationDelay: 4.9415 + "s",
                    transform: "scale(1.82231)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 206.74 + "px",
                    top: 40.7685 + "px",
                    animationDelay: 1.59195 + "s",
                    transform: "scale(1.01375)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 241.531 + "px",
                    top: 14.2516 + "px",
                    animationDelay: 1.67616 + "s",
                    transform: "scale(0.811597)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 14.754 + "px",
                    top: 25.2924 + "px",
                    animationDelay: 0.0348248 + "s",
                    transform: "scale(0.102529)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 220.444 + "px",
                    top: 43.9803 + "px",
                    animationDelay: 1.5106 + "s",
                    transform: "scale(0.16088)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 95.948 + "px",
                    top: 54.8942 + "px",
                    animationDelay: 3.18662 + "s",
                    transform: "scale(1.7822)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 30.3484 + "px",
                    top: 36.5984 + "px",
                    animationDelay: 4.30868 + "s",
                    transform: "scale(1.16326)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 184.622 + "px",
                    top: 20.0923 + "px",
                    animationDelay: 2.83829 + "s",
                    transform: "scale(1.27781)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 142.1 + "px",
                    top: 22.3542 + "px",
                    animationDelay: 2.73988 + "s",
                    transform: "scale(1.62715)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 145.079 + "px",
                    top: 6.97553 + "px",
                    animationDelay: 0.0408754 + "s",
                    transform: "scale(0.468075)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 6.67886 + "px",
                    top: 38.4849 + "px",
                    animationDelay: 3.84019 + "s",
                    transform: "scale(0.272217)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 201.17 + "px",
                    top: 39.9168 + "px",
                    animationDelay: 2.93587 + "s",
                    transform: "scale(0.521258)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 224.215 + "px",
                    top: 42.9903 + "px",
                    animationDelay: 0.895495 + "s",
                    transform: "scale(0.0458902)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 42.2308 + "px",
                    top: 9.78383 + "px",
                    animationDelay: 4.58407 + "s",
                    transform: "scale(0.0422065)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 91.2734 + "px",
                    top: 14.0408 + "px",
                    animationDelay: 2.05927 + "s",
                    transform: "scale(0.11997)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 35.6985 + "px",
                    top: 52.6403 + "px",
                    animationDelay: 3.07343 + "s",
                    transform: "scale(0.672992)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 76.4191 + "px",
                    top: 48.453 + "px",
                    animationDelay: 2.35679 + "s",
                    transform: "scale(1.46957)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 184.503 + "px",
                    top: 4.18267 + "px",
                    animationDelay: 1.43409 + "s",
                    transform: "scale(0.606616)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 221.039 + "px",
                    top: 54.2493 + "px",
                    animationDelay: 2.92356 + "s",
                    transform: "scale(0.638665)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 185.612 + "px",
                    top: 44.3 + "px",
                    animationDelay: 1.36401 + "s",
                    transform: "scale(1.65012)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 154.027 + "px",
                    top: 45.9848 + "px",
                    animationDelay: 3.723 + "s",
                    transform: "scale(1.4118)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 220.591 + "px",
                    top: 4.95194 + "px",
                    animationDelay: 0.363098 + "s",
                    transform: "scale(0.52369)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 236.028 + "px",
                    top: 11.1663 + "px",
                    animationDelay: 3.67493 + "s",
                    transform: "scale(0.956478)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 110.241 + "px",
                    top: 20.2684 + "px",
                    animationDelay: 2.94906 + "s",
                    transform: "scale(1.2193)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 12.602 + "px",
                    top: 19.8836 + "px",
                    animationDelay: 4.072 + "s",
                    transform: "scale(1.49026)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 30.0911 + "px",
                    top: 37.9746 + "px",
                    animationDelay: 1.02002 + "s",
                    transform: "scale(1.41008)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 62.3096 + "px",
                    top: 9.64604 + "px",
                    animationDelay: 3.9445 + "s",
                    transform: "scale(0.231214)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 44.7189 + "px",
                    top: 32.4307 + "px",
                    animationDelay: 4.78921 + "s",
                    transform: "scale(0.359408)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 191.866 + "px",
                    top: 27.151 + "px",
                    animationDelay: 1.34451 + "s",
                    transform: "scale(1.13484)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 47.6744 + "px",
                    top: 3.00604 + "px",
                    animationDelay: 1.04567 + "s",
                    transform: "scale(0.682023)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 98.6225 + "px",
                    top: 49.6115 + "px",
                    animationDelay: 2.41384 + "s",
                    transform: "scale(1.96254)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 57.4785 + "px",
                    top: 29.6588 + "px",
                    animationDelay: 3.3569 + "s",
                    transform: "scale(1.53118)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 13.2213 + "px",
                    top: 24.538 + "px",
                    animationDelay: 1.69582 + "s",
                    transform: "scale(1.6236)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 131.656 + "px",
                    top: 31.1837 + "px",
                    animationDelay: 1.29918 + "s",
                    transform: "scale(1.84486)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 56.9067 + "px",
                    top: 51.9904 + "px",
                    animationDelay: 4.74375 + "s",
                    transform: "scale(0.749788)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 82.8361 + "px",
                    top: 54.3876 + "px",
                    animationDelay: 1.28648 + "s",
                    transform: "scale(0.566118)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    position: "absolute",
                    left: 193.213 + "px",
                    top: 43.9428 + "px",
                    animationDelay: 0.390178 + "s",
                    transform: "scale(1.411)",
                  }}
                  className="star"
                ></div>
                <div
                  style={{ animationDelay: 1.2122 + "s" }}
                  className="shooting-star shooting-star-1"
                ></div>
                <div
                  style={{ animationDelay: 0.777895 + "s" }}
                  className="shooting-star shooting-star-2"
                ></div>
                <div
                  style={{ animationDelay: 4.90483 + "s" }}
                  className="shooting-star shooting-star-3"
                ></div>
                <div
                  style={{ animationDelay: 3.66012 + "s" }}
                  className="shooting-star shooting-star-4"
                ></div>
              </button>
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default AppNav;
