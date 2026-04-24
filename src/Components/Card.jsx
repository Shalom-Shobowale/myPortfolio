import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaNodeJs,
  FaLeaf,
  FaBolt,
  FaTrain,
} from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { DiReact, DiJavascript1 } from "react-icons/di";

import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { MdOutlineCode } from "react-icons/md";
export default function Card({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const safeProject = {
    image: project?.image || "/placeholder.jpg",
    liveLink: project?.liveLink || "#",
    githubLink: project?.githubLink || "#",
    category: project?.category || "project",
    title: project?.title || "Untitled Project",
    description: project?.description || "No description available",
    technologies: project?.technologies || [],
    features: project?.features || [],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: (index || 0) * 0.1,
      },
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const getTechIcon = (tech) => {
    const icons = {
      React: <DiReact />,
      "Next.js": <SiNextdotjs />,
      Nodejs: <FaNodeJs />,
      MongoDB: <SiMongodb />,
      TailwindCSS: <SiTailwindcss />,
      JavaScript: <DiJavascript1 />,
      TypeScript: <SiTypescript />,
      Express: <FaTrain />,
    };

    return icons[tech] || <MdOutlineCode />;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden h-64">
        <motion.div
          variants={imageVariants}
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${safeProject.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={safeProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <FaExternalLinkAlt />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={safeProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
            {safeProject.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {safeProject.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {safeProject.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {safeProject.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
            >
              <span>{getTechIcon(tech)}</span>
              {tech}
            </span>
          ))}
        </div>

        {safeProject.features && safeProject.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
              KEY FEATURES:
            </h4>
            <div className="flex flex-wrap gap-1">
              {safeProject.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={safeProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
          >
            <FiEye /> Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={safeProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-sm text-gray-700 dark:text-gray-300 hover:border-gray-400 transition-all"
          >
            <FaGithub /> Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
