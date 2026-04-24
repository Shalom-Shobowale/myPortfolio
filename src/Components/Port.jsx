import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { FaBullseye, FaRocket, FaPaintBrush, FaShoppingCart,FaFolder  } from "react-icons/fa";
import Card from "./Card";

export default function Port() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/productData.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        let projectsArray = [];
        if (data.projects) {
          projectsArray = data.projects;
        } else if (data.products) {
          projectsArray = data.products;
        } else if (Array.isArray(data)) {
          projectsArray = data;
        } else {
          console.error("Unexpected data format:", data);
          projectsArray = [];
        }

        setProjects(projectsArray);
        setError(null);
      } catch (error) {
        console.error("Error loading projects:", error);
        setError("Failed to load projects. Please try again later.");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

const filters = [
  { id: "all", label: "All Projects", icon: <FaBullseye /> },
  { id: "fullstack", label: "Full Stack", icon: <FaRocket /> },
  { id: "frontend", label: "Frontend", icon: <FaPaintBrush /> },
  { id: "ecommerce", label: "E-Commerce", icon: <FaShoppingCart /> },
];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96" id="portfolio">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Loading amazing projects...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20" id="portfolio">
        <div className="text-red-600 dark:text-red-400">
          <p className="text-xl mb-2">⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 flex gap-2 items-center">
              <FaFolder /> My Work
            </span>
          </motion.div>

          <h1 className="font-bold text-4xl md:text-5xl mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>

          <p className="font-semibold text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my best works. Each project represents a unique
            challenge solved with creativity and technical excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === filterItem.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span>{filterItem.icon}</span>
              {filterItem.label}
            </motion.button>
          ))}
        </div>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map(
              (project, index) =>
                project && (
                  <Card
                    key={project.id || index}
                    project={project}
                    index={index}
                  />
                ),
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-20">
            <p className="text-xl">🔍 No projects found in this category</p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 text-blue-600 hover:underline"
            >
              View all projects
            </button>
          </div>
        )}
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/Shalom-Shobowale"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            View All on GitHub
            <BsArrowUpRight className="text-xl" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
