import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Building fast, responsive web apps using React and Tailwind CSS that work seamlessly on all devices.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native that feel native on both iOS and Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Implementation",
    description: "Turning designs into pixel-perfect, animated interfaces with smooth user experiences.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description: "Connecting frontends to REST APIs and third-party services to bring apps to life with real data.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Improving load times and app performance through code splitting, lazy loading, and best practices.",
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    description: "Fixing bugs, updating features, and keeping your existing web or mobile project in great shape.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4 text-purple-400"
        >
          What I Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-12 max-w-xl"
        >
          Here's how I can help bring your ideas to life.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900 border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 group transition duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
