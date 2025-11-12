import { useEffect, useState, useCallback } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


// Local fallback images
import frontendImg from "../../assets/about01.png";
import backendImg from "../../assets/about02.png";
import systemImg from "../../assets/about03.png";
import productImg from "../../assets/about04.png";

// ✅ Toggle: true → Demo data, false → Fetch from CMS
const USE_DEMO_DATA = true;

// ===== Motion Variants =====
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const [abouts, setAbouts] = useState([]);

  // ===== Particle Setup =====
const particlesInit = useCallback(async (engine) => {
  await loadSlim(engine);
}, []);


  // ===== Demo Data =====
  const demoCards = [
    {
      title: "Frontend Engineering",
      description:
        "Crafting intuitive, fast, and scalable user interfaces using React, Next.js, and Tailwind — where performance meets elegance. I focus on UX that converts, not just UI that looks good.",
      img: frontendImg,
    },
    {
      title: "Backend & APIs",
      description:
        "Designing secure, modular, and high-performance backends using Node.js, Spring Boot, and PostgreSQL. From REST to GraphQL, I prioritize clean architecture and reliability.",
      img: backendImg,
    },
    {
      title: "System Design & Architecture",
      description:
        "Building robust architectures suited to scale — whether monoliths, monorepos, or microservices. I emphasize fault tolerance, modularity, and maintainability across the stack.",
      img: systemImg,
    },
    {
      title: "Product Thinking & Impact",
      description:
        "I don’t just build — I solve. Every system I design aligns with business goals, user needs, and measurable outcomes. My focus is long-term sustainability and real-world impact.",
      img: productImg,
    },
  ];

  // ===== Fetch from CMS (only if USE_DEMO_DATA = false) =====
  useEffect(() => {
    if (!USE_DEMO_DATA) {
      const fetchData = async () => {
        try {
          const query = '*[_type == "abouts"]';
          const data = await client.fetch(query);
          setAbouts(data);
        } catch (error) {
          console.warn("CMS fetch failed, using demo data:", error.message);
          setAbouts([]);
        }
      };
      fetchData();
    }
  }, []);

  // ===== Decide data source =====
  const cards = USE_DEMO_DATA ? demoCards : abouts;

  const getImageSrc = (img) => {
    if (!img) return "";
    if (typeof img === "string") return img;
    if (typeof img === "object") return urlFor(img);
    return "";
  };

  return (
    <section className="about__container" id="about">
      {/* ===== Background Particles ===== */}
  {/* ===== Background Particles ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: ["#6366f1", "#a855f7", "#60a5fa"] },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              outModes: "out",
            },
          },
          detectRetina: true,
        }}
        className="about__particles"
      />

      {/* ===== Header ===== */}
      <motion.div
        className="about__intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="head-text focus-text"
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Turning <span>Ideas</span> into <br />
          <span>Impactful Systems</span>
        </motion.h2>

        <motion.p
          className="sub-text fade-in-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I’m a <span className="highlight">full-stack developer</span> who
          loves solving real-world problems — not just shipping CRUD apps.
          <br />
          From <span className="highlight">frontend performance</span> to{" "}
          <span className="highlight">system-level architecture</span>, I focus
          on creating scalable, secure, and maintainable solutions that bring
          value to people and businesses.
        </motion.p>
      </motion.div>

      {/* ===== Cards ===== */}
      <motion.div
        className="about__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="about__card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -6 }}
          >
            <div className="about__card-image">
              <img src={getImageSrc(card.img)} alt={card.title} />
            </div>

            <div className="about__card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Tagline ===== */}
      <motion.div
        className="about__tagline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p>
          💡 I believe great software is not just about code — it’s about{" "}
          <span className="highlight">clarity, scalability, and purpose.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default AppWrap(About, "about");
