/* eslint-disable react/prop-types */

// import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProjectCard from "./ProductCard";


const Works = () => {

  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>


      <div className=' mt-20 mx-auto justify-center flex flex-wrap gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
      </>
  );
};

export default SectionWrapper(Works, "");