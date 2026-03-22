import './App.css'
import About from './components/About'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import CircuitBackground from './components/CircuitBackground'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Training from './components/Training'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'TRAINING', href: '#training' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CERTIFICATES', href: '#certificates' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
]

function App() {
  return (
    <>
      <CircuitBackground />
      <div className="page-shell">
        <header className="topbar">
          <a className="logo" href="#home">praveen.dev</a>
          <nav>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </header>

        <Hero />
        <About />
        <Skills />
        <Training />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
