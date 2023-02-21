import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Scroll from "./components/ScrollButton/Scroll";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certifications/Certificates";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Scroll />
    </div>
  );
}

export default App;
