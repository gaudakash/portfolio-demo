import { useState } from "react";
import "./Cursor.scss";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
motion;

const Cursor = () => {
  const [position, setPoition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPoition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};

export default Cursor;
