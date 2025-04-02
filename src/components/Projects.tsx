import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "./Section";

const projects = [
  {
    title: "PetOnRent",
    description:
      "An innovative platform that connects pet owners with pet lovers, allowing them to rent pets for companionship. Features include pet listings, booking system, and secure user authentication.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
    github: "https://github.com/Ayuu1305/PetOnRent",
    demo: "#", // To be added later
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Shoes Store",
    description:
      "A modern e-commerce platform specializing in footwear, offering a seamless shopping experience with features like product filtering, cart management, and responsive design for all devices.",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop",
    github: "https://github.com/Ayuu1305/shoes-store",
    demo: "https://shoes-storee.vercel.app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "iNotebook",
    description:
      "A secure cloud-based note-taking application that allows users to create, edit, and organize their notes. Features include user authentication, real-time updates, and data persistence.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Ayuu1305/inotebook",
    demo: "https://inotebook-five-omega.vercel.app/login",
    tech: ["React", "MongoDB", "Node.js", "Express"],
  },
  {
    title: "Blog Project",
    description:
      "A dynamic blogging platform that enables users to create and share their stories. Features a clean, minimalist design with support for rich text editing and content categorization.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Ayuu1305/Blog-project",
    demo: "#", // To be added later
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "News App",
    description:
      "A real-time news aggregation application that provides users with the latest updates across various categories. Features include news filtering, search functionality, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Ayuu1305/newssapp",
    demo: "https://newssapp.vercel.app",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "TextUtils",
    description:
      "A powerful text manipulation tool that helps users analyze and modify text content. Features include case conversion, character counting, and various text transformation utilities.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
    github: "https://github.com/Ayuu1305/Textutils",
    demo: "https://textutils-swart-iota.vercel.app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Here are some of my featured projects that showcase my skills and
          experience in web development. Each project represents unique
          challenges and solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
