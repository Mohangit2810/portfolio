import "../pages/style.css";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  const projects = [
    {
      title: "Feastify",
      description:
        "Feastify is a React JS-based web app utilizing the Spoonacular API, enabling users to search recipes, access detailed instructions, and order ingredients online for convenient home cooking.",
      imageSrc: "/projectfour.png",
      projectUrl: "https://feastify-recipe.netlify.app/",
    },
    {
      title: "Cosmic Crafts",
      description:
        " Cosmic Crafts stands as a dynamic static website tailored for a community-based startup. Leveraging the robust capabilities of React JS, the website is seamlessly responsiveness, offering users an engaging experience.",
      imageSrc: "/projectone.png",
      projectUrl: "https://cosmiccrafts.netlify.app/",
    },
    {
      title: "Omnifood",
      description:
        "Omnifood Website is a static website build with HTML,CSS and little bit of javascript. This project is done under the guidance of Udemy course 'Responsive Website with HTML and CSS' by Jonas Schmedtmann.",
      imageSrc: "/projecttwo.png",
      projectUrl: "https://omnifood.dev/",
    },
    {
      title: "Camping Website",
      description:
        " This Responsive Camping Website is built with HTML,CSS and JavaScript. It uses GSAP for image animation. This one has a simple aesthetic animation to attract the users.",
      imageSrc: "/projectthree.png",
      projectUrl: "https://mohangit2810.github.io/camping-landing-page/",
    },

    // Add more projects as needed
  ];
  return (
    <section id="projects" className="bg-[#2C0055] overflow-hidden">
      <h1 className=" mx-auto text-center text-5xl pt-12 relative">
        <span className="about-heading">Projects</span>
      </h1>

      <div className="flex flex-col gap-24 mt-12 md:mt-24 pb-24 w-[90%] xl:w-3/4 mx-auto">
        {projects.map((project, index) => (
          <ProjectItem key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
