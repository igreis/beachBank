import useStore from "../../store/store";
import { useEffect } from "react";

export const Footer = () => {

    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Praia Bank</h3>
              <p className="text-sm">Seu banco digital para uma vida financeira mais tranquila.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produtos</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-blue-300">Conta Digital</a></li>
                <li><a href="#" className="hover:text-blue-300">Cartão de Crédito</a></li>
                <li><a href="#" className="hover:text-blue-300">Investimentos</a></li>
                <li><a href="#" className="hover:text-blue-300">Empréstimos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-blue-300">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-blue-300">Carreiras</a></li>
                <li><a href="#" className="hover:text-blue-300">Imprensa</a></li>
                <li><a href="#" className="hover:text-blue-300">Sustentabilidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="text-sm space-y-2">
                <li>0800 123 4567</li>
                <li>contato@praiabank.com</li>
                <li>Av. Beira Mar, 1000</li>
                <li>Rio de Janeiro, RJ</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2023 Praia Bank. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
}