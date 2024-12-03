import React, { useEffect, useState } from "react"
import { Button } from "../ui/button" 
import useStore from "../../store/store"
import { Link } from 'react-router-dom'
import { Waves, Sun, Moon } from 'lucide-react'

export const Header = () => {

  const { darkMode, toggleDarkMode } = useStore();

    return (
      <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Waves className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <Link to="/">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Beach Bank</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Início</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Conta Digital</Link>
          <Link to="/arvore" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Árvore do Dinheiro</Link>
          <Link to="/investimentos" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Investimentos</Link>
          <Link to="/despesas" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Despesas</Link>
          <Link to="/funcao" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Funções</Link>
        </div>
        <Button variant="outline" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </Button>
      </nav>
    </header>
    )
}