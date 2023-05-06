import { Wrapper } from "../HOC";
//import { BallCanvas } from './canvas'
import { technologies } from "../constants";
import { stylesUsing } from "../styles";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="text-center">
      <p className={`${stylesUsing.sectionSubText} mt-10`}>
        Technologies I have worked with
      </p>
      <h2 className={`${stylesUsing.sectionHeadText} mb-12 text-center`}>
        My tech stack.
      </h2>
      {" "}
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 text-center">


        {technologies.map((tech, index) => {
          return (<div
            title={
              tech.name
            } key={index} className="w-28 h-28">

            <BallCanvas icon={tech.icon} />
          </div>);
        })}{" "}
      </div>
    </div>
  );
};

export default Wrapper(Tech, "tech");
