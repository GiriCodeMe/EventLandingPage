import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Program      from './components/Program'
import Speakers     from './components/Speakers'
import FAQ          from './components/FAQ'
import Registration from './components/Registration'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <FAQ />
      <Registration />
      <footer className="footer">
        <div className="container">
          <p>© 2026 <span>EPAM Tech Summit</span>. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
