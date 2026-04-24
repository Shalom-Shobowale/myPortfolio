import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaLeaf,
  FaStar,
  FaHandsHelping,
  FaLightbulb,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";
import {
  BsBookFill,
  BsFlagFill,
  BsCpu,
  BsLightningFill,
  BsBoxSeam,
  BsTriangleFill,
} from "react-icons/bs";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiReact, DiJavascript1 } from "react-icons/di";
import {
  MdEmail,
  MdSchool,
  MdWork,
  MdVerified,
  MdOutlineSchool,
  MdOutlineCode,
} from "react-icons/md";
import { FiAward, FiUsers, FiHeart, FiLayers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [openTab, setOpenTab] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabClick = (id) => {
    setOpenTab(id);
  };

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

  const imageVariants = {
    hidden: { x: -100, opacity: 0, rotateY: -90 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2 },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 200 },
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const skillsData = [
    {
      name: "HTML",
      icon: <BsBookFill />,
      color: "from-orange-500 to-red-500",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 />,
      color: "from-yellow-500 to-orange-500",
      level: 85,
    },
    {
      name: "React",
      icon: <DiReact />,
      color: "from-cyan-500 to-blue-500",
      level: 88,
    },
    {
      name: "Next.js",
      icon: <BsTriangleFill />,
      color: "from-gray-700 to-gray-900",
      level: 82,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "from-green-500 to-emerald-500",
      level: 80,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "from-green-600 to-teal-500",
      level: 78,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
      color: "from-blue-500 to-cyan-500",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-600 to-indigo-500",
      level: 75,
    },
  ];

  const achievements = [
    {
      icon: FiUsers,
      value: "10+",
      label: "Projects Completed",
      color: "text-blue-500",
    },
    {
      icon: MdVerified,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-green-500",
    },
    {
      icon: FiAward,
      value: "5+",
      label: "Certifications",
      color: "text-purple-500",
    },
    { icon: FiHeart, value: "24/7", label: "Support", color: "text-red-500" },
  ];

  return (
    <div className="relative py-20 overflow-hidden" id="about">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for
            creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-5/12 lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-yellow-500">
                <div
                  className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/Shallom.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Available for work
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-1 left-4 right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <achievement.icon
                          className={`text-2xl ${achievement.color} mx-auto mb-1`}
                        />
                        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {achievement.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {achievement.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-7/12 min-w-0">
            <motion.div
              variants={itemVariants}
              className="flex gap-3 mb-8 border-b border-gray-200 dark:border-gray-700"
            >
              {[
                { id: 1, label: `About Me`, icon: <BsBookFill /> },
                { id: 2, label: "Skills & Tools", icon: <BsCpu /> },
                { id: 3, label: "Mission & Values", icon: <BsFlagFill /> },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTabClick(tab.id)}
                  className={`lg:px-6 lg:py-3 rounded-t-lg font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 ${
                    openTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  {tab.icon} {tab.label}
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {openTab === 1 && (
                <motion.div
                  key="about"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      I'm Shobowale Shallom
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed break-words">
                      <p className="text-justify">
                        A passionate{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400 ">
                          Full Stack Developer
                        </span>{" "}
                        with a keen eye for design and a love for solving
                        complex problems. I specialize in building modern,
                        responsive web applications that deliver exceptional
                        user experiences.
                      </p>
                      <p className="text-justify">
                        With expertise across the entire development stack, I
                        bridge the gap between beautiful frontend interfaces and
                        robust backend systems. My approach combines technical
                        excellence with creative problem-solving to create
                        solutions that truly make a difference.
                      </p>
                      <p className="text-justify">
                        When I'm not coding, you'll find me exploring new
                        technologies, contributing to open-source projects, or
                        sharing knowledge with the developer community. I
                        believe in continuous learning and staying at the
                        forefront of web development trends.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="grid sm:grid-cols-2 gap-4 pt-4"
                  >
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl min-w-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Phone
                        </p>
                        <a
                          href="tel:+234-903-818-6039"
                          className="font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600"
                        >
                          (+234) 903-818-6039
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <MdEmail className="text-purple-600 dark:text-purple-400 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <a
                          href="mailto:shalomshobowale65@gmail.com"
                          className="font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 break-all"
                        >
                          shalomshobowale65@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Location
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                        <MdWork className="text-orange-600 dark:text-orange-400 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Experience
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          2+ Years Professional
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex gap-3 pt-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="https://github.com/Shalom-Shobowale"
                      target="_blank"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="https://www.linkedin.com/in/shalom-shobowale"
                      target="_blank"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaLinkedin />
                    </motion.a>
                  </motion.div>
                </motion.div>
              )}

              {openTab === 2 && (
                <motion.div
                  key="skills"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold mb-3">
                      Technical Skills
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      I'm constantly learning and expanding my toolkit to stay
                      current with industry trends and best practices.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skillsData.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        custom={index}
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="group relative"
                      >
                        <div
                          className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl`}
                        >
                          <div className="text-3xl mb-2">{skill.icon}</div>
                          <div className="text-white font-semibold">
                            {skill.name}
                          </div>
                          <div className="text-white/80 text-sm mt-1">
                            {skill.level}%
                          </div>
                          <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-white rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1, duration: 1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
                  >
                    <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                      Tools & Technologies I Work With:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "VS Code",
                        "Postman",
                        "Docker",
                        "AWS",
                        "Figma",
                        "Jest",
                        "Webpack",
                      ].map((tool, idx) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {openTab === 3 && (
                <motion.div
                  key="mission"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold mb-4">
                      My Mission & Core Values
                    </h3>
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                        <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <span>
                            <FaBullseye />
                          </span>{" "}
                          Mission Statement
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          To leverage my full-stack development expertise in
                          creating innovative, scalable, and user-centric web
                          applications that solve real-world problems and
                          enhance digital experiences for users worldwide.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-4">
                          Core Values
                        </h4>
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Quality First",
                              desc: "Writing clean, maintainable, and well-documented code",
                              icon: <MdOutlineCode />,
                            },
                            {
                              title: "Continuous Learning",
                              desc: "Staying updated with latest technologies and best practices",
                              icon: <MdOutlineSchool />,
                            },
                            {
                              title: "User-Centric",
                              desc: "Building applications with end-users in mind",
                              icon: <FaUsers />,
                            },
                            {
                              title: "Innovation",
                              desc: "Finding creative solutions to complex problems",
                              icon: <FaLightbulb />,
                            },
                            {
                              title: "Collaboration",
                              desc: "Working effectively in teams and sharing knowledge",
                              icon: <FaHandsHelping />,
                            },
                            {
                              title: "Integrity",
                              desc: "Being honest, transparent, and reliable",
                              icon: <FaStar />,
                            },
                          ].map((value, idx) => (
                            <motion.div
                              key={value.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                            >
                              <span className="text-2xl">{value.icon}</span>
                              <div>
                                <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                                  {value.title}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {value.desc}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        variants={itemVariants}
                        className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl text-center"
                      >
                        <h4 className="text-lg font-semibold mb-2">
                          💬 Let's Build Something Amazing Together
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          I'm always open to discussing new projects, creative
                          ideas, or opportunities to be part of your vision.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
