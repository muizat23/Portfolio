import { motion } from "framer-motion";

const projects = [
  {
    title: "Electricity Payment UI",
    description: "A modern electricity payment interface built with React Native.",
    tags: ["React Native", "UI Design"],
    gradient: "from-purple-600 to-blue-600",
    github: "https://github.com/muizat23/",
    live: null,
  },
  {
    title: "Landing Page",
    description: "A responsive landing page built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    gradient: "from-teal-600 to-cyan-600",
    github: "https://github.com/muizat23/",
    live: null,
  },
  {
    title: "Dashboard UI",
    description: "A clean dashboard interface with cards and structured layout.",
    tags: ["React", "UI Components"],
    gradient: "from-violet-600 to-pink-600",
    github: "https://github.com/muizat23/",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-12 text-purple-400"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 hover:scale-105 transition duration-300"
            >
              <div className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center`}>
                <span className="text-white/80 text-base font-semibold px-4 text-center">
                  {project.title}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
