const aboutCodeLines = [
  { content: ['def ', 'praveen_profile', '():'] },
  { content: ['    return {'] },
  { content: ['        ', "'role'", ': ', "'AI/ML Engineer & Full-Stack Developer'", ','] },
  { content: ['        ', "'education'", ': ', "'B.Tech CSE (AI & ML) @ LPU'", ','] },
  { content: ['        ', "'languages'", ': ', "['Python', 'Java', 'C++', 'C']", ','] },
  { content: ['        ', "'web'", ': ', "['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React']", ','] },
  { content: ['        ', "'core_cs'", ': ', "['DSA', 'DBMS', 'OS', 'Computer Networks']", ','] },
  { content: ['        ', "'focus'", ': ', "'Intelligent systems and scalable applications'", ''] },
  { content: ['    }'] },
]

function About() {
  return (
    <section className="section-card" id="about">
      <div className="section-head">
        <h2>About Me</h2>
      </div>

      <div className="about-layout">
        <div className="about-main">
          <p className="about-copy">
            Hi, I'm K Praveen Reddy - a Computer Science Engineering student specializing in
            AI & ML at Lovely Professional University. I'm a builder at heart, with hands-on
            experience in Python, Java, C++, and web technologies.
          </p>
          <p className="about-copy">
            I've built projects like a Dynamic Contact Tracing App using graph algorithms and
            AES encryption, and a Quantum Neural Network simulation using hybrid quantum-classical
            architecture. I'm comfortable working across the stack - from frontend with HTML/CSS
            to practical development workflows and deployment tools.
          </p>
          <p className="about-copy">
            When I'm not coding, I'm sharpening my skills in data structures, databases, and
            networking while continuously learning new technologies.
          </p>
        </div>

        <aside className="about-side-card" aria-label="About details">
          <div className="about-code-block">
            {aboutCodeLines.map((line, lineIndex) => (
              <div key={`about-line-${lineIndex}`} className="about-code-line">
                <code className="about-code-text">
                  {line.content.map((part, index) => {
                    let className = 'about-code-plain'

                    if (part === 'def ') className = 'about-code-keyword'
                    else if (part === 'praveen_profile') className = 'about-code-function'
                    else if (part === "'role'" || part === "'education'" || part === "'languages'" || part === "'web'" || part === "'core_cs'" || part === "'focus'") className = 'about-code-property'
                    else if (part.startsWith("'") && part.includes(':') === false) className = 'about-code-string'
                    else if (part.startsWith('[')) className = 'about-code-array'
                    else if (part === ': ') className = 'about-code-plain'

                    return (
                      <span key={`about-part-${lineIndex}-${index}`} className={className}>
                        {part}
                      </span>
                    )
                  })}
                </code>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About
