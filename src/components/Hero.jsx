function Hero() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-eyebrow">May 15–16, 2026 · New York</div>
        <h1>EPAM Tech Summit 2026</h1>
        <p className="hero-tagline">
          Where enterprise technology leaders come to shape the future of software engineering.
        </p>
        <div className="hero-meta">
          <span>📅 May 15–16, 2026</span>
          <span>📍 Javits Center, New York</span>
          <span>👥 1,200+ Attendees</span>
        </div>
        <button className="btn-primary" onClick={scrollToRegistration}>
          Register Now →
        </button>
      </div>
    </section>
  )
}

export default Hero
