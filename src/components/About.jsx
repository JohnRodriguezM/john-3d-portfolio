/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { stylesUsing } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { Wrapper } from "../HOC";
// import ServiceCard from "./ServiceCard";
import { useJsons } from "../constants";
import { useTranslation } from "react-i18next";
import { Tilt } from "react-tilt";

function About() {
  const { t } = useTranslation();
  const { services } = useJsons();
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center justify-center md:mt-20"
        //id="about"
      >
        <p className={`${stylesUsing.sectionSubText} mt-20`}>
          {t("introduction")}
        </p>
        <h2 className={stylesUsing.sectionHeadText}>{t("overview")}</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify w-5/6 mx-auto"
        variants={fadeIn("", "", 0.1, 1)}
      >
        {t("text_overview")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 lg:grid lg:grid-cols-2">
        {services.map((service, index) => (
          <>
            <Tilt
              className="cursor-pointer xs:-[250px] w-11/12 flex justify-center flex-wrap  mx-auto"
              options={{
                max: 25,
                scale: 1.05,
                speed: 500,
                glare: true,
                "max-glare": 0.5,
              }}
            >
              <motion.div
                className="w-96 mx-auto green-pink-gradient p-[1px] rounded-3xl shadow-card"
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-tertiary rounded-[10px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center flex-wrap"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 object-contain"
                  />
                  <h3
                    style={{
                      textShadow: "0px 0px 30px #fff",
                    }}
                    className="text-xl font-bold mt-4"
                  >
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </Tilt>
          </>
        ))}
      </div>
    </>
  );
}

export default Wrapper(About, "about");
