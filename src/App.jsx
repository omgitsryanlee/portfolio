import { useState, useEffect } from 'react';
import Navbar     from './components/Navbar.jsx';
import Intro      from './components/Intro.jsx';
import About      from './components/About.jsx';
import Skills     from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects   from './components/Projects.jsx';
import Contact    from './components/Contact.jsx';
import { features } from './config.js';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Intro />
        <About />
        {features.showSkills     && <Skills />}
        {features.showExperience && <Experience />}
        {features.showProjects   && <Projects />}
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '32px 24px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border)',
      }}>
        <span>built by <span style={{ color: 'var(--accent)' }}>ryan lee</span> · {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
