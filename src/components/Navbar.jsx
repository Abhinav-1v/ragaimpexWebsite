import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import useAuthStore from '../store/useAuthStore'
import useCartStore from '../store/useCartStore'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
  { label: 'Cart', path: '/cart' },
  { label: 'Admin', path: '/admin' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = useCartStore((state) => state.getCartCount())
  const role = useAuthStore((state) => state.role)
  const setRole = useAuthStore((state) => state.setRole)

  return (
    <header className="topbar">
      <div className="container nav-shell">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">R</span>
          <span>
            Raga Impex
            <small>Advisory & Growth</small>
          </span>
        </Link>

        <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems
            .filter((item) => (role === 'admin' ? true : item.path !== '/admin'))
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
        </nav>

        <div className="nav-actions">
          <label className="role-switch" aria-label="Set demo role">
            <span>Role</span>
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <Link className="cart-link" to="/cart" aria-label="Cart overview">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <Link className="secondary-button" to="/contact">
            Book a call
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
