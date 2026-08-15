import { Link } from 'react-router-dom'

export default function AccessDeniedPage() {
  return (
    <section className="inner-page section-block">
      <div className="container narrow text-center success-box">
        <span className="eyebrow">Access denied</span>
        <h1>You do not have permission to view this page.</h1>
        <p>This area is restricted to authorized user roles.</p>
        <div className="detail-actions">
          <Link className="primary-button" to="/">
            Go to home
          </Link>
          <Link className="ghost-button" to="/products">
            Explore products
          </Link>
        </div>
      </div>
    </section>
  )
}
