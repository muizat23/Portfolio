import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Food Finder",
    description: "Browse and search real recipes by category using the MealDB API, with full meal details and ingredients.",
    tags: ["React", "REST API", "Tailwind CSS"],
    gradient: "from-orange-500 to-red-500",
    route: "/food",
    github: "https://github.com/muizat23?tab=repositories",
    live: null,
  },
  {
    title: "Fitness Tracker",
    description: "A workout logging app with progress charts, exercise history, and local storage persistence.",
    tags: ["React", "Recharts", "Tailwind CSS"],
    gradient: "from-green-600 to-emerald-500",
    route: "/fitness",
    github: "https://github.com/muizat23?tab=repositories",
    live: null,
  },
  {
    title: "Electricity Payment UI",
    description: "A full electricity payment flow with meter input, preset amounts, confirmation, and transaction history.",
    tags: ["React", "Tailwind CSS"],
    gradient: "from-yellow-500 to-orange-500",
    route: "/electricity",
    github: "https://github.com/muizat23?tab=repositories",
    live: null,
  },
  {
    title: "Landing Page",
    description: "A SaaS product landing page with hero, features, and pricing sections.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-teal-600 to-cyan-600",
    route: "/landing",
    github: "https://github.com/muizat23?tab=repositories",
    live: null,
  },
  {
    title: "E-Commerce Store",
    description: "A full shopping experience with product grid, category filters, cart drawer, and product modals.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-blue-600 to-indigo-600",
    route: "/shop",
    github: "https://github.com/muizat23?tab=repositories",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 hover:scale-105 transition duration-300"
            >
              <div className={`bg-gradient-to-br ${project.gradient} h-40 flex items-center justify-center`}>
                <span className="text-white/80 text-base font-semibold px-4 text-center">
                  {project.title}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-xs leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.route && (
                    <Link
                      to={project.route}
                      className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2"
                    >
                      View Project
                    </Link>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2"
                    >
                      View Project
                    </a>
                  )}
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
