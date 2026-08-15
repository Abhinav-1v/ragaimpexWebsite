import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function ProductsPage() {
  return (
    <section className="inner-page section-block">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Products</span>
          <h1>Premium solutions designed for modern teams.</h1>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
