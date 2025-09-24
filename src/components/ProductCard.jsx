import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { github } from "../assets";
const ProjectCard = ({project, index}) => {
  const { name,description,tags,image,source_code_link,live_link,} = project;
//   const [data,setData]= useState([])
//   const [isOpen, setIsOpen] = useState(false);
//   console.log(data, "data")
//   console.log(isOpen)
//   // const [isMobile, setIsMobile] = useState(false);

  // useEffect(()=>{
  //   const handleResize = () =>{
  //     setIsMobile(innerWidth <= 768)
  //   };
  //   handleResize()
  //   window.addEventListener("resize", handleResize)

  //   return () => window.removeEventListener("resize", handleResize)
  // },[])
  return (
   <>

    <motion.div
    initial={{
      x:0,
      y:-30,
      opacity:0,
    }}
    whileInView={{
      x:0,
      y:0,
      opacity:1,
      transition:{
        type:"tween",
        duration:1,
        delay: 0.2 * index,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }}
    className='bg-tertiary  hover:scale-105 duration-300 hover:shadow-card p-5 rounded-2xl xs:w-[340px] sm:w-[390px] md:w-[350px] w-full '

    >


        <div  className='relative w-full h-[230px]'>
          <img

            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-t-md'
          />
          <div className='absolute inset-0 flex justify-start m-3 card-img_hover'>
            <div
              onClick={() => window.open(live_link)}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <FaExternalLinkAlt
              className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          <div className='absolute right-0 top-0  flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 leading-none'>
          <h3 className='text-white truncate font-serif font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary line-clamp-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-1 line-clamp-1'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} line-clamp-1`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {/* {isOpen && <Modal data={data} />} */}

    </motion.div>
   </>
  );
};


export default ProjectCard;