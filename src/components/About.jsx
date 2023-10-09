/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { stylesUsing } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { Wrapper } from "../HOC";
import ServiceCard from "./ServiceCard";
import { useJsons } from "../constants";

function About() {
  const { services } = useJsons();
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center justify-center md:mt-20"
        //id="about"
      >
        <p className={`${stylesUsing.sectionSubText} mt-20`}>Introduction</p>
        <h2 className={stylesUsing.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify w-5/6 mx-auto"
        variants={fadeIn("", "", 0.1, 1)}
      >
        {`I am a software engineer with extensive experience in both frontend and backend technologies. I have played an integral role in various medium and large-scale projects, contributing not only to code writing and its functionalities, but also providing a critical perspective towards the product and the business as a whole. My knowledge encompasses various programming languages and environments, including TypeScript, Next.js, Nest.js, Firebase, among others. I stand out for my skill in assertive communication and my dedicated focus on achieving tangible results.`}
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
