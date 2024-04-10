import React from "react";
import { useRef, useState } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [Success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5612vfm", "template_03r6qtg", formRef.current, {
        publicKey: "ZRBpe_F3HDIzQmVsM",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="txtContainer" variants={variants}>
        <motion.h1>Lets Work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <motion.h2>Mail</motion.h2>
          <motion.span>akashgauda16@gmail.com</motion.span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <motion.h2>add</motion.h2>
          <motion.span>Kurla West ,Mumbai , Maharashtra </motion.span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <motion.h2>Phone</motion.h2>
          <motion.span>+91 8454957103</motion.span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 2 }}
        >
          <img
            src="src/assests/callring.gif"
            className="phoneSvg"
            alt="shap-svgico"
          />
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <input type="txt" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            placeholder="Hire Me / any Work For Me"
            rows="{8}"
            name="message"
          ></textarea>
          <button>Submit</button>
          {error && "Error"} {Success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
