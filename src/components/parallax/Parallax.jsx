import React from "react";
import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytxt = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yolan = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      // style={{
      //   background:
      //     style === "services"
      //       ? "linear - gradient(180deg, #111132 , #0c0c1d )"
      //       : "linear - gradient(180deg, #111132 , #0c0c1d )",
      // }}
    >
      <motion.h1 style={{ y: ytxt }}>
        {type === "services" ? "What We Do ?" : "What We Did ?"}
      </motion.h1>
      <motion.div className="mountain"></motion.div>
      <motion.div
        className="planents"
        style={{
          y: yolan,
          backgroundImage: `url(${
            type === "services"
              ? "src/assests/planets.png"
              : "src/assests/sun.png"
          }`,
        }}
      ></motion.div>
      <motion.div style={{ x: yolan }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
