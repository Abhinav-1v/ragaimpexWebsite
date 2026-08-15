import { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.cartItems)
  const subtotal = useCartStore((state) => state.getCartSubtotal())
  const clearCart = useCartStore((state) => state.clearCart)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    clearCart()
  }

  if (!cartItems.length && !isSubmitted) {
    return (
      <section className="inner-page section-block">
        <div className="container narrow text-center">
          <h1>Your cart is empty</h1>
          <p>Add a product before continuing to checkout.</p>
          <Link className="primary-button" to="/products">
            Continue shopping
          </Link>
        </div>
      </section>
    )
  }

  if (isSubmitted) {
    return (
      <section className="inner-page section-block">
        <div className="container narrow text-center success-box">
          <h1>Order placed successfully</h1>
          <p>Your order has been confirmed and a confirmation email is on its way.</p>
          <Link className="primary-button" to="/products">
            Shop more products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="inner-page section-block">
      <div className="container checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="section-header left">
            <span className="eyebrow">Checkout</span>
            <h1>Complete your order</h1>
          </div>

          <label>
            Full name
            <input type="text" placeholder="Your full name" required />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Shipping address
            <textarea rows="4" placeholder="Street, city, state, postal code" required />
          </label>
          <label>
            Card details
            <input type="text" placeholder="1234 5678 9012 3456" required />
          </label>

          <button type="submit" className="primary-button full-width">
            Confirm order
          </button>
        </form>

        <aside className="cart-summary">
          <h3>Order summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-row compact-row">
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>${item.price * item.quantity}</strong>
            </div>
          ))}
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>${subtotal}</strong>
          </div>
        </aside>
      </div>
    </section>
  )
}
