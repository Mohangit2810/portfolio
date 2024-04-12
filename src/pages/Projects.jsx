import "../pages/style.css";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  const projects = [
    {
      title: "Feastify",
      description:
        "Feastify is a dynamic web application that allows users to search for recipes and easily cook at home. The application leverages the power of React JS and the Spoonacular API to provide users with a seamless and interactive experience. Users can search for recipes, view detailed instructions, and even order the ingredients online.",
      imageSrc: "/projectfour.png",
      projectUrl: "https://feastify-recipe.netlify.app/",
    },
    {
      title: "Cosmic Crafts",
      description:
        " Cosmic Crafts stands as a dynamic static website tailored for a community-based startup concept. Leveraging the robust capabilities of React JS, the website seamlessly combines responsiveness and interactivity, offering users an engaging experience.",
      imageSrc: "/projectone.png",
      projectUrl: "https://cosmiccrafts.netlify.app/",
    },
    {
      title: "Omnifood",
      description:
        "Omnifood Website is a static website build with HTML,CSS and little bit of javascript. This is a responsive website which resizes according to the screen size. This project is done under the guidance of Udemy course 'Responsive Website with HTML and CSS' by Jonas Schmedtmann.",
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
    <section id="projects" className="bg-[#2C0055]">
      <h1 className="about-heading mx-auto text-center text-5xl pt-12 relative ">
        Projects
      </h1>

      <div className="flex flex-col gap-24 mt-32 w-3/4 mx-auto">
        {projects.map((project, index) => (
          <ProjectItem key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
