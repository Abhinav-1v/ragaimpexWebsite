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

export default function ProjectsPage() {
  return (
    <section className="inner-page section-block">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Projects</span>
          <h1>Examples of transformation that made an operational difference.</h1>
        </div>

        <div className="portfolio-grid large">
          {portfolio.map((item) => (
            <article className="project-card feature" key={item.title}>
              <span className="project-category">{item.category}</span>
              <h3>{item.title}</h3>
              <strong>{item.result}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
