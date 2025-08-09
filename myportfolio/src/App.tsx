import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HamburgerMenu from "./components/HamburgerMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './App.css';

export default function App() {
  
   const location = useLocation();

  useEffect(() => {
    const body = document.body;
    body.classList.remove("fade-in"); 
    void body.offsetWidth;
    body.classList.add("fade-in");
  }, [location.pathname]); 


  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="main-content">
        <HamburgerMenu toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
