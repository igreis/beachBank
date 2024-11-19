import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { CreditCard, Smartphone, PiggyBank, Star, ArrowRight, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import useStore from "../../store/store"
import { useEffect } from "react"
import { Button } from "../ui/button"

export default function HomePage() {

  const { darkMode } = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Seu dinheiro, sua praia
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Experimente a liberdade financeira com o Beach Bank, seu banco 100% digital
          </p>
          <Link to="/cadastro">
            <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
              Abra sua conta
            </Button>
          </Link>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to={'/'}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Gere seu cartão virtual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Faça compras no Brasil e exterior sem pagar taxas anuais com nosso cartão.
                  </p>
                  <Button variant="outline" className="w-full mt-5 dark:border-gray-600 dark:bg-black dark:border-none">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to={'/atendimento'}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Aprenda como funciona nosso atendimento com uma simulação simples.
                  </p>
                  <Button variant="outline" className="w-full mt-5 dark:border-gray-600 dark:bg-black dark:border-none">
                    Simulação <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to={'/investimentos'}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <CardHeader>
                  <PiggyBank className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Investimentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Faça seu dinheiro render mais com nossas opções de investimento.
                  </p>
                  <Button variant="outline" className="w-full mt-5 dark:border-gray-600 dark:bg-black dark:border-none">
                    Investimento <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to={'/despesas'}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110">
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Despesas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Organize quais foram suas despesas durante o ano!.
                  </p>
                  <Button variant="outline" className="w-full mt-5 dark:border-gray-600 dark:bg-black dark:border-none">
                    Despesas <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
                  <p className="italic text-gray-600 dark:text-gray-300">"HTML e CSS não serve pra nada!"</p>
                  <p className="font-semibold mt-4 text-gray-800 dark:text-gray-200">- Julião T.</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
                  <p className="italic text-gray-600 dark:text-gray-300">"Atendimento excepcional e taxas justas. Não troco o Praia Bank por nada!"</p>
                  <p className="font-semibold mt-4 text-gray-800 dark:text-gray-200">- João P.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
