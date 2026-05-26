import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-8 text-purple-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 leading-relaxed mb-4"
        >
          I'm Muizat Hammed, a frontend developer based in Oyo, Nigeria. I build modern, responsive web applications that are clean, fast, and easy to use. My go-to tools are React, JavaScript, and Tailwind CSS — and I genuinely enjoy the process of turning an idea into something people can actually interact with.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 leading-relaxed mb-4"
        >
          I'm currently a student at Ladoke Akintola University of Technology (LAUTECH). I've built projects ranging from a Nigerian food finder app and a fitness tracker to a full e-commerce store with a working cart — each one pushing me to think more deeply about how users experience the web.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 leading-relaxed"
        >
          I'm currently looking for internship opportunities where I can contribute, learn from experienced developers, and grow. If you're working on something interesting, I'd love to be part of it.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
