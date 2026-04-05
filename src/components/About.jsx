function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">About the Summit</h2>
            <p className="section-subtitle">Two days of insights, connections, and innovation</p>
            <p>
              EPAM Tech Summit 2026 brings together the brightest minds in enterprise software
              engineering, cloud architecture, and AI-driven development. Over two intensive days,
              you'll gain practical insights you can apply to your organization immediately.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Whether you're a CTO charting your organization's technology strategy or an engineer
              looking to level up your skills, this summit delivers actionable knowledge from
              practitioners who build at scale every day.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Join 1,200+ peers from leading technology companies, get hands-on in expert-led
              workshops, and build connections that extend well beyond the event.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">40+</span>
              <span className="stat-label">Expert Speakers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">Sessions &amp; Workshops</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Attendees</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">Days of Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
