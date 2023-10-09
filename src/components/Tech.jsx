import { Wrapper } from "../HOC";
//import { BallCanvas } from './canvas'
import { useJsons } from "../constants";
import { stylesUsing } from "../styles";
import { motion } from "framer-motion";


// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  const {technologies} = useJsons();
  return (
    <div className="text-center">
      <p className={`${stylesUsing.sectionSubText} mt-10`}>
        Technologies I have worked with
      </p>
      <h2 className={`${stylesUsing.sectionHeadText} mb-12 text-center`}>
        My tech stack.
      </h2>{" "}
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 text-center">
        {technologies.map((tech, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              title={tech.name}
              key={index}
              className="w-28 h-28 bg-white rounded-full mx-auto shadow shadow-blue-50  cursor-pointer"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-28 h-28  mx-auto p-5 shadow"
              />
            </motion.div>
          );
        })}{" "}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Wrapper(Tech, "tech");
