import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Sidebar from './componentes/Sidebar';
import Footer from './componentes/Footer';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Projects from './componentes/Projects';
import Skills from './componentes/Skills';
import Contact from './componentes/Contact';

function App() {

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home" className="min-h-screen"><Hero /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="projects" className="min-h-screen"><Projects /></section>
        <section id="skills" className="min-h-screen"><Skills /></section>
        <section id="contact" className="min-h-screen"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
