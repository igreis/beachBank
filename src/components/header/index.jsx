import React from "react"
import { Waves } from "lucide-react"
import { Button } from "../ui/button"

export const Header = () => {
    return (
        <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-blue-600" />
            <a href="/">
            <span className="text-2xl font-bold text-blue-600">Beach Bank</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Conta Digital</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Cartões</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Investimentos</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Sobre Nós</a>
          </div>
          <Button>Abra sua conta</Button>
        </nav>
      </header>
    )
}