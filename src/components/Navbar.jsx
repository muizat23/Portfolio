const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50 border-b border-gray-800">
      <h1 className="font-bold text-xl text-purple-400">Muizat</h1>

      <div className="flex gap-6 text-gray-400 text-sm">
        <a href="#home" className="hover:text-purple-400 transition">Home</a>
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
