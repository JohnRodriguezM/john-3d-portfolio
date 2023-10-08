/*import { motion } from "framer-motion";

import { ComputerCanvas } from './canvas'*/
import { useEffect } from 'react'
import { stylesUsing } from '../styles'
import ComputersCanvas from './canvas/Computers'
/*import { motion } from 'framer-motion';*/
import { motion } from 'framer-motion'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
const Hero = () => {
  useEffect(() => {
    document.addEventListener('resize', () => {
      console.log('resize')
    })
  }, [])


  return (
    /*h-[99vh]*/
    <section className="relative w-full h-screen mx-auto">
      <div className={`${stylesUsing.paddingX} absolute inset-0 top-[120px] maz-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <motion.a
            initial={{ opacity: .1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
              duration: .5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1.5,
              ease: "easeInOut"

            }}

            href="#about"
            className="text-[#915eff] z-[999999] text-4xl"
          > <BsFillArrowDownCircleFill /> </motion.a>
          <h1 className={`${stylesUsing.heroHeadText}`}>Hi, I´m &nbsp;
            <span className="text-[#915eff]">John</span>
          </h1>
          <p className={`${stylesUsing.heroSubText} mt-2 text-white-100`}>
            Full-Stack Developer passionate <br /> about technology and programming.
            <br />
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero