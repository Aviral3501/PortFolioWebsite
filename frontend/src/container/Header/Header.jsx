"use client";
import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import { TypeAnimation } from "react-type-animation";

/* =======================
   Animation Variants
======================= */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

/* =======================
   Component
======================= */
const Header = () => {
  return (
    <section className="header__container app__flex" id="home">
      {/* ====== Left Info Section ====== */}
      <motion.div
        className="header__info"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp(0.2)}
      >
{/* ====== Greeting Section ====== */}
<motion.div
  className="header__badge app__flex"
  variants={fadeUp(0.2)}
  initial="hidden"
  whileInView="visible"
>
  <span className="wave">👋</span>
  <div className="intro__text">
    <p className="p-text">Hey there, I’m</p>
    <h1 className="head-text rainbow-text">Aviral Singh</h1>
    <p className="tagline">
      Passionate Full-Stack Developer | Problem Solver | Constant Learner
    </p>
  </div>
</motion.div>

{/* ====== Dynamic Role Animation ====== */}
<motion.div
  className="tag-cmp app__flex"
  variants={fadeUp(0.4)}
  initial="hidden"
  whileInView="visible"
>
  <TypeAnimation
    sequence={[
      "Building reliable backend systems ⚙️",
      1800,
      "Designing clean and functional UIs ✨",
      1800,
      "Turning ideas into working products 💡",
      1800,
      "Exploring new tools to build faster 🚀",
      1800,
      "Evolving every day as a developer 🌱",
      2200,
    ]}
    speed={50}
    deletionSpeed={35}
    wrapper="p"
    repeat={Infinity}
    className="flipping-text"
  />
</motion.div>

{/* ====== Description Section ====== */}
<motion.p
  className="p-text description"
  variants={fadeUp(0.6)}
  initial="hidden"
  whileInView="visible"
>
  <span>A{" "}</span>
  <span className="highlight">Full-Stack Developer</span> who loves creating
  real-world solutions that actually help people.  
  From <span className="highlight">responsive front-ends</span> to{" "}
  <span className="highlight">robust backend APIs</span>, I focus on clean code,
  scalability, and meaningful impact.  
  I’m constantly learning, building, and pushing myself to deliver products that
  make a difference.
</motion.p>


        {/* ====== Core Skills ====== */}
        <motion.div
          className="skills-badges"
          variants={fadeUp(0.8)}
          initial="hidden"
          whileInView="visible"
        >
          {[
            "MERN Stack",
            "Next.js",
            "React.js",
            "Node.js",
            "PostgreSQL",
            "Mongo DB",
            "MySQL",
            "REST & GraphQL APIs",
            "Monorepo",
            "Microservices",
            "Cloud Deployment",
            "CI/CD",
            "System Design",
          ].map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="badge glass-badge"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* ====== CTA Buttons ====== */}
        <motion.div
          className="cta-buttons"
          variants={fadeUp(1)}
          initial="hidden"
          whileInView="visible"
        >
          <a href="#work" className="cta-btn primary-btn">
            View My Work
          </a>
          <a href="#contact" className="cta-btn secondary-btn">
            Let’s Collaborate
          </a>
        </motion.div>
      </motion.div>

{/* ====== Right Section (Tech Circles) ====== */}
{/* ====== Interactive Tech Cluster ====== */}
<motion.div
  className="tech-cluster"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {[images.javascript,images.react,images.python,images.typescript,images.flutter, images.redux, images.git, images.node, images.graphql].map(
    (icon, index) => (
      <motion.div
        key={index}
        className="tech-orb"
        animate={{
          y: [0, -10, 0],
          x: [0, index % 2 === 0 ? 8 : -8, 0],
        }}
        transition={{
          duration: 3 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.8 },
        }}
      >
        <div className="orb-glow" />
        <img src={icon} alt="tech-icon" />
        <motion.span
          className="orb-tooltip"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {["Flutter", "Redux", "Sass", "Git", "Node.js", "GraphQL","Bolt"][index]}
        </motion.span>
      </motion.div>
    )
  )}
</motion.div>





    </section>
  );
};

export default AppWrap(Header, "home");
