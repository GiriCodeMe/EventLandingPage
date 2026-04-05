const schedule = [
  {
    time: '09:00',
    title: 'Registration & Networking Breakfast',
    desc: 'Pick up your badge and connect with fellow attendees over coffee and light breakfast.',
  },
  {
    time: '10:00',
    title: 'Opening Keynote: AI-Driven Engineering at Scale',
    desc: 'How leading enterprises are embedding AI across the entire software development lifecycle.',
  },
  {
    time: '11:30',
    title: 'Panel: Architecting for the Cloud-Native Future',
    desc: 'Industry leaders discuss resilience, cost optimization, and platform engineering at scale.',
  },
  {
    time: '13:00',
    title: 'Lunch & Exhibition Floor',
    desc: 'Explore partner booths and enjoy a catered lunch in the main hall.',
  },
  {
    time: '14:30',
    title: 'Workshops: DevOps, Security & Modern Frontends',
    desc: 'Choose from 6 parallel hands-on workshops led by practitioner experts.',
  },
  {
    time: '16:30',
    title: 'Closing Remarks & Networking Reception',
    desc: 'Wrap up the day with drinks, door prizes, and informal networking with speakers.',
  },
]

function Program() {
  return (
    <section className="program" id="program">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Program Schedule</h2>
          <p className="section-subtitle">Day 1 highlights — May 15, 2026</p>
        </div>
        <div className="timeline">
          {schedule.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
