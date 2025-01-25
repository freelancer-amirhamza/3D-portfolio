
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect, useState } from "react";

const ServiceCard = ({ index, title, icon, desc }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(()=>{
    const handleResize = () =>{
      setIsMobile(innerWidth <= 624)
    };
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  },[])
  return(
    <>
    {isMobile? (
      <div
      // options={{
      //   max: 45,
      //   scale: 1,
      //   speed: 450,
      // }}
      className='xs:w-[250px] w-full'>
        <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
            />
    
    <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white text-[15px] font-semibold text-center'>
              {desc}
            </p>
          </div>
        </div>
      </div>
    ) 
    :
     (
      <Tilt
  options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}
  className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index , 0.75 )}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        
        className='bg-tertiary rounded-[20px] py-2 px-2 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white text-[15px] font-semibold text-center'>
              {desc}
            </p>
      </div>
    </motion.div>
  </Tilt>
    )
    }
    </>
  )
}

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(()=>{
    const handleResize = () =>{
      setIsMobile(innerWidth <= 624)
    };
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  },[])

  return (
    <>
     {isMobile? (
       <>
        <div >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a MERN stack web developer with three years of experience,
        passionate about coding and always learning new technologies.
        I work on both front-end and back-end development to create efficient web solutions.
        Front-end Skills: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery, ReactJS, Redux, NextJS
        Back-end Skills: NodeJS, ExpressJS, MongoDB, Mongoose, Google Firebase
        Other Skills: Canva Pro Design, Digital Marketing,
        I specialize in building responsive websites that look great on any device.
        My goal is to provide high-quality service and make sure my clients are fully satisfied with the results.
        Thank you for visiting my portfolio!
      </p>

      <div className='mt-20 flex justify-center flex-wrap md:gap-10 gap-5 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </>
      )
      : 
      (
        <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a MERN stack web developer with three years of experience,
        passionate about coding and always learning new technologies.
        I work on both front-end and back-end development to create efficient web solutions.
        Front-end Skills: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery, ReactJS, Redux, NextJS
        Back-end Skills: NodeJS, ExpressJS, MongoDB, Mongoose, Google Firebase
        Other Skills: Canva Pro Design, Digital Marketing,
        I specialize in building responsive websites that look great on any device.
        My goal is to provide high-quality service and make sure my clients are fully satisfied with the results.
        Thank you for visiting my portfolio!
      </motion.p>

      <div className='mt-20 flex justify-center flex-wrap md:gap-10 gap-5 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
        </>
      ) }
    </>
  );
};

export default SectionWrapper(About, "about");