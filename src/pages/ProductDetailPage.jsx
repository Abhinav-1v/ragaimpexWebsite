import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import { getProductById } from '../data/products'
import useCartStore from '../store/useCartStore'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const addToCart = useCartStore((state) => state.addToCart)

  if (!product) {
    return (
      <section className="inner-page section-block">
        <div className="container narrow text-center">
          <h1>Product not found</h1>
          <p>We could not find the product you are looking for.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="inner-page section-block">
      <div className="container">
        <ProductDetail product={product} addToCart={addToCart} />
      </div>
    </section>
  )
}
