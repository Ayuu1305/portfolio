import { motion } from "framer-motion";
import { Section } from "./Section";
import RobotModel from "./RobotModel";

const About = () => {
  return (
    <Section id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm a passionate Full Stack Developer with a strong
                foundation in the MERN stack (MongoDB, Express.js, React.js, and
                Node.js). As a fresher in the field, I bring enthusiasm,
                creativity, and a strong desire to learn and grow in a
                professional environment.
              </p>
              <p>
                My technical expertise extends beyond the MERN stack to include
                modern technologies like Next.js, Tailwind CSS, and Python. I'm
                constantly learning and adapting to new technologies to stay
                current with industry trends and best practices.
              </p>
              <p>
                I'm eager to grab opportunities that challenge me and allow me
                to contribute to meaningful projects. My goal is to work in a
                professional environment where I can apply my skills, learn from
                experienced developers, and grow as a software engineer.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB",
                    "Express.js",
                    "React.js",
                    "Node.js",
                    "Next.js",
                    "Tailwind CSS",
                    "Python",
                    "JavaScript",
                    "TypeScript",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[800px] flex items-center justify-center"
          >
            <RobotModel />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
