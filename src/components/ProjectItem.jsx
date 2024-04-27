// ProjectItem.jsx
// import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({ title, description, imageSrc, projectUrl, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Reset animation when element is completely out of view
  });

  const isOdd = index % 2 === 1;

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: `translate3d( ${inView ? 0 : isOdd ? 185 : -185}px,0, 0)`,

    config: {
      duration: 1000, // Adjust the duration (in milliseconds) as needed
    },
  });
  return (
    <animated.div
      ref={ref}
      style={props}
      className={
        isOdd
          ? "flex flex-col-reverse lg:flex-row flex-row-reverse  gap-4 md:gap-8 justify-center items-center"
          : "flex flex-col-reverse lg:flex-row gap-4 md:gap-8 justify-center items-center"
      }
    >
      <div className="ml-4">
        <h2 className="text-2xl md:text-4xl mb-6 font-semibold mt-6">
          {title}
        </h2>
        <p>{description}</p>

        <a className="mx-auto" target="blank" href={projectUrl}>
          <button className="mt-8 custom-btn btn-15">
            <span>View Project</span>
          </button>
        </a>
      </div>

      <img
        className="max-w-sm md:max-w-lg lg:!max-w-xl"
        src={imageSrc}
        alt={`a picture of ${title}`}
      />
    </animated.div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectItem;
