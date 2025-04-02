import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkMode", (!isDark).toString());
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            AS
          </motion.div>

          <div className="flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("skills")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

           
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
