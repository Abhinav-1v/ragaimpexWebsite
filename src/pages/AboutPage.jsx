export default function AboutPage() {
  return (
    <section className="inner-page section-block">
      <div className="container narrow">
        <div className="section-header center">
          <span className="eyebrow">About us</span>
          <h1>Advisory built around clear decisions and sustainable growth.</h1>
        </div>

        <div className="story-block">
          <p>
            Raga Impex was founded to help businesses move from reactive operations to confident,
            scalable growth. We work with founders, leadership teams, and established companies that
            need sharper strategic direction and more disciplined execution.
          </p>
          <p>
            Our approach combines commercial insight, operational thinking, and honest leadership
            support so your team can make faster, better decisions without losing focus on the core of
            the business.
          </p>
        </div>

        <div className="about-grid">
          <div className="info-card">
            <h3>Our mission</h3>
            <p>To help businesses turn opportunity into sustainable, measurable progress.</p>
          </div>
          <div className="info-card">
            <h3>Our approach</h3>
            <p>Deep listening, practical strategy, and hands-on execution support from concept to delivery.</p>
          </div>
          <div className="info-card">
            <h3>Our promise</h3>
            <p>Clear thinking, trusted partnership, and accountability at every stage of your roadmap.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
