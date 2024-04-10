import React from 'react'
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './index.css';

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
