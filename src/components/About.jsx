/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { stylesUsing } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Wrapper } from "../HOC";
import ServiceCard from "./ServiceCard";


function About ()  {
  return (
    <>
      <motion.div variants={textVariant()}
        className="flex flex-col items-center justify-center md:mt-20"
        //id="about"
      >
        <p className={`${stylesUsing.sectionSubText} mt-20`}>Introducción</p>
        <h2 className={stylesUsing.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify w-5/6 mx-auto"
        variants={fadeIn("", "", 0.1, 1)}
      >
        {`I'm an experienced software developer skilled in both frontend and backend technologies. I have worked on medium to large-scale projects, providing critical insights into product and business development. I'm proficient in programming languages like Javascript, Typescript, ReactJs, Nodejs, Firebase and Supabase. I'm also a highly communicative and result-driven individual.`}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 lg:grid lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}


export default Wrapper(About, "about");