/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 20).map((product) => (
          <li key={product.id}>
            <img src={product.imagen} alt={product.nombre} />
            <div>
              <strong>{product.nombre}</strong> - ${product.precio}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
