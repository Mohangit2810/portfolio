import About from "./About";
import ContactPage from "./ContactPage";
import Landing from "./Landing";
import Projects from "./Projects";
import Experience from "./Experience";

function HomePage() {
  return (
    <div>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default HomePage;
