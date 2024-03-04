import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import FallingLeaves from "../components/FallingLeaves";
import "../pages/style.css";

function Contact() {
  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500 },
  });

  return (
    <div className="relative overflow-hidden ">
      <FallingLeaves />
      <div className="bg-[#2C0055] bg-[url('../contact.jpg')] bg-cover h-screen page-container">
        <animated.div style={formAnimation} className="contact-form-container">
          <form
            className="contact-form pt-24 "
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="d5b7da77-005d-4e53-ac3f-d2d2deb981a0"
            />
            <div className="flex flex-col items-start ml-20 justify-center gap-4 text-slate-950">
              <h1 className="text-5xl mb-6">Contact</h1>
              <div className="mb-3 flex flex-col gap-4 ">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg bg-white w-96 h-10 pl-2 rounded"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 flex flex-col gap-4 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg bg-white w-96 h-10 pl-2 rounded"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 flex flex-col gap-4 ">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="form-control form-control-lg bg-white w-96 h-20 pl-2 pt-1 rounded"
                ></textarea>
              </div>
              <div className="flex gap-12 ">
                <button
                  type="submit"
                  className="mt-4 custom-btn form-btn !bg-[#E162A0]"
                >
                  Submit
                </button>
                <Link to="/">
                  <button
                    type="button"
                    className="mt-4 custom-btn form-btn !bg-[#B89FB2]"
                  >
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
  );
}

export default Contact;
