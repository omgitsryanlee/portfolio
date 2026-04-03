import './Skills.css';
import { tagStyle } from '../skillColors.js';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'RegEx'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Spring Boot', 'FastAPI', 'Node.js', 'Express', 'Vite', 'Angular', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Cypress', 'RESTful APIs', 'SQLAlchemy', 'GPT-4 API', 'Gemini API', 'Gmail API', 'OAuth 2.0'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">skills</h2>
      <p className="section-subtitle">// things I work with</p>

      <div className="skills-grid">
        {skillGroups.map(group => (
          <div className="card skill-group" key={group.label}>
            <div className="skill-group-header">
              <h3 className="skill-group-label">{group.label}</h3>
            </div>
            <div className="skill-tags">
              {group.skills.map(s => (
                <span key={s} className="tag skill-tag" style={tagStyle(s)}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
