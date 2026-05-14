import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import FitnessTracker from "./pages/FitnessTracker";
import ElectricityPayment from "./pages/ElectricityPayment";
import LandingPage from "./pages/LandingPage";
import FoodApp from "./pages/FoodApp";
import EcommerceApp from "./pages/EcommerceApp";

function Portfolio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/fitness" element={<FitnessTracker />} />
      <Route path="/electricity" element={<ElectricityPayment />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/food" element={<FoodApp />} />
      <Route path="/shop" element={<EcommerceApp />} />
    </Routes>
  );
}

export default App;
