import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.precio >= filters.minPrice &&
        (filters.category === 'all' ||
          product.id_categoria === filters.category)
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
