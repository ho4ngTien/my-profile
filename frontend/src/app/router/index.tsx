import { Routes, Route } from 'react-router-dom'
import { PortfolioPage } from '../(portfolio)/page'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
    </Routes>
  )
}

