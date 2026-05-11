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
          I am a passionate and detail-oriented frontend developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital experiences using React, JavaScript, and Tailwind CSS to create clean and visually appealing interfaces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 leading-relaxed mb-4"
        >
          As a student of Ladoke Akintola University of Technology, I have developed a solid foundation in web development and continuously strive to improve my skills by working on practical projects — including an eCommerce platform to better understand application structure, user interaction, and performance optimization.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 leading-relaxed"
        >
          I am highly motivated, adaptable, and committed to continuous learning. I am currently seeking internship opportunities where I can apply my knowledge, gain hands-on experience, and contribute to meaningful projects while growing as a developer.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
