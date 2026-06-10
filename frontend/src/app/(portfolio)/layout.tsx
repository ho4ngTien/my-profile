import type { ReactNode } from 'react'

interface PortfolioLayoutProps {
  children: ReactNode
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {children}
    </div>
  )
}
