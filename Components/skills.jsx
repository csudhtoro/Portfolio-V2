"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/app/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section
      ref={ref}
      className="sm:mt-28 mt-28 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex items-center border-2 border-black/[0.1] rounded-lg bg-gray-100"
            key={skill.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="py-2">{skill.icon}</div>

            <div className="py-6 pr-6 text-xs">
              <h3>{skill.name}</h3>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
