
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { CreditCard, Smartphone, PiggyBank, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
     
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Seu dinheiro, sua praia
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experimente a liberdade financeira com o Praia Bank, seu banco 100% digital
          </p>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link to={'/'} >
              <Card className="transform transition-transform duration-300 ease-in-out hover:scale-110">
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Gere seu cartão virtual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Faça compras no Brasil e exterior sem pagar taxas anuais com nosso cartão.</p>
                </CardContent>
              </Card>
            </Link>
            <Link to = {'/'}>
            <Card className="transform transition-transform duration-300 ease-in-out hover:scale-110">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Aprenda como funciona nosso atendimento com uma simulação simples.</p>
              </CardContent>
            </Card>
            </Link>
            <Link to={'/investimentos'}>
            <Card className= "transform transition-transform duration-300 ease-in-out hover:scale-110">
              <CardHeader>
                <PiggyBank className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Investimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Faça seu dinheiro render mais com nossas opções de investimento.</p>
              </CardContent>
            </Card>
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">"O Praia Bank mudou minha vida financeira. Agora tenho total controle sobre meu dinheiro!"</p>
                  <p className="font-semibold mt-4">- Maria S.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">"Atendimento excepcional e taxas justas. Não troco o Praia Bank por nada!"</p>
                  <p className="font-semibold mt-4">- João P.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
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
    </div>
  )
}