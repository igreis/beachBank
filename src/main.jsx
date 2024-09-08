import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/home/index'
import PaginaInvestimentos from './components/investimentos/index'
import '../src/style/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/beachBank">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/investimentos' element={<PaginaInvestimentos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
