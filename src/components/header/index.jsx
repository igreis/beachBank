import React, { useEffect, useState } from "react"
import { Button } from "../ui/button" 
import { Link } from "react-router-dom"
import useStore from "../../store/store"
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
          <a href="/beachBank/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Início</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Conta Digital</a>
          <a href="/beachBank/arvore" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Árvore do Dinheiro</a>
          <a href="/beachBank/investimentos" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Investimentos</a>
          <a href="/beachBank/despesas" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Despesas</a>
        </div>
        <Button variant="outline" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </Button>
      </nav>
    </header>
    )
}