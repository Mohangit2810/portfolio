import AppNav from "../components/AppNav";
import Text from "../components/Text";
import "../pages/style.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Landing() {
  return (
    <section
      id="homepage"
      className="overflow-hidden relative landing-page bg-[url('../landing.webp')] bg-cover h-[650px] lg:h-screen"
    >
      <AppNav />
      <div className="z-[20] hero-text absolute top-[12rem] left-8 md:top-[17rem] md:left-16">
        <h2 className="text-2xl lg:text-4xl">
          Hello <span className="wave">👋 </span>
        </h2>
        <h1 className="text-4xl lg:text-7xl my-3">
          <span className=" text-4xl mr-3">I&apos;m</span>MohanRaji
        </h1>
        <Text />
        <div>
          <button
            onClick={() => {
              window.open("https://github.com/Mohangit2810");
            }}
            className="socailmediabtn"
          >
            <AiFillGithub className="icon mx-auto" />
          </button>
          <button
            onClick={() => {
              window.open("https://www.linkedin.com/in/mohan-raji-95bb8a223/");
            }}
            className="socailmediabtn"
          >
            <FaLinkedinIn className="icon mx-auto" />
          </button>
          <button
            onClick={() => {
              window.open("https://twitter.com/MohanRaji212855");
            }}
            className="socailmediabtn"
          >
            <AiOutlineTwitter className="icon mx-auto" />
          </button>
          <button
            onClick={() => {
              window.open("https://www.instagram.com/webdevmohan/");
            }}
            className="socailmediabtn"
          >
            <AiFillInstagram className="icon mx-auto" />
          </button>
        </div>
      </div>
      <div className="land-shooting-star-1"></div>
      <div className="land-shooting-star-2"></div>
      <div className="land-shooting-star-3"></div>
      <div className="land-shooting-star-4"></div>
    </section>
  );
}

export default Landing;
