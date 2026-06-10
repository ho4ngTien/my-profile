import type { ReactNode } from 'react'
import { Header, Footer, Sidebar } from '@/shared/components'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Sidebar />
      
      <div className="xl:ml-[var(--sidebar-width,16rem)]">
        <Header />
        
        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
