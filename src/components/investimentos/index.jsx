import React, { useState } from 'react'
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Waves, Calculator } from 'lucide-react'

export default function PaginaInvestimentos() {
  const [investimentoInicial, setInvestimentoInicial] = useState(1000)
  const [investimentoMensal, setInvestimentoMensal] = useState(100)
  const [periodoInvestimento, setPeriodoInvestimento] = useState(12)
  const [cdiInvestimento, setCdiInvestimento] = useState(100)
  const [resultado, setResultado] = useState(null)

  const calcularInvestimento = () => {
    let valor_total = investimentoInicial;

    const taxa_cdi = 10.40;
    const percentual_cdi = cdiInvestimento / 100;
    const formula = (taxa_cdi * percentual_cdi) / 100;

    const taxa_mensal = formula / 12
    const meses = periodoInvestimento;
    
    for (let i = 0; i < meses; i++) {
      valor_total += investimentoMensal;
      valor_total *= (1 + taxa_mensal);
    }

    const valor_investido = investimentoInicial + (investimentoMensal * meses);
    const rendimento = valor_total - valor_investido;

    setResultado({
      valorBruto: parseFloat(valor_total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      totalInvestido: parseFloat(valor_investido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      rendimento: parseFloat(rendimento).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Praia Bank</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-600">Início</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Conta Digital</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Cartões</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Sobre Nós</a>
          </div>
          <Button>Abra sua conta</Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Simulador de Investimentos
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Calcule o potencial de crescimento do seu investimento com o Praia Bank
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              <span>Calculadora de Investimento</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="investimentoInicial">Investimento Inicial (R$)</Label>
                <Input
                  id="investimentoInicial"
                  type="number"
                  value={investimentoInicial}
                  onChange={(e) => setInvestimentoInicial(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="investimentoMensal">Investimento Mensal (R$)</Label>
                <Input
                  id="investimentoMensal"
                  type="number"
                  value={investimentoMensal}
                  onChange={(e) => setInvestimentoMensal(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="periodoInvestimento">Prazo em meses</Label>
                <Input
                  id="periodoInvestimento"
                  type="number"
                  value={periodoInvestimento}
                  onChange={(e) => setPeriodoInvestimento(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cdiInvestimento">Taxa do CDI (%)</Label>
                <Input
                  id="cdiInvestimento"
                  type="number"
                  value={cdiInvestimento}
                  onChange={(e) => setCdiInvestimento(Number(e.target.value))}
                />
              </div>
              <Button onClick={calcularInvestimento} className="w-full mt-4">
                Calcular Investimento
              </Button>
            </div>
            {resultado && (
              <div className="mt-6 p-4 bg-blue-50 rounded-md">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Resultado da Simulação</h3>
                <p className="text-blue-700">Montante Total: {resultado.valorBruto}</p>
                <p className="text-blue-700">Total Investido: {resultado.totalInvestido}</p>
                <p className="text-blue-700">Juros Ganhos: {resultado.rendimento}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
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
                <li>Av. Beira Mar, 1100</li>
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