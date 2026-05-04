const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">
      
      <h1 className="font-bold text-xl">Muizat</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#home" className="hover:text-white transition">Home</a>
        {/* <a href="#about" className="hover:text-white transition">About</a> */}
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

    </nav>
  );
};

export default Navbar;