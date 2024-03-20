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
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 501.01 511.5"
          >
            <motion.path d="M145.23 241.93c31.31 55.96 68.11 95.64 125.54 125.55 4.98-4.48 7.64-8.17 11.76-13.51 16.29-21.45 36.58-47.2 69.81-31.68 21.68 10.97 64.29 34.03 82.31 47.39 6.86 4.82 11.82 10.9 15.16 17.81 7.09 14.71 6.17 31.58 1.67 46.85-2.32 7.86-5.7 15.65-9.71 22.71-15.05 26.44-40.04 40.23-68.87 47.72-35.05 9.07-66.72 9.32-101.56-1.42-26.29-8.13-50.72-21.27-74.05-35.67l-3.01-1.86c-11.32-7.05-23.48-14.63-35.93-23.89l-.09-.08c-23.99-18.06-48.14-40.28-70.04-65.14-20.28-23.02-38.76-48.46-53.51-75.13-13.52-24.45-23.88-50.13-29.65-76.13-8.21-37.03-7.6-79.66 10.62-113.82 21.33-39.98 60.04-56.32 103.38-52.5l1.07.13c7.49.94 14.3 5.51 17.99 12.11l49.31 83.35c4.82 6.52 7.62 13.23 8.56 20.12 3.59 26.47-18.11 42.75-36.68 56.36-6.33 4.6-13.4 9.73-14.08 10.73zm92.87-52.2c-7.4-1.91-11.85-9.48-9.94-16.88 1.91-7.41 9.48-11.86 16.88-9.94 44.1 11.5 84.18 47.81 97.88 91.55 2.27 7.31-1.8 15.1-9.12 17.37-7.31 2.28-15.1-1.8-17.37-9.12-10.82-34.54-43.55-63.93-78.33-72.98zm1.84-84.95c-7.55-1.28-12.63-8.46-11.35-16.01 1.28-7.55 8.46-12.64 16.01-11.35C329.95 92.2 405.39 164 426.66 247.63c1.89 7.43-2.61 15-10.04 16.89-7.44 1.89-15.01-2.61-16.89-10.05-18.63-73.26-84.98-136.72-159.79-149.69zm8.92-77.11c-7.61-.87-13.08-7.76-12.21-15.37.87-7.6 7.75-13.08 15.36-12.21 118.69 13.89 222.73 108.9 248.67 225.33 1.65 7.47-3.07 14.86-10.53 16.51-7.46 1.65-14.86-3.07-16.5-10.53-23.4-104.98-117.76-191.21-224.79-203.73zM119.56 255c-.47-.77-.88-1.58-1.22-2.44-8.35-21.18 8.78-33.62 24.07-44.7 7.35-5.3 20.15-13.96 23.95-22.75 2.23-5.11 1.15-8.92-2.08-13.27l-1.3-1.85-48.67-82.28c-31.03-2.17-57.86 8.63-73.25 37.45-14.84 27.81-14.58 64.08-7.93 94.08 5.1 23.01 14.5 46.13 26.85 68.47 27.53 49.8 70.27 96.95 115.63 131.16 11.04 8.23 22.87 15.62 33.89 22.48l3.07 1.92c39.75 24.7 82.66 45.09 131.23 37.92 7.42-1.09 14.86-2.47 21.87-4.28 27.72-7.21 49.33-20.63 58.18-50.69 3.15-10.7 4.66-25.46-5.59-32.87-22.42-14.64-54.45-32.46-78.35-45.11-12.33-5.49-24.51 9.95-34.45 23.04-7.16 9.36-14.86 20.05-26.28 24.33-5.6 2.1-11.4 2.04-16.92-.23l-1.86-.79C196.02 361.76 154.37 317.52 119.56 255z" />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
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
