import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Shalom-Shobowale",
      color: "hover:bg-gray-800",
      label: "GitHub",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com",
      color: "hover:bg-sky-500",
      label: "Twitter",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/shalom-shobowale",
      color: "hover:bg-blue-700",
      label: "LinkedIn",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </motion.button>
      )}

      <motion.footer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 mt-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <motion.div
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                SHALLOM.
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Building exceptional digital experiences through creative
                full-stack development.
              </p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 hover:text-white`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 relative inline-block">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300 inline-block group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              custom={2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 relative inline-block">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaEnvelope className="text-blue-600 flex-shrink-0" />
                  <a
                    href="mailto:shalomshobowale65@gmail.com"
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    shalomshobowale65@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaPhone className="text-blue-600 flex-shrink-0" />
                  <a
                    href="tel:+2349038186039"
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    +234 903 818 6039
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={3}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 relative inline-block">
                Let's Connect
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Have a project in mind? Let's collaborate and create something
                amazing together.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Shobowale Shallom. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in
              Lagos, Nigeria
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
