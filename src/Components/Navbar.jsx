import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Animation variants
  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 8px rgb(59,130,246)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div
      className="relative md:h-[95vh] bg-no-repeat bg-center bg-cover dark:bg-gray-900 transition-colors duration-300"
      style={{ backgroundImage: "url(port2.png)" }}
    >
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isSticky
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-[90%] mx-auto h-20 max-w-7xl">
          {/* Logo */}
          <motion.div
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              SHALLOM.
            </Link>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex gap-8 lg:gap-12 font-medium">
              {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="relative cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                    activeClass="text-blue-600 dark:text-blue-400"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: darkMode ? 360 : 0 }}
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </motion.button>

            <motion.p
              className="md:hidden text-2xl cursor-pointer text-gray-700 dark:text-gray-200"
              onClick={() => setMenu(!menu)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {menu ? <IoMdClose /> : <FaBars />}
            </motion.p>
          </div>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed top-20 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl"
            >
              <ul className="flex flex-col items-center py-8 gap-6">
                {["Home", "About", "Portfolio", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setMenu(false)}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      activeClass="text-blue-600 dark:text-blue-400"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <Home darkMode={darkMode} />
    </div>
  );
}
