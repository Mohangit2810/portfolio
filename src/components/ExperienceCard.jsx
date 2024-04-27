/* eslint-disable react/prop-types */

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function ExperienceCard({ time, role, place }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Reset animation when element is completely out of view
  });

  // const isOdd = index % 2 === 1;

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: `translate3d( ${inView ? 0 : -185}px, 0,0)`,

    config: {
      duration: 1000, // Adjust the duration (in milliseconds) as needed
    },
  });

  return (
    <animated.div ref={ref} style={props} className="mb-6">
      <div className="h-auto lg:h-[215px] xl:!h-auto experience-image flex flex-col items-start justify-start gap-4 rounded-xl py-4 px-6">
        <div className="background1"></div>
        <div className="background2"></div>
        <p className="font-bold text-xl text-[#be46b2]">{time}</p>
        <h3 className="uppercase font-bold text-2xl"> {role}</h3>
        <p className="text-lg">{place}</p>
      </div>
    </animated.div>
  );
}

export default ExperienceCard;
