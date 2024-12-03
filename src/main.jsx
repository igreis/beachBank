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
import AlgoritmoDijkstra from './components/dijkstra'
import KidsPage from './components/kids/home'
import EducationalGamesPage from './components/kids/areaDesenho/index'
import JogoDaMemoria from './components/kids/memoria/index'
import MoneyTreePage from './components/arvore/index'
import FunctionTesterPage from './components/funcao/funcao'


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
        <Route path='/dijkstra' element={<AlgoritmoDijkstra/>}  />
        <Route path='/kids' element={<KidsPage />} />
        <Route path='kids/area' element={<EducationalGamesPage />} />
        <Route path='kids/memoria' element={<JogoDaMemoria />} />
        <Route path='/arvore' element={<MoneyTreePage />} />
        <Route path='/funcao' element={<FunctionTesterPage />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  </StrictMode>,
)
