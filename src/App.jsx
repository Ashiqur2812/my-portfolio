import './App.css';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Footer from './components/Navbar/Footer';
import Hero from './components/Navbar/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Navbar/Projects';
import Skills from './components/Navbar/Skills';

function App() {

  return (
    <>
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
