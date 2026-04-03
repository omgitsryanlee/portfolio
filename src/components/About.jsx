import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">about_me</h2>
      <p className="section-subtitle">// the human behind the code</p>

      <div className="about-grid">
        <div className="card about-card">
          <p>
            I'm a <span className="highlight">CS student at UC Berkeley</span>,
            passionate about building software that's both technically rigorous and genuinely useful.
            I care about clean architecture, good API design, and the small details that make software feel{' '}
            <span className="highlight-pink">intuitive and enjoyable</span> to use.
          </p>
          <p style={{ marginTop: '16px' }}>
            When I'm not coding, I'm on the volleyball court, gaming with friends, or deep in a feel-good playlist.
          </p>
        </div>

        <div className="about-photo-wrapper">
          <img src="/pic1.JPEG" alt="Ryan Lee" className="about-photo" />
        </div>

        <div className="about-stats">
          <div className="stat-card card">
            <span className="stat-num">2</span>
            <span className="stat-label">internships</span>
          </div>
          <div className="stat-card card">
            <span className="stat-num">2+</span>
            <span className="stat-label">espressos/day</span>
          </div>
          <div className="stat-card card">
            <span className="stat-num">404</span>
            <span className="stat-label">sleep not found</span>
          </div>
          <div className="stat-card card">
            <span className="stat-num">dark</span>
            <span className="stat-label">theme only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
