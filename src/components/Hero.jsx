const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.11-1.46c-.9-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.12 2.12 0 0 0 2.9.83 2.1 2.1 0 0 1 .64-1.33c-2.22-.25-4.56-1.11-4.56-4.94a3.87 3.87 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.45 9.45 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.03 2.68c0 3.84-2.34 4.69-4.57 4.93a2.35 2.35 0 0 1 .67 1.83v2.72c0 .27.18.59.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
    <path
      fill="currentColor"
      d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.9 1.96 1.96 0 0 0 5.25 3ZM20.44 13.45c0-3.23-1.72-4.74-4.02-4.74a3.5 3.5 0 0 0-3.15 1.73V8.5H9.9V20h3.38v-6.12c0-1.61.3-3.17 2.29-3.17 1.96 0 1.99 1.83 1.99 3.28V20h3.38l-.5-6.55Z"
    />
  </svg>
)

const LeetcodeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 12h7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M11 7 8 10l3 3" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
    <path
      fill="currentColor"
      d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 3.2-8 5.34L4 8.2V7l8 5.33L20 7v1.2Z"
    />
  </svg>
)

const languageLogos = [
  { label: 'Py', name: 'Python' },
  { label: 'C++', name: 'C++' },
  { label: 'JS', name: 'JavaScript' },
  { label: 'Java', name: 'Java' },
  { label: 'C', name: 'C' },
  { label: 'R', name: 'React' },
]

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="role-chip">Software Engineer | AI & ML Enthusiast</p>
        <h1>
          K Praveen
          <span>Reddy</span>
        </h1>
        <p className="typing-line">&gt; CSE (AI & ML) Student</p>
        <p className="summary">
          Computer Science Engineering student specializing in Artificial Intelligence
          and Machine Learning at Lovely Professional University. Passionate about
          building intelligent systems, scalable applications, and solving real-world problems.
        </p>
        <div className="cta-row">
          <a href="/newpraveencv.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">Download Resume</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
        <div className="socials">
          <a className="social-icon-link" href="https://github.com/praveenreddy-kalavapalli" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a className="social-icon-link" href="https://www.linkedin.com/in/praveen-reddy--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a className="social-icon-link" href="https://leetcode.com/u/uzaVvirqMT/" target="_blank" rel="noreferrer" aria-label="LeetCode">
            <LeetcodeIcon />
          </a>
          <a className="social-icon-link" href="mailto:praveenreddykalavapalli@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="profile photo">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true"></div>
        <div className="hero-orbit hero-orbit-two" aria-hidden="true"></div>
        <div className="hero-badge" aria-hidden="true">
          AI / ML
        </div>
        <div className="photo-slot photo-slot-top">
          <div className="hero-tech-system" aria-hidden="true">
            {languageLogos.map((item, index) => (
              <div
                key={item.name}
                className={`hero-tech-orbit orbit-${index + 1}`}
                title={item.name}
              >
                <span className="hero-tech-chip">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="photo-frame">
            <div className="photo-glow-ring"></div>
            <img src="/pr.jpeg" alt="K Praveen Reddy" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
