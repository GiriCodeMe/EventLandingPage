import { useState } from 'react'

const faqs = [
  {
    q: 'Who should attend EPAM Tech Summit 2026?',
    a: 'The summit is designed for software engineers, architects, tech leads, and CTOs from mid-size to enterprise companies. Both technical practitioners and technology leaders will find highly relevant sessions and workshops.',
  },
  {
    q: 'Where is the event held?',
    a: 'The summit takes place at the Javits Center, 429 11th Ave, New York, NY 10001. It is easily accessible by subway (7 or A/C/E lines) and on-site parking is available for a daily fee.',
  },
  {
    q: 'Is lunch and refreshments included?',
    a: 'Yes! Your registration includes a networking breakfast, catered lunch, afternoon coffee breaks, and the closing networking reception with complimentary drinks on both days.',
  },
  {
    q: 'Will sessions be recorded and available after the event?',
    a: 'All keynote and panel sessions will be recorded and made available to registered attendees within two weeks of the event. Workshop recordings are available exclusively for workshop ticket holders.',
  },
  {
    q: 'What is the cancellation and refund policy?',
    a: 'Cancellations made 30+ days before the event receive a full refund. Cancellations 15–29 days prior receive a 50% refund. Within 14 days, tickets are non-refundable but are fully transferable to a colleague — just contact our support team.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know before you register</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
