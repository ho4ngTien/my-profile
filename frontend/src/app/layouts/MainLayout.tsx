import type { ReactNode } from 'react'
import { Header, Footer, Sidebar } from '@/shared/components'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Sidebar />
      
      <div className="xl:ml-80">
        {/* Header remains on top for mobile */}
        <Header />
        
        <main className="min-h-[calc(100vh-10rem)]">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
