import type { ReactNode } from 'react'

interface PortfolioLayoutProps {
  children: ReactNode
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--text)]">
      {children}
    </div>
  )
}
