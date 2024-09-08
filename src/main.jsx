import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/home/index'
import PaginaInvestimentos from './components/investimentos/index'
import '../src/style/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter basename="/beachBank">
      <Routes>
        <Route path='/beachBank' element={<HomePage />} />
        <Route path='/beachBank/investimentos' element={<PaginaInvestimentos />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)