import { useState } from 'react'

function Registration() {
  const [form, setForm]         = useState({ name: '', email: '', company: '' })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Full name is required'
    if (!form.email.trim())   errs.email   = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              errs.email   = 'Please enter a valid email address'
    if (!form.company.trim()) errs.company = 'Company name is required'
    return errs
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="registration" id="registration">
      <div className="container">
        <div className="registration-inner">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Register for the Summit</h2>
            <p className="section-subtitle">Secure your spot — seats are limited</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>You're registered!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>! A confirmation has been sent to{' '}
                <strong>{form.email}</strong>. We look forward to seeing you at EPAM Tech Summit 2026.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="company">Company *</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={handleChange}
                  className={errors.company ? 'error' : ''}
                />
                {errors.company && <div className="form-error">{errors.company}</div>}
              </div>

              <button type="submit" className="btn-submit">
                Register Now →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Registration
