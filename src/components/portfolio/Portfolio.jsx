import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Portfolio.scss";

const item = [
  {
    id: 1,
    title: "primarry",
    img: "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quia, consequatur eum necessitatibus magni laborum itaque nemo quam et, nesciunt beatae accusamus reprehenderit commodi inventore! Dignissimos nihil repellendus animi aliquam!",
  },
  {
    id: 2,
    title: "psecondary",
    img: "https://images.pexels.com/photos/18625018/pexels-photo-18625018/free-photo-of-model-sitting-and-posing-with-arms-crossed-on-beach.png?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quia, consequatur eum necessitatibus magni laborum itaque nemo quam et, nesciunt beatae accusamus reprehenderit commodi inventore! Dignissimos nihil repellendus animi aliquam!",
  },
  {
    id: 3,
    title: "thirster",
    img: "https://images.pexels.com/photos/20213634/pexels-photo-20213634/free-photo-of-architecture.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quia, consequatur eum necessitatibus magni laborum itaque nemo quam et, nesciunt beatae accusamus reprehenderit commodi inventore! Dignissimos nihil repellendus animi aliquam!",
  },
  {
    id: 4,
    title: "fourthr",
    img: "https://images.pexels.com/photos/20454086/pexels-photo-20454086/free-photo-of-a-person-crossing-the-street-under-an-overpass.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quia, consequatur eum necessitatibus magni laborum itaque nemo quam et, nesciunt beatae accusamus reprehenderit commodi inventore! Dignissimos nihil repellendus animi aliquam!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="ImageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="txtContainer" style={{ y }}>
            <h2>{item.title}</h2>

            <p>{item.desc}</p>
            <button>see more</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>feature work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
