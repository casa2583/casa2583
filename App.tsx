
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Programs from './components/Programs';
import PartAdvice from './components/PartAdvice';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'history', 'programs', 'advice', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="history" className="py-20 bg-slate-50">
          <History />
        </section>

        <section id="programs" className="py-20 bg-white">
          <Programs />
        </section>

        <section id="advice" className="py-20 bg-indigo-900 text-white">
          <PartAdvice />
        </section>

        <section id="contact" className="py-20 bg-slate-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
