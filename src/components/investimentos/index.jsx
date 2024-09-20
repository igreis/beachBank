import { useState, useEffect } from 'react'
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Calculator } from 'lucide-react'
import Grafic from './grafico/index'
import useStore from '../../store/store'

export default function PaginaInvestimentos() {

  const { darkMode } = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const [investimentoInicial, setInvestimentoInicial] = useState(1000)
  const [investimentoMensal, setInvestimentoMensal] = useState(100)
  const [periodoInvestimento, setPeriodoInvestimento] = useState(12)
  const [cdiInvestimento, setCdiInvestimento] = useState(100)
  const [resultado, setResultado] = useState(null)
  const [dadosGrafico, setDadosGrafico] = useState([])

  const calcularInvestimento = () => {
    let valor_total = investimentoInicial;

    const taxa_cdi = 10.40;
    const percentual_cdi = cdiInvestimento / 100;
    const formula = (taxa_cdi * percentual_cdi) / 100;

    const taxa_mensal = formula / 12
    const meses = periodoInvestimento;

    let valor_total_mensal = investimentoInicial;
    const dados = [];

    for (let i = 0; i < meses; i++) {
      valor_total += investimentoMensal;
      valor_total *= (1 + taxa_mensal);

      const juros_mensal = valor_total - valor_total_mensal - investimentoMensal;
      dados.push(juros_mensal.toFixed(2));
    }

    const valor_investido = investimentoInicial + (investimentoMensal * meses);
    const rendimento = valor_total - valor_investido;

    setResultado({
      valorBruto: parseFloat(valor_total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      totalInvestido: parseFloat(valor_investido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      rendimento: parseFloat(rendimento).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
    setDadosGrafico(dados)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          Simulador de Investimentos
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Calcule o potencial de crescimento do seu investimento com o Praia Bank
        </p>
        <Card className="mb-8 bg-white dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span>Calculadora de Investimento</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="investimentoInicial" className="text-gray-700 dark:text-gray-300">
                  Investimento Inicial (R$)
                </Label>
                <Input
                  id="investimentoInicial"
                  type="number"
                  value={investimentoInicial}
                  onChange={(e) => setInvestimentoInicial(Number(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="investimentoMensal" className="text-gray-700 dark:text-gray-300">
                  Investimento Mensal (R$)
                </Label>
                <Input
                  id="investimentoMensal"
                  type="number"
                  value={investimentoMensal}
                  onChange={(e) => setInvestimentoMensal(Number(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="periodoInvestimento" className="text-gray-700 dark:text-gray-300">
                  Prazo em meses
                </Label>
                <Input
                  id="periodoInvestimento"
                  type="number"
                  value={periodoInvestimento}
                  onChange={(e) => setPeriodoInvestimento(Number(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cdiInvestimento" className="text-gray-700 dark:text-gray-300">
                  Taxa do CDI (%)
                </Label>
                <Input
                  id="cdiInvestimento"
                  type="number"
                  value={cdiInvestimento}
                  onChange={(e) => setCdiInvestimento(Number(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
              <Button onClick={calcularInvestimento} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                Calcular Investimento
              </Button>
            </div>
            {resultado && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md text-center text-gray-800 dark:text-gray-200">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Resultado da Simulação
                </h3>
                <p>Montante Total: {resultado.valorBruto}</p>
                <p>Total Investido: {resultado.totalInvestido}</p>
                <p>Juros Ganhos: {resultado.rendimento}</p>
                <Grafic periodo={periodoInvestimento} dados={dadosGrafico} darkMode={darkMode}/>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
  
  
}