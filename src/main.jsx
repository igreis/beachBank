import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/home/index'
import PaginaInvestimentos from './components/investimentos/index'
import '../src/style/global.css'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import CustomerServicePage from './components/atendimento/index'
import OpenAccountPage from './components/cadastro'
import UserDataPage from './components/dados'
import { ToastContainer } from 'react-toastify'
import PaginaDespesas from './components/despesas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/beachBank">
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/investimentos' element={<PaginaInvestimentos />} />
        <Route path='/atendimento' element={<CustomerServicePage />} />
        <Route path='/cadastro' element={<OpenAccountPage />} />
        <Route path='/dados' element={<UserDataPage />} />
        <Route path='/despesas' element={<PaginaDespesas />} />
      </Routes>
    <Footer/>
    <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  </StrictMode>,
)
