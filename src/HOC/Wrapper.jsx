import { motion } from "framer-motion";

import { stylesUsing } from "../styles";
import { staggerContainer } from "../utils/motion";

const Wrapper = (Component, idName, option) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.05 }}
        className={option ?? `${stylesUsing.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default Wrapper;