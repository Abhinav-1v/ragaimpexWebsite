import { Building2, PhoneCall } from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="inner-page section-block contact-page">
      <div className="container contact-layout">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Let’s discuss your next business move.</h1>
          <div className="contact-card-list">
            <div className="contact-card">
              <PhoneCall size={20} />
              <div>
                <strong>Call us</strong>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="contact-card">
              <Building2 size={20} />
              <div>
                <strong>Visit</strong>
                <span>18 Business Avenue, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Business email
            <input type="email" placeholder="you@company.com" />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company name" />
          </label>
          <label>
            Project goals
            <textarea rows="4" placeholder="Tell us about the opportunity or challenge you want to solve." />
          </label>
          <button type="submit" className="primary-button full-width">
            Request a consultation
          </button>
        </form>
      </div>
    </section>
  )
}
