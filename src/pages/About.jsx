import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import "../pages/style.css";

function About() {
  return (
    <section id="about_me" className="bg-[#2C0055] h-auto lg:h-screen">
      <h1 className=" mx-auto text-center text-2xl lg:text-5xl pt-12">
        <span className="about-heading">About Me</span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row w-3/4 mx-auto mt-20 gap-8">
        <div className="">
          <h2 className="text-2xl md:text-4xl mb-6 font-semibold mt-6">
            Hello There !
          </h2>
          <p className="text-base md:text-xl text-justify tracking-wide leading-relaxed">
            I&apos;m a self-taught Front End developer. I build websites with a
            focus on providing the experience for everyone using them and
            responsiveness. Curious to learn more about developing scalable
            distribution systems, love problem solving, and care about writing
            and maintainable code. A responsive design makes your website
            accessible to all users, regardless of their devices.
          </p>
        </div>
        <img
          className="w-44 h-52 md:w-80 md:h-96 rounded mx-auto"
          src="../mohan.png"
          alt="a picture of mohanraji"
        />
      </div>
      <div className="skillsContainer w-3/4 mx-auto overflow-hidden">
        <div className="skill--scroll ">
          <Marquee
            className="overflow-hidden"
            gradient={false}
            speed={60}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id}>
                <img
                  className="skill-image"
                  src={skillsImage(skill)}
                  alt={skill}
                />
                <p>{skill}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default About;
