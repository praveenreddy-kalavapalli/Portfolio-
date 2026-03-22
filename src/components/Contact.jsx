import { useState } from 'react'
import emailjs from '@emailjs/browser'

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

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
    <path
      fill="currentColor"
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.2 2.2Z"
    />
  </svg>
)

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        status: 'error',
        message: 'Email service is not configured yet.',
      })
      return
    }

    setSubmitState({
      status: 'sending',
      message: 'Sending your message...',
    })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          user_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          reply_to: formData.email,
          user_email: formData.email,
          message: formData.message,
          user_message: formData.message,
        },
        { publicKey },
      )

      setFormData({
        name: '',
        email: '',
        message: '',
      })
      setSubmitState({
        status: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Message could not be sent. Please try again in a moment.',
      })
    }
  }

  return (
    <section className="section-card" id="contact">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="section-head">
            <h2>Contact</h2>
          </div>
          <p className="section-sub">
            Open to internships, collaborations, and research opportunities in full-stack engineering and AI/ML.
          </p>

          <ul className="contact-list">
            <li>
              <a href="mailto:praveenreddykalavapalli@gmail.com">
                <MailIcon />
                <span>praveenreddykalavapalli@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+919394837363">
                <PhoneIcon />
                <span>+91 9394837363</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/praveenreddy-kalavapalli" target="_blank" rel="noreferrer">
                <GithubIcon />
                <span>github.com/praveenreddy-kalavapalli</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/praveen-reddy--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <LinkedinIcon />
                <span>linkedin.com/in/praveen-reddy--</span>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/uzaVvirqMT/" target="_blank" rel="noreferrer">
                <LeetcodeIcon />
                <span>leetcode.com/u/uzaVvirqMT</span>
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form contact-form-card" onSubmit={handleSubmit}>
          <h3 className="contact-form-title">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            aria-label="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="mini-btn send-btn" type="submit" disabled={submitState.status === 'sending'}>
            {submitState.status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {submitState.message ? (
            <p className={`contact-form-status ${submitState.status}`} aria-live="polite">
              {submitState.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
