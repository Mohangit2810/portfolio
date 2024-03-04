import Typewriter from "typewriter-effect";
import "../pages/style.css";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "React JS Developer",
          "Front End Developer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Text;
