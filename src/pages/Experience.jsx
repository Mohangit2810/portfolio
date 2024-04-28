import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
// import { useSpring, animated, config } from "react-spring";

function Experience() {
  return (
    <section
      id="experience"
      className="experiences-container bg-[#2C0055] pt-24 pb-12 h-auto lg:h-screen"
    >
      <div className="flex items-center flex-col lg:flex-row gap-12 ml:gap-26 justify-center">
        <div className="mx-12 xl:mx-32 mt-6 flex flex-col gap-8 w-3/4 lg:w-full overflow-hidden ">
          <h1 className="about-heading mx-auto text-center text-3xl md:text-5xl pt-12 mb-12  ">
            Experiences
          </h1>
          <ExperienceCard
            time="2023 Nov - 2024 Feb"
            role="Full Stack Developer - Intern"
            place="PK Innovatives, Chennai"
          />
          <ExperienceCard
            time="2022 Jun - 2023 Oct"
            role="Frontend Developer - Intern"
            place="Cosmic Crafts, Chennai"
          />
        </div>
        <div className="mx-12 xl:mx-32 mt-6 flex flex-col gap-8 w-3/4 lg:w-full overflow-hidden ">
          <h1 className="about-heading mx-auto text-center text-3xl md:text-5xl pt-12 mb-12  ">
            Education
          </h1>
          <EducationCard
            time="2019 - 2020"
            role="Secondary School"
            place="Sri Ramakrishna Matric School, Perambalur"
          />
          <EducationCard
            time="2017 - 2018"
            role="Higher Secondary School"
            place="Sri Ramakrishna Matric School, Perambalur"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
