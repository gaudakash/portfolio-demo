import { useRef } from "react";
import "./Services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      //whileInView="animate" its apply when scroll top to down
      ref={ref}
      // animate={isInView && "animate"}
      animate={"animate"}
    >
      <motion.div className="txtContainer" variants={variants}>
        <p>
          I focus on Learning & building Project <br /> and contribute To
          Organization
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>Idea
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
            Business.
          </h1>
          <button>What WE Do ? </button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            unde suscipit vel quod blanditiis officia a quo nulla, quos dolore
            corrupti fugit mollitia error qui ea amet nostrum at! Voluptatibus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            unde suscipit vel quod blanditiis officia a quo nulla, quos dolore
            corrupti fugit mollitia error qui ea amet nostrum at! Voluptatibus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box "
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            unde suscipit vel quod blanditiis officia a quo nulla, quos dolore
            corrupti fugit mollitia error qui ea amet nostrum at! Voluptatibus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brading</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            unde suscipit vel quod blanditiis officia a quo nulla, quos dolore
            corrupti fugit mollitia error qui ea amet nostrum at! Voluptatibus!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
