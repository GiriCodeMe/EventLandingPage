const speakers = [
  {
    initials: 'SC',
    name: 'Sarah Chen',
    title: 'VP of Engineering',
    company: 'EPAM Systems',
    bio: 'Sarah leads a global team of 800+ engineers and champions AI-augmented development practices across Fortune 500 clients.',
  },
  {
    initials: 'MT',
    name: 'Michael Torres',
    title: 'Principal Cloud Architect',
    company: 'Google Cloud',
    bio: 'Michael designs large-scale distributed systems and speaks internationally on resilient, cost-efficient cloud architectures.',
  },
  {
    initials: 'AP',
    name: 'Aisha Patel',
    title: 'Head of AI Research',
    company: 'DeepMind',
    bio: 'Aisha leads applied AI research teams focused on practical enterprise applications of large language models and agents.',
  },
  {
    initials: 'JO',
    name: "James O'Brien",
    title: 'Chief Technology Officer',
    company: 'FinTech Innovations',
    bio: 'James scaled a fintech platform to 50M users and is a frequent keynote speaker on platform engineering and team culture.',
  },
]

function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Featured Speakers</h2>
          <p className="section-subtitle">Learn from industry leaders who build at scale</p>
        </div>
        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div className="speaker-card" key={i}>
              <div className="speaker-avatar">{s.initials}</div>
              <div className="speaker-name">{s.name}</div>
              <div className="speaker-title">{s.title}</div>
              <div className="speaker-company">{s.company}</div>
              <p className="speaker-bio">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
