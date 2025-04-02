import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { Section } from "./Section";

const skillsData = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "C", icon: TbBrandCpp, color: "text-blue-600" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        >
          Skills & Technologies
        </motion.h2>
        <p className="text-muted-foreground">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-background/5 backdrop-blur-sm border border-primary/10 rounded-xl p-6 flex flex-col items-center justify-center group hover:border-primary/30 transition-all"
          >
            <skill.icon
              className={`text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform`}
            />
            <h3 className="text-foreground font-medium">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
