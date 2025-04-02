import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";

// Import new components
import HeroAnimation from "./components/HeroAnimation";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { Button } from "./components/ui/Button";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  console.log("App component rendering...");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "REST APIs",
  ];

  const projects = [
    {
      title: "Project 1",
      description:
        "A MERN stack application with authentication and CRUD operations.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/Ayuu1305/project1",
      demo: "#",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Project 2",
      description: "Real-time chat application built with Socket.io and React.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      github: "https://github.com/Ayuu1305/project2",
      demo: "#",
      tech: ["React", "Socket.io", "Node.js"],
    },
  ];

  console.log("Rendering App component structure...");

  return (
    <Layout>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
