import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50 border-b border-gray-800">
      <h1 className="font-bold text-xl text-purple-400">MH</h1>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-col gap-1.5 p-2 group"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-400 group-hover:bg-purple-400 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-gray-400 group-hover:bg-purple-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-gray-400 group-hover:bg-purple-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 w-48 bg-gray-900 border border-gray-800 rounded-bl-2xl shadow-xl py-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-400 hover:text-purple-400 hover:bg-gray-800/50 transition text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
