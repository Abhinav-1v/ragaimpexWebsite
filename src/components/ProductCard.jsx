import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/products/${product.id}`}>
        <img src={product.image} alt={product.imageAlt} />
      </Link>

      <div className="product-meta">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div className="product-price-row">
          <strong>${product.price}</strong>
          <span>⭐ {product.rating}</span>
        </div>
      </div>

      <div className="product-actions">
        <Link to={`/products/${product.id}`} className="secondary-button small-button">
          View details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}
