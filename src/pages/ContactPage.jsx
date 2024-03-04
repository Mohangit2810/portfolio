import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";

function ContactPage() {
  return (
    <div className="bg-[#2C0055] h-screen">
      <h1 className="mx-auto text-center text-5xl pt-48 ">Get In Touch</h1>
      <p className="text-center mt-8 text-lg tracking-wide leading-relaxed">
        I&apos;m currently searching for opportunities for a front-end developer
        role.
        <br />
        If there is any vacancy my inbox is always open. Whether
        <br />
        you have any further questions or just want to say hi,
        <br />
        I&apos;ll try my best to get back to you!
      </p>
      <Link to="/contact">
        <button className="flex items-center justify-center mx-auto mt-8 custom-btn btn-15">
          <span>Say Hello!</span>
        </button>
      </Link>
      <div className="flex justify-center items-center">
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
            window.open("https://instagram.com/mohan_raji_28");
          }}
          className="socailmediabtn"
        >
          <AiFillInstagram className="icon mx-auto" />
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
