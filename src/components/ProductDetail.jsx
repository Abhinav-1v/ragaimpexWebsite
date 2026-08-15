import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductDetail({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="product-detail-layout">
      <div className="product-detail-image-wrap">
        <img src={product.image} alt={product.imageAlt} className="product-detail-image" />
      </div>

      <div className="product-detail-copy">
        <span className="product-category">{product.category}</span>
        <h1>{product.name}</h1>
        <div className="product-price-row detail-price-row">
          <strong>${product.price}</strong>
          <span>⭐ {product.rating} / 5</span>
        </div>
        <p className="product-description">{product.description}</p>

        <div className="purchase-box">
          <div className="quantity-picker">
            <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity((value) => value + 1)}>
              +
            </button>
          </div>

          <button type="button" className="primary-button" onClick={handleAddToCart}>
            Add to cart <ArrowRight size={18} />
          </button>
        </div>

        <div className="feature-list">
          {product.features.map((feature) => (
            <div key={feature} className="feature-item compact">
              <Check size={16} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="detail-actions">
          <Link to="/products" className="ghost-button">
            Back to products
          </Link>
          <Link to="/cart" className="secondary-button">
            View cart
          </Link>
        </div>
      </div>
    </div>
  )
}
