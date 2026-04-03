import { useState } from 'react';
import './Experience.css';
import { tagStyle } from '../skillColors.js';

const jobs = [
  {
    company: 'Capital One',
    logo: '/capital_one_logo.jpg',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Plano, TX',
    bullets: [
      'Automated manual loan extension processing using Java/Spring Boot, reducing turnaround from ~5 hours/day to under a minute per request',
      'Built and integrated RESTful API endpoints to support manual loan extensions, including conditional logic for solution enrollment',
      'Strengthened system reliability with solution-type validation checks and robust error handling across backend services',
      'Improved customer support workflows via TypeScript/HTML/CSS updates, enabling agents to address missed payments more efficiently',
    ],
    tags: ['Java', 'Spring Boot', 'TypeScript', 'RESTful APIs'],
    eli5: "A Capital One agent would have to manually process loan extensions one by one — a task that ate too much time. I created a feature that does that same work automatically in under a minute. I also built tools that let customer support agents more easily help people who missed payments!",
  },
  {
    company: 'Otterz',
    logo: '/otterz_logo.jpeg',
    role: 'Machine Learning Engineer Intern',
    period: 'May 2024 – Aug 2024',
    location: 'Remote',
    bullets: [
      'Replaced a fully manual IRS document extraction process by building a multi-agent LLM pipeline using GPT-4, Gemini, and Claude APIs, where agents with distinct roles (manager, engineer, critic) collaborated to extract structured tax data with higher accuracy',
      'Designed and iterated on role-based prompts to maximize each agent\'s specialization, improving precision of information extraction across hundreds of IRS instruction documents',
      'Transformed extracted data into RDF statements conforming to predefined schemas, enabling downstream interoperability across the company\'s knowledge graph pipeline',
      'Validated and QA\'d RDF output to ensure schema compliance and data completeness before production ingestion',
    ],
    tags: ['Python', 'GPT-4', 'Gemini API', 'Claude API', 'Prompt Engineering', 'Multi-Agent', 'RDF'],
    eli5: "Tax documents from the IRS are dense and hard to read — even for software. I used AI (like ChatGPT) to automatically read hundreds of these documents and pull out the important information. But instead of using just one AI, I set up a team of AIs, each playing a different role — one like a manager, one like a critic — working together to double-check each other's work and get better results. The final data was then organized so the rest of the company's systems could use it.",
  },
];

function ExperienceCard({ job }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`exp-flip-container ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(f => !f)}
      style={{ '--card-height': '320px', cursor: 'pointer' }}
    >
      <div className="exp-flip-inner">

        {/* FRONT */}
        <div className="exp-flip-face exp-flip-front card experience-card">
          <div className="exp-header">
            <div className="exp-company-row">
              {job.logo && (
                <img src={job.logo} alt={job.company} className="exp-logo" />
              )}
              <div>
                <h3 className="exp-company">{job.company}</h3>
                <p className="exp-role">{job.role}</p>
              </div>
            </div>
            <div className="exp-meta">
              <span className="exp-period">{job.period}</span>
              <span className="exp-location">{job.location}</span>
            </div>
          </div>
          <ul className="exp-bullets">
            {job.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          <div className="exp-footer">
            <div className="exp-tags">
              {job.tags.map(t => (
                <span key={t} className="tag skill-tag" style={tagStyle(t)}>{t}</span>
              ))}
            </div>
            <span className="flip-hint">click to simplify ✦</span>
          </div>
        </div>

        {/* BACK */}
        <div className="exp-flip-face exp-flip-back card experience-card">
          <div className="exp-back-header">
            <div className="exp-company-row">
              {job.logo && (
                <img src={job.logo} alt={job.company} className="exp-logo" />
              )}
              <div>
                <h3 className="exp-company">{job.company}</h3>
                <p className="exp-role">{job.role}</p>
              </div>
            </div>
            <span className="exp-back-label">// in plain english</span>
          </div>
          <p className="exp-eli5">{job.eli5}</p>
          <span className="flip-hint">click to go back ✦</span>
        </div>

      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">experience</h2>
      <p className="section-subtitle">// where I've worked :D</p>

      <div className="experience-list">
        {jobs.map((job, i) => (
          <ExperienceCard key={i} job={job} />
        ))}
      </div>
    </section>
  );
}
