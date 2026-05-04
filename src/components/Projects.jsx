import electricityImg from "../assets/electricity.png";
import landingImg from "../assets/landing.png";
import dashboardImg from "../assets/dashboard.png";



const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Project Card */}
        
       <div className="bg-black rounded-xl border border-gray-800 overflow-hidden hover:scale-105 transition duration-300">

  <img
    src="https://via.placeholder.com/400"
    alt="project"
    className="w-full h-48 object-cover"
  />

  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      Electricity Payment UI
    </h3>

    <p className="text-gray-400 mb-4">
      A modern electricity payment interface built with React Native.
    </p>

    <p className="text-sm text-gray-500 mb-4">
      React Native • UI Design
    </p>

    <div className="flex gap-4">
      <a href="#" className="text-blue-400 hover:underline">
        Live
      </a>
      <a href="https://github.com/muizat23/" className="text-blue-400 hover:underline">
        GitHub
      </a>
    </div>
  </div>

</div>
        {/* Duplicate for now */}
        <div className="bg-black rounded-xl border border-gray-800 overflow-hidden hover:scale-105 transition duration-300">

  <img
    src="https://via.placeholder.com/400"
    alt="project"
    className="w-full h-48 object-cover"
  />

  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      Landing Page
    </h3>

    <p className="text-gray-400 mb-4">
      A responsive landing page built with React and Tailwind CSS.
    </p>

    <p className="text-sm text-gray-500 mb-4">
      React • Tailwind CSS
    </p>

    <div className="flex gap-4">
      <a href="#" className="text-blue-400 hover:underline">
        Live
      </a>
      <a href="https://github.com/muizat23/" className="text-blue-400 hover:underline">
        GitHub
      </a>
    </div>
  </div>

</div>

        <div className="bg-black rounded-xl border border-gray-800 overflow-hidden hover:scale-105 transition duration-300">

  <img
    src="https://via.placeholder.com/400"
    alt="project"
    className="w-full h-48 object-cover"
  />

  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      Dashboard UI
    </h3>

    <p className="text-gray-400 mb-4">
      A clean dashboard interface with cards and structured layout.
    </p>

    <p className="text-sm text-gray-500 mb-4">
      React • UI Components
    </p>

    <div className="flex gap-4">
      <a href="#" className="text-blue-400 hover:underline">
        Live
      </a>
      <a href="https://github.com/muizat23/" className="text-blue-400 hover:underline">
        GitHub
      </a>
    </div>
  </div>

</div>

      </div>
    </section>
  );
};

export default Projects;