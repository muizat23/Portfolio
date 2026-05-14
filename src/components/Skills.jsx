import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", icon: "🌐", color: "from-orange-500/20 to-orange-400/10 border-orange-500/30 text-orange-400" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-500/20 to-yellow-400/10 border-yellow-500/30 text-yellow-400" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-600/20 to-blue-400/10 border-blue-500/30 text-blue-400" },
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-cyan-400/10 border-cyan-500/30 text-cyan-400" },
  { name: "Next.js", icon: "▲", color: "from-gray-500/20 to-gray-400/10 border-gray-500/30 text-gray-300" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-teal-500/20 to-teal-400/10 border-teal-500/30 text-teal-400" },
  { name: "React Native", icon: "📱", color: "from-purple-500/20 to-purple-400/10 border-purple-500/30 text-purple-400" },
  { name: "Git & GitHub", icon: "🔧", color: "from-gray-400/20 to-gray-300/10 border-gray-400/30 text-gray-300" },
  { name: "Vite", icon: "🚀", color: "from-violet-500/20 to-violet-400/10 border-violet-500/30 text-violet-400" },
  { name: "Figma", icon: "🎭", color: "from-pink-500/20 to-pink-400/10 border-pink-500/30 text-pink-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-12 text-purple-400"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.07, y: -4 }}
              className={`bg-gradient-to-br ${skill.color} border rounded-2xl p-5 flex flex-col items-center gap-2 cursor-default transition duration-300`}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-sm font-medium text-white text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
