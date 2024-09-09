import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/home/index'
import PaginaInvestimentos from './components/investimentos/index'
import '../src/style/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import CustomerServicePage from './components/atendimento/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter basename="/beachBank">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/investimentos' element={<PaginaInvestimentos />} />
        <Route path='/atendimento' element={<CustomerServicePage />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
