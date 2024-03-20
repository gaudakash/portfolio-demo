import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerchildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerchildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const item = ["Homepage", "Services", "Portfolio","Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {item.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
