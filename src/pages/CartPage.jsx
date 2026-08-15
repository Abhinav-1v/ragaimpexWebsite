import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import useCartStore from '../store/useCartStore'

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const subtotal = useCartStore((state) => state.getCartSubtotal())

  if (!cartItems.length) {
    return (
      <section className="inner-page section-block">
        <div className="container narrow text-center">
          <h1>Your cart is empty</h1>
          <p>Browse our products and add something that fits your needs.</p>
          <Link className="primary-button" to="/products">
            Explore products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="inner-page section-block">
      <div className="container cart-layout">
        <div className="cart-column">
          <div className="section-header left">
            <span className="eyebrow">Your cart</span>
            <h1>Review your selected items</h1>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQtyChange={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>

        <aside className="cart-summary">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>Free</strong>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>${subtotal}</strong>
          </div>
          <Link className="primary-button full-width" to="/checkout">
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </section>
  )
}
