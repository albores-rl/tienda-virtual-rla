import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
  const context = useContext(CartContext)

  // buena practica hecer lo siguiente
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
