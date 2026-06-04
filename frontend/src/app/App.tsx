import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { AppRouter } from './router'
import '@/shared/styles/globals.css'

export function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  )
}
