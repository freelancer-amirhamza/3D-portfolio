import { avatar } from '../assets';
import { motion } from 'framer-motion';
import {styles } from '../styles';
// import {ComputersCanvas} from './canvas';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn, slideIn } from '../utils/motion';
import { FaCloudDownloadAlt } from "react-icons/fa";

const Hero = () => {


  return (
    <section className="relative w-full h-screen max-sm:h-[123vh]  mx-auto justify-center flex " >
      <div className={`${styles.paddingX} absolute w-full mt-20 -px-0 md:flex-row flex flex-col-reverse items-center h-full mx-auto justify-center`}>
      <motion.div variants={slideIn("left", "tween", 0.1, 1)} className={` flex-1 w-full inset-0 max-w-7xl
       flex flex-row items-center gap-5  `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 bg-[#915eff] rounded-full"/>
          <div className='w-1 violet-gradient h-40 sm:h-80 '/>
        </div>
        <div>
        <h1 className={` ${styles.heroHeadText}  text-white font-primary mx-0  `}>
          Hi, I&apos;m <span className='text-[#915eff] font-secondary uppercase'> Amir Hamza</span>
        </h1>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7 }}
          className={` font-bold  text-white font-secondary uppercase lg:text-[45px] li sm:text-[30px] xs:text-[35px] text-[20px] lg:leading-[30px] leading-[51px]  `}
          >
            <h1 >I&apos;m a {" "}
            <TypeAnimation
            sequence={[
              "Front-End Developer",
              2000,
              "Back-End Developer",
              2000,
              "React Developer",
              2000,
              "MERN Stack Developer",
              2000,

            ]}
            speed={50}
            repeat={Infinity}
            wrapper='span'
            className='text-[#915eff] '
            />
            </h1>
            <a href="/AmirhamzaCV.pdf" download
           className="bg-tertiary flex gap-3 cursor-pointer items-center px-4 p-2 text-xl  mt-16 btn btn-sm rounded-3xl outline-none w-fit text-white font-bold shadow-md shadow-primary ">
              <button type='submit' >My Resume</button>
              <FaCloudDownloadAlt size={26} />
            </a>
          </motion.div>
        </div>
      </motion.div>
      {/* <ComputersCanvas /> */}
      <div className="flex h-full flex-0.9 animate-upDown duration-300 hover:shadow-box   max-sm:max-w-[20rem]
      max-sm:max-h-[20rem] max-w-[24rem] max-h-[24rem] rounded-full green-pink-gradient p-[4px] items-center justify-center ">
        <div className=" max-w-[24rem]  rounded-full  bg-tertiary  ">
          <img className='w-full h-full object-cover' src={avatar} alt="" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero