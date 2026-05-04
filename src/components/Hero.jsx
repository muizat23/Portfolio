import { motion } from "framer-motion";
const Hero = () => {
    
    return (
  <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-blue-400">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Muizat Hammed
      </h1>

      <p className="text-lg md:text-2xl text-black mb-6">
        Frontend Developer | React & React Native
      </p>

      <p className="text-gray-500 max-w-md mb-8">
        I build responsive and modern web & mobile applications.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/muizat23/"
          className="px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;