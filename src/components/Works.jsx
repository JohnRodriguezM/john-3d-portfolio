/*import Tilt from "react-tilt"*/
import { motion } from "framer-motion";
import { stylesUsing } from "../styles";
/*import { github } from "../assets"*/
import { Wrapper } from "../HOC";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useJsons } from "../constants";
import { Tilt } from "react-tilt";
import { github, internet } from "../assets";

const Works = () => {
  const { projects } = useJsons();
  return (
    <>
      <span id="projects">&nbsp;</span>
      <motion.div className="text-center mt-20" variants={textVariant()}>
        <p
          style={{
            textShadow: "0px 0px 10px rgba(255,255,255,255)",
          }}
          className={stylesUsing.sectionSubText}
        >
          Here are some of my projects
        </p>
        <h2 className={stylesUsing.sectionHeadText}>Works</h2>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            textShadow: "0px 0px 1.5px rgba(255,255,255,255)",
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
      <div className="flex flex-wrap mt-10 gap-7 justify-center">
        {projects.map((project, index) => {
          const { name, description, image, source_code_link, link_page } =
            project;
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className=" bg-tertiary rounded-2xl shadow-xl p-2 sm:w-[360px] cursor-pointer mt-10"
              >
                <section className="relative w-full h-[270px]">
                  <a href={link_page} target="_blank" rel="noopener noreferrer">
                    <img
                      className="rounded-2xl w-full h-full object-cover"
                      src={image}
                      alt={name}
                    />
                  </a>
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                      onClick={() => {
                        window.open(source_code_link, "_blank");
                      }}
                      className="black-gradient rounded-full w-10 h-10 flex justify-center items-center"
                    >
                      <img src={github} alt="" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex justify-start mt-[220px] ml-3 card-img_hover">
                    <div
                      onClick={() => {
                        window.open(link_page, "_blank");
                      }}
                      className="black-gradient rounded-full w-10 h-10 flex justify-center items-center"
                    >
                      <img
                        src={internet}
                        alt=""
                        className="w-8 h-8 object-cont rounded-full"
                      />
                    </div>
                  </div>
                </section>

                <div className="mt-5 ">
                  <h3 className="text-center text-white font-bold text-[22px]">
                    {name}
                  </h3>
                  <p className="text-center text-secondary text-[.9rem] mt-2 mb-2">
                    {description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Wrapper(Works, "works");
