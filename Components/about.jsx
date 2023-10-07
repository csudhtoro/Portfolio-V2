"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="sm:mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-28 sm:mt-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate software developer with a deep love for turning ideas
        into elegant, functional, and efficient code. With a strong foundation
        in programming languages like{" "}
        <span className="underline"> Java, Python, and JavaScript </span>, I
        thrive in the dynamic world of technology. My curiosity drives me to
        continually <span className="italic"> explore emerging trends </span>{" "}
        and stay up-to-date with the latest industry innovations.
      </p>

      <p>
        I take pride in my ability to tackle{" "}
        <span className="font-medium"> complex problems </span> and collaborate
        effectively in a team environment. Whether it's building web
        applications, optimizing database performance, or crafting clean and
        maintainable code,{" "}
        <span className="font-bold">
          {" "}
          I'm dedicated to delivering solutions
        </span>{" "}
        that make a positive impact. Welcome to my portfolio, where you can
        explore my projects and witness my commitment to the art of software
        development.
      </p>
    </motion.section>
  );
}
