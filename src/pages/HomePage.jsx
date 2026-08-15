import { ArrowRight, BriefcaseBusiness, Building2, ChevronRight, CircleCheckBig, ShieldCheck, Sparkles, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '12+', label: 'Years guiding growth' },
  { value: '94%', label: 'Client retention rate' },
  { value: '320', label: 'Projects delivered' },
  { value: '24/7', label: 'Dedicated support' },
]

const services = [
  {
    icon: <TrendingUp size={22} />,
    title: 'Growth Strategy',
    description: 'Practical market positioning, commercial planning, and execution frameworks built to accelerate revenue.',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Operational Excellence',
    description: 'Process design and system optimization that improve capacity, efficiency, and day-to-day delivery.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Risk & Compliance',
    description: 'Strong governance, scalable controls, and oversight models designed to reduce operational uncertainty.',
  },
  {
    icon: <BriefcaseBusiness size={22} />,
    title: 'Executive Advisory',
    description: 'Board-ready insight, scenario planning, and leadership support for teams preparing for their next growth stage.',
  },
]

const portfolio = [
  {
    title: 'Northline Manufacturing',
    category: 'Operational transformation',
    result: '+38% throughput increase',
    description: 'Rebuilt production planning, introduced KPI dashboards, and aligned teams around a single execution model.',
  },
  {
    title: 'Harbor Logistics',
    category: 'Commercial strategy',
    result: '2.3x faster client acquisition',
    description: 'Built a sharper market entry plan and redesigned the sales engine to improve conversion and retention.',
  },
  {
    title: 'Summit Capital',
    category: 'Governance advisory',
    result: 'Reduced decision lag by 41%',
    description: 'Designed a governance system with clearer reporting lines, decision ownership, and executive oversight.',
  },
]

const values = [
  {
    icon: <Target size={20} />,
    title: 'Focused strategy',
    text: 'We simplify complexity and prioritize the decisions that create real momentum.',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'High standards',
    text: 'Every recommendation is practical, measurable, and built for sustainable implementation.',
  },
  {
    icon: <CircleCheckBig size={20} />,
    title: 'Trusted partnership',
    text: 'We work as an extension of your leadership team, not as distant consultants.',
  },
]

const testimonials = [
  {
    quote:
      'Their advisory team brought clarity to our strategy and created momentum across the entire business within a few months.',
    name: 'Sofia Raman',
    role: 'COO, Northline Manufacturing',
  },
  {
    quote:
      'The level of structure, focus, and accountability they introduced transformed how we operate and how we scale.',
    name: 'David Chen',
    role: 'Founder, Harbor Logistics',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Built for leaders who expect results</span>
            <h1>Turn business momentum into measurable growth.</h1>
            <p>
              Raga Impex partners with ambitious companies to sharpen strategy, simplify operations,
              and create long-term value across every stage of growth.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" to="/contact">
                Schedule a consultation <ArrowRight size={18} />
              </Link>
              <Link className="ghost-button" to="/about">
                Learn more
              </Link>
            </div>
            <div className="trust-row">
              <span>Trusted by SMEs and mid-market operators</span>
              <div className="mini-logos">
                <span>Atlas</span>
                <span>Northline</span>
                <span>Summit</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Business performance dashboard illustration">
            <div className="dashboard-card main-card">
              <div className="card-header">
                <span className="dot dot-green" />
                <span>Performance overview</span>
              </div>
              <div className="chart-bars">
                <span style={{ height: '32%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '40%' }} />
                <span style={{ height: '76%' }} />
                <span style={{ height: '84%' }} />
                <span style={{ height: '96%' }} />
              </div>
              <div className="stats-inline">
                <div>
                  <strong>+28%</strong>
                  <span>Revenue growth</span>
                </div>
                <div>
                  <strong>4.9/5</strong>
                  <span>Client experience</span>
                </div>
              </div>
            </div>

            <div className="dashboard-card floating-card card-a">
              <p>Quarterly pipeline</p>
              <strong>$1.4M</strong>
            </div>

            <div className="dashboard-card floating-card card-b">
              <p>Operational uplift</p>
              <strong>+41%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What we do</span>
            <h2>Strategy, execution, and leadership support that keeps momentum growing.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services">
                  Explore <ChevronRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-bg">
        <div className="container split-layout">
          <div className="content-panel">
            <span className="eyebrow">Why businesses choose us</span>
            <h2>Clear direction for complex decisions.</h2>
            <p>
              We help teams align people, process, and priorities so that growth plans become actionable business outcomes instead of abstract ideas.
            </p>

            <ul className="check-list">
              <li><CircleCheckBig size={18} /> Executive-level clarity for growth plans</li>
              <li><CircleCheckBig size={18} /> Stronger operating discipline and accountability</li>
              <li><CircleCheckBig size={18} /> Focused actions that improve short-term performance</li>
            </ul>
          </div>

          <div className="feature-panel">
            {values.map((value) => (
              <div className="feature-item" key={value.title}>
                <div className="feature-icon">{value.icon}</div>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Selected outcomes</span>
            <h2>Recent work with measurable impact.</h2>
          </div>

          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <article className="project-card" key={item.title}>
                <span className="project-category">{item.category}</span>
                <h3>{item.title}</h3>
                <strong>{item.result}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block testimonials-block">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Client feedback</span>
            <h2>Leaders trust us to bring structure to momentum.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial-card" key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">Let’s build what’s next</span>
            <h2>Ready to create a sharper growth plan for your business?</h2>
          </div>
          <Link className="primary-button" to="/contact">
            Talk to our team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
