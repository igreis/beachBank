import React, { useEffect, useState } from "react"
import { Waves } from "lucide-react"
import { Button } from "../ui/button" 
import { Link } from "react-router-dom"
import useStore from "../../store/store"

export const Header = () => {

  const { darkMode, toggleDarkMode } = useStore();
  console.log(darkMode)

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

    return (
        <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-blue-600" />
            <Link to="/">
            <span className="text-2xl font-bold text-blue-600">Beach Bank</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Conta Digital</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Cartões</a>
            <Link to="investimentos" className="text-gray-600 hover:text-blue-600">Investimentos</Link>
            <Link to="/dados" className="text-gray-600 hover:text-blue-600">Minha Conta</Link>
          </div>
          <Link to="/cadastro">
          <Button>Abra sua conta</Button>
          </Link>
          <Button variant="outline" onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
          </Button>
        </nav>
      </header>
    )
}