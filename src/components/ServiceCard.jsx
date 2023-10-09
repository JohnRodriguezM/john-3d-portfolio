/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { motion } from 'framer-motion';
import { useJsons } from "../constants";

const ServiceCard = ({ title, index }) => {
  const { services } = useJsons();
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
          <h3
            style={{
              textShadow: "0px 0px 30px #fff",
            }}
           className="text-xl font-bold mt-4">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;