import "../pages/style.css";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  const projects = [
    {
      title: "Wild Oasis",
      description:
        "A Cabin Booking Website that uses the most advanced Concepts of React JS such as React Query, Complicated State Management and Supabase. This has a Lighthouse Score of 92 in Performance and 100 in Best Practices.",
      imageSrc: "/projectsix.png",
      projectUrl: "https://mohan-wild-oasis.netlify.app/",
    },
    {
      title: "Anime Blogz",
      description:
        "Anime Blogz is a React JS-based web app that shows blogs about various anime and manga. There are several categories to choose from, and users can read and comment on blogs. It has a visually appealing UI and is fully responsive.",
      imageSrc: "/projectfive.png",
      projectUrl: "https://sakurajima.netlify.app/",
    },

    {
      title: "Feastify",
      description:
        "Feastify is a React JS-based web app utilizing the Spoonacular API, enabling users to search recipes, access detailed instructions, and order ingredients online for convenient home cooking.",
      imageSrc: "/projectfour.png",
      projectUrl: "https://feastify-recipe.netlify.app/",
    },
    {
      title: "Designer Portfolio",
      description:
        "This portfolio is done for the UI/UX designer Bharanitharan. With his design principles and my front end expertise we made this website. Tech Stack used HTML, CSS and Javascript. Tools including Figma and VS Code",
      imageSrc: "/projectseven.png",
      projectUrl: "https://bharaninrb-portfolio.netlify.app/",
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

    // Add more projects as needed
  ];
  return (
    <section id="projects" className="bg-[#2C0055] overflow-hidden">
      <h1 className=" mx-auto text-center text-3xl md:text-5xl pt-12 relative">
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
