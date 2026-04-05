function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">EPAM Tech Summit</div>
        <ul className="navbar-links">
          <li><a href="#about"        onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a></li>
          <li><a href="#program"      onClick={(e) => { e.preventDefault(); scrollTo('program') }}>Program</a></li>
          <li><a href="#speakers"     onClick={(e) => { e.preventDefault(); scrollTo('speakers') }}>Speakers</a></li>
          <li><a href="#faq"          onClick={(e) => { e.preventDefault(); scrollTo('faq') }}>FAQ</a></li>
        </ul>
        <button className="navbar-cta" onClick={() => scrollTo('registration')}>
          Register Now
        </button>
      </div>
    </nav>
  )
}

export default Navbar
