import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  const iconHover = {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.3 },
  };

  const socialIcons = [
    {
      icon: FaGithub,
      link: "https://github.com/Shalom-Shobowale",
      color: "hover:bg-gray-800",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com",
      color: "hover:bg-blue-400",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/shalom-shobowale",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto py-20 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white dark:text-gray-300">
                Open for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white dark:text-gray-300"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Shallom
              </span>
            </motion.h1>

            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6 text-white dark:text-gray-300"
            >
              <span className="inline-block border-r-2 border-purple-600 pr-2 animate-pulse">
                Full-Stack Developer
              </span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-white dark:text-gray-400 leading-relaxed mb-8"
            >
              I craft robust, scalable web applications that solve real-world
              problems. With expertise in both frontend finesse and backend
              architecture, I build complete digital solutions that deliver
              exceptional user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
            >
              {["React", "Node.js", "MongoDB", "TailwindCSS", "Next.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ),
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 mb-8 justify-center md:justify-start"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={iconHover}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start flex-wrap"
            >
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                >
                  <FaEnvelope /> Let's Connect
                </Link>
              </motion.div>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div animate={floatAnimation} className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="space-y-2 text-sm font-mono">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-purple-600 dark:text-purple-400"
                    >
                      const developer = {"{"}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="ml-4 text-white dark:text-gray-300"
                    >
                      name: "Shallom",
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="ml-4 text-white dark:text-gray-300"
                    >
                      passion: "Web Development",
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                      className="ml-4 text-white dark:text-gray-300"
                    >
                      expertise: ["Frontend", "Backend", "UI/UX"],
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                      className="text-purple-600 dark:text-purple-400"
                    >
                      {"}"}
                    </motion.p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaCode />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <FaServer />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{ x: [0, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaMobileAlt />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-[38%] lg:left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer group"
          >
            <span className="text-sm">Scroll Down</span>
            <MdOutlineKeyboardArrowDown className="text-2xl group-hover:translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
