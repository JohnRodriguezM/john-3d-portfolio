import { Wrapper } from "../HOC";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useJsons } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { stylesUsing } from "../styles";
import { defaultImage } from "../assets";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line react-refresh/only-export-components
const Experience = () => {
  const { t } = useTranslation();
  const { experiences } = useJsons();
  return (
    <>
      <motion.div
        id="experience"
        variants={textVariant()}
        className="flex flex-col items-center justify-center"
      >
        <p className={`${stylesUsing.sectionSubText} mt-20`}>
          {t("what_i_have_done_so_far")}
        </p>
        <h2 className={`${stylesUsing.sectionHeadText} mb-20`}>
          {t('work_experience')}
        </h2>
      </motion.div>
      <div className="mt-6 flex flex-col">
        <VerticalTimeline
          onTimelineElementClick={(e) => console.log(e)}
          className="vertical-timeline-custom-line"
          lineColor="white"
        >
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg, color: "#fff" }}
              icon={
                <img
                  src={experience.icon ? experience.icon : defaultImage}
                  alt={experience.company_name}
                  className="w-full h-full mx-auto rounded-full"
                />
              }
            >
              <h3
                style={{
                  textShadow: "0px 0px 20px #fff",
                }}
                className="text-white text-[24px] font-bold"
              >
                {experience.title}
              </h3>
              <h4
                style={{
                  textShadow: "0px 0px 1px #fff",
                }}
                className="text-secondary text-[18px] font-semibold"
              >
                {experience.company_name}
              </h4>

             {/* <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    style={{
                      textShadow: "0px 0px 4px #fff",
                    }}
                    className="text-white-100 text-[16px] pl-1 tracking-wider"
                    key={index}
                  >
                    {point}
                  </li>
                ))}
              </ul>*/}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Wrapper(Experience, "experience");
