import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Muizat Hammed
        </h1>

        <p className="text-lg md:text-2xl text-purple-400 mb-6 font-medium">
          Frontend Developer
        </p>

        {/* <p className="text-gray-400 max-w-md mb-10">
          I build responsive and modern web & mobile applications.
        </p> */}

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-300 font-medium"
          >
            View Projects
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-600 hover:border-purple-500 hover:text-purple-400 rounded-full transition duration-300"
          >
            Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
