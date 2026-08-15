import { BriefcaseBusiness, Building2, ShieldCheck, TrendingUp } from 'lucide-react'

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

const process = [
  'Listen closely to your business context and goals.',
  'Map operational gaps, risks, and high-impact opportunities.',
  'Design an execution plan with measurable milestones.',
  'Support delivery with practical leadership and reporting.',
]

export default function ServicesPage() {
  return (
    <section className="inner-page section-block">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Services</span>
          <h1>Focused support for ambitious businesses.</h1>
        </div>

        <div className="service-grid large">
          {services.map((service) => (
            <article className="service-card expanded" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="process-panel">
          <div className="section-header left">
            <span className="eyebrow">Our process</span>
            <h2>A simple working model designed for clarity.</h2>
          </div>

          <ol className="process-list">
            {process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
