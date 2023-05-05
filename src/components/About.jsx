/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { stylesUsing } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index }) => {
  return (
    <Tilt
      className="cursor-pointer xs:-[250px] w-11/12 flex justify-center flex-wrap  mx-auto"
      options={{
        max: 25,
        scale: 1.05,
        speed: 500,
        glare: true,
        "max-glare": 0.5

      }}
    >
      <motion.div
        className="w-96 mx-auto green-pink-gradient p-[1px] rounded-3xl shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
          className="bg-tertiary rounded-[10px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center flex-wrap"
        >

          <img
            src={services[index].icon}
            alt={title}
            className="w-24 h-24 object-contain"
          />
          <h3 className="text-xl font-bold mt-4">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div id = "about" className="py-24">
      <motion.div  variants={textVariant()}
        className="flex flex-col items-center justify-center "
      >
        <p className={stylesUsing.sectionSubText}>Introducción</p>
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
    </div>
  );
};

export default About;
