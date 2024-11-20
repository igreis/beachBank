import React, { useState, useEffect } from 'react'
import { Button } from "../ui/uiAtendimento/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Wallet } from 'lucide-react'
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import useStore from '../../store/store'


export default function PaginaDespesas() {
    const mesesIniciais = {
        Janeiro: [],
        Fevereiro: [],
        Março: [],
        Abril: [],
        Maio: [],
        Junho: [],
        Julho: [],
        Agosto: [],
        Setembro: [],
        Outubro: [],
        Novembro: [],
        Dezembro: [],
    };

    const { darkMode } = useStore();
    const [despesas, setDespesas] = useState(mesesIniciais);
    const [valor, setValor] = useState("");
    const [mes, setMes] = useState("");

    const adicionarDespesa = (e) => {
        e.preventDefault();

        if (!valor || !mes) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        setDespesas((prevDespesas) => ({
            ...prevDespesas,
            [mes]: [...prevDespesas[mes], parseFloat(valor)],
        }));


        setValor("");
        setMes("");
    };

    const limparTabela = () => {
        setDespesas(mesesIniciais);
    };

    useEffect(() => {
        if (darkMode) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
      })

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <main className="container mx-auto px-4 py-16">
                <section className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                        Gerenciador de Despesas
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Organize suas despesas de forma fácil e rápida!
                    </p>
                </section>
                <Card className="mb-8 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                            <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            <span>Adicione sua Despesa!</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            <form onSubmit={adicionarDespesa} className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label className="text-gray-700 dark:text-gray-300">
                                        Valor da Despesa (R$)
                                    </Label>
                                    <Input
                                        type="number"
                                        value={valor}
                                        onChange={(e) => setValor(e.target.value)}
                                        className="bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-gray-700 dark:text-gray-300">
                                        Mês da Despesa
                                    </Label>
                                    <select
                                        value={mes}
                                        onChange={(e) => setMes(e.target.value)}
                                        className="bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 p-2"
                                    >
                                        <option value="">Selecione o mês</option>
                                        {Object.keys(despesas).map((m) => (
                                            <option key={m} value={m}>
                                                {m}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                                >
                                    Adicionar Despesa
                                </Button>
                            </form>
                            
                            <Button
                                onClick={limparTabela}
                                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Limpar Tabela
                            </Button>

                            <h2 className="text-2xl font-semibold mt-8 text-blue-600 dark:text-blue-400">
                                Despesas por Mês
                            </h2>
                            <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 dark:border-gray-700 p-2">
                                            Mês
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-700 p-2">
                                            Despesas
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-700 p-2">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(despesas).map(([mes, valores]) => (
                                        <tr key={mes}>
                                            <td className="border border-gray-300 dark:border-gray-700 p-2">
                                                {mes}
                                            </td>
                                            <td className="border border-gray-300 dark:border-gray-700 p-2">
                                                {valores.length > 0
                                                    ? valores.map((v, i) => (
                                                        <span key={i}>
                                                            R$ {v.toFixed(2)}
                                                            {i < valores.length - 1 ? ", " : ""}
                                                        </span>
                                                    ))
                                                    : "Nenhuma despesa"}
                                            </td>
                                            <td className="border border-gray-300 dark:border-gray-700 p-2">
                                                R$ {valores
                                                    .reduce((total, v) => total + v, 0)
                                                    .toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );

}