import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML & CSS", level: 90, gradient: "from-orange-500 to-orange-400" },
  { name: "JavaScript", level: 80, gradient: "from-yellow-500 to-yellow-400" },
  { name: "React", level: 85, gradient: "from-blue-400 to-cyan-400" },
  { name: "Tailwind CSS", level: 85, gradient: "from-teal-500 to-cyan-500" },
  { name: "React Native", level: 70, gradient: "from-purple-500 to-violet-500" },
  { name: "Git & GitHub", level: 75, gradient: "from-gray-400 to-gray-300" },
];

const techStack = [
  "React", "React Native", "JavaScript", "HTML", "CSS",
  "Tailwind CSS", "Git", "GitHub", "Vite", "Figma",
];

const SkillBar = ({ name, level, gradient, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-purple-400 text-sm font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className={`bg-gradient-to-r ${gradient} h-2 rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-12 text-purple-400"
        >
          Skills
        </motion.h2>

        <div>
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-full text-sm text-gray-300 hover:text-purple-400 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
