import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-red text-white min-h-screen  ">
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;