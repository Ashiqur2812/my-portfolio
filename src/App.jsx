import { useState } from 'react';
import './App.css';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Footer from './components/Navbar/Footer';
import Hero from './components/Navbar/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Navbar/Projects';
import Skills from './components/Navbar/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20">
          <section id="home" className="h-screen flex items-center justify-center text-4xl font-bold">
            Welcome to My Portfolio
          </section>
          <section id="about" className="h-screen flex items-center justify-center text-4xl font-bold">
            About Me
          </section>
        </main>
      </div> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
