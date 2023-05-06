/*import Tilt from "react-tilt"*/
import { motion } from "framer-motion";
import { stylesUsing } from "../styles";
/*import { github } from "../assets"*/
import { Wrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div
        className="text-center"
        variants={textVariant()}>
        <p
          style={{
            textShadow: "0px 0px 20px rgba(255,255,255,255)",
          }}
          className={stylesUsing.sectionSubText}>
          Here are some of my projects
        </p>
        <h2 className={stylesUsing.sectionHeadText}>Works</h2>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            textShadow: "0px 0px 7px rgba(255,255,255,255)",
          }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          As a developer I have had the opportunity to work with clients from
          different cities and developers from different countries. Over the
          past two years, I have worked with a variety of technologies,
          including React, TypeScript, Supabase, Firebase, Tailwind, and more. I
          am committed to continue improving my skills and learning new
          technologies so that I can always offer the best service to my
          clients.
        </motion.p>
      </div>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            {project.name}
            <img width={200} height={200} src={project.image} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Wrapper(Works, "works");
