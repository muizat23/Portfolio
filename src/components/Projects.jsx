import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import foodFinderImage from "../assets/images/food-finder.png";
import fitnessTrackerImage from "../assets/images/fitness-tracker.png";
import electricityImage from "../assets/images/electricity.png";
import landingPageImage from "../assets/images/landing-page.png";
import ecommerceImage from "../assets/images/ecommerce.png";
import laslesVpnImage from "../assets/images/lasles-vpn.png";

const projects = [
  {
    title: "LaslesVPN",
    description:
      "A responsive VPN landing page with authentication, pricing, testimonials, and password reset powered by Supabase.",
    tags: ["React", "Tailwind CSS", "Supabase", "React Router"],
    image: laslesVpnImage,
    route: null,
    github: "https://github.com/muizat23/lasles-vpn",
    live: "https://lasles-vpn-wiw2.vercel.app/",
  },
  {
    title: "Food Finder",
    description:
      "Browse and search real recipes by category using the MealDB API, with full meal details and ingredients.",
    tags: ["React", "REST API", "Tailwind CSS"],
    image: foodFinderImage,
    route: null,
    github: "https://github.com/muizat23?tab=repositories",
    live: "https://food-app-woad-nine.vercel.app/",
  },
  {
    title: "Fitness Tracker",
    description:
      "A workout logging app with progress charts, exercise history, and local storage persistence.",
    tags: ["React", "Recharts", "Tailwind CSS"],
    image: fitnessTrackerImage,
    route: null,
    github: "https://github.com/muizat23?tab=repositories",
    live: "https://fitness-tracker-okvc.vercel.app/",
  },
  {
    title: "Electricity Payment UI",
    description:
      "A full electricity payment flow with meter input, preset amounts, confirmation, and transaction history.",
    tags: ["React", "Tailwind CSS"],
    image: electricityImage,
    route: null,
    github: "https://github.com/muizat23?tab=repositories",
    live: "https://electricitypayment-u2n6.vercel.app/",
  },
  {
    title: "Landing Page",
    description:
      "A SaaS product landing page with hero, features, and pricing sections.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: landingPageImage,
    route: null,
    github: "https://github.com/muizat23?tab=repositories",
    live: "https://landingpage-gamma-six-24.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full shopping experience with product grid, category filters, cart drawer, and product modals.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: ecommerceImage,
    route: null,
    github: "https://github.com/muizat23?tab=repositories",
    live: "https://ecommercesite-one-liart.vercel.app/",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 hover:scale-105 transition duration-300"
            >
              {/* Project Image */}
              <div className="h-40 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Links */}
                <div className="flex gap-4">
                  {project.route && (
                    <Link
                      to={project.route}
                      className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2"
                    >
                      Live Demo
                    </Link>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm underline underline-offset-2"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm underline underline-offset-2"
                    >
                      GitHub
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