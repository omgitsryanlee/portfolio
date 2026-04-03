import { useState } from 'react';
import './Projects.css';
import { tagStyle } from '../skillColors.js';
import { projectVisibility } from '../config.js';

const projects = [
  {
    name: 'Leasing Emailer',
    tagline: 'Full Stack Email Automation',
    description:
      'A full-stack automation tool for leasing agents — parses tenant spreadsheets (CSV, TSV, XLSX), filters recipients by context (tour follow-up vs. renewal), and sends personalized emails via Gmail API. Built to replace a manual copy-paste workflow at a real leasing office.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Gmail API', 'OAuth 2.0'],
    color: 'gold',
    link: 'https://github.com/omgitsryanlee/LeasingEmailer',
  },
  {
    name: 'Priority Matrix',
    tagline: 'Full Stack Task Manager',
    description:
      'A full-stack task management app implementing the Eisenhower Matrix as an interactive real-time prioritization system. Service-oriented FastAPI backend with SQLAlchemy cleanly separates routing, business logic, and persistence.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'FastAPI', 'SQLAlchemy', 'Python'],
    color: 'white',
    link: 'https://github.com/omgitsryanlee/PriorityMatrix',
  },
  {
    name: 'Dungeon Delve',
    tagline: 'Java Roguelike Game',
    description:
      'A Java-based roguelike with procedural world generation using seeded RNG for unique, reproducible map layouts. Full 2D game interface with grid display, HUD, and save/load via file serialization.',
    tags: ['Java', 'Procedural Generation', 'File I/O'],
    color: 'black',
    link: null,
    note: 'school project — but something I worked on for fun outside of class too!',
  },
];

function ProjectCard({ p }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(f => !f)}
    >
      <div className="flip-inner">

        {/* FRONT */}
        <div className={`flip-face flip-front card project-${p.color}`}>
          <div className={`project-folder project-${p.color}`}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 className="project-name">{p.name}</h3>
          <p className="project-tagline">{p.tagline}</p>
          <div className="project-tags front-tags">
            {p.tags.map(t => (
              <span key={t} className="tag skill-tag" style={tagStyle(t)}>{t}</span>
            ))}
          </div>
          <span className="flip-hint">click to explore ✦</span>
        </div>

        {/* BACK */}
        <div className={`flip-face flip-back card project-${p.color}`}>
          <h3 className="project-name back-name">{p.name}</h3>
          <p className="project-desc">{p.description}</p>
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`btn-view-project btn-${p.color}`}
              onClick={e => e.stopPropagation()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              view on github
            </a>
          ) : p.note ? (
            <p className="project-note">{p.note}</p>
          ) : null}
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const visibleProjects = projects.filter(p => projectVisibility[p.name] !== false);

  return (
    <section className="section" id="projects">
      <h2 className="section-title">projects</h2>
      <p className="section-subtitle">// things I've built</p>

      <div className="projects-grid">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </section>
  );
}
