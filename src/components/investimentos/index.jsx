import { useState } from 'react'
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Calculator } from 'lucide-react'
import Grafic from './grafico/index'

export default function PaginaInvestimentos() {

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
      console.log(dados)
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Simulador de Investimentos
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Calcule o potencial de crescimento do seu investimento com o Praia Bank
        </p>
        <Card className="mb-8 bg-white">
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
              <div className="mt-6 p-4 bg-blue-50 rounded-md flex-columns text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Resultado da Simulação</h3>
                <p className="text-blue-700">Montante Total: {resultado.valorBruto}</p>
                <p className="text-blue-700">Total Investido: {resultado.totalInvestido}</p>
                <p className="text-blue-700">Juros Ganhos: {resultado.rendimento}</p>
                <Grafic periodo={periodoInvestimento} dados={dadosGrafico}/>
              </div>
            )}
          </CardContent>
        </Card> 
      </main>
    </div>
  )
}