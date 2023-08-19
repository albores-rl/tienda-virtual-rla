import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>Prueba técnica</h4>
      <span>@rl_albores</span>
      <h5>Tienda Virtual con useContext & useReducer</h5> */}
    </footer>
  )
}
