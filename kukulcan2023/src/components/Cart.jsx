import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

function CartItem({ imagen, precio, nombre, quantity, addToCart }) {
  return (
    <li>
      <img src={imagen} alt={nombre} />
      <div>
        <strong>{nombre}</strong> - ${precio}
      </div>
      <footer>
        <small>Cant: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
