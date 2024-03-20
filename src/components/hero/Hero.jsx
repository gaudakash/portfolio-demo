import "./Hero.scss";
import { motion } from "framer-motion";

const txtvarients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Slidertxt = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-420%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="txtContainer"
          variants={txtvarients}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={txtvarients}>demo portfolio</motion.h2>
          <motion.h1 variants={txtvarients}>Frontend Web Developer</motion.h1>
          <motion.div variants={txtvarients} className="buttons">
            <motion.button variants={txtvarients}>See My Work</motion.button>
            <motion.button variants={txtvarients}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={txtvarients}
            animate="scrollbtn"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingtxtContainer"
        variants={Slidertxt}
        initial="initial"
        animate="animate"
      >
        Frontend Developer Learner and a Tech Enthusiast
      </motion.div>
      <div className="imageContainer">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
