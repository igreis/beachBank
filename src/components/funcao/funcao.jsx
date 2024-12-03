"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const GraficoLinha = ({ darkMode }) => {
    const [funcao, setFuncao] = useState("x");
    const [dados, setDados] = useState([]);
    const periodo = 12; // Período fixo de 12 unidades

    React.useEffect(() => {
        calcularDados();
    }, [funcao]);

    const calcularDados = () => {
        const novosDados = Array.from({ length: periodo }, (_, i) => {
            const x = i + 1;
            try {
                const expressao = funcao.replace(/x/g, x.toString());
                return Function(`return ${expressao}`)();
            } catch {
                return 0; // Retorna 0 em caso de erro
            }
        });
        setDados(novosDados);
    };

    // Adicionando um rótulo vazio no início para criar espaço antes do "1"
    const labels = [' ', ...Array.from({ length: periodo }, (_, i) => `${i + 1}`)];

    const data = {
        labels,
        datasets: [
            {
                label: 'Valor da Função',
                data: [null, ...dados], // Adicionando um valor nulo para alinhar com o rótulo vazio
                fill: false,
                borderColor: darkMode ? 'rgba(75, 192, 192, 1)' : 'rgba(54, 162, 235, 1)',
                tension: 0.2,
                pointBackgroundColor: darkMode ? 'rgba(75, 192, 192, 1)' : 'rgba(54, 162, 235, 1)',
                pointRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: darkMode ? 'white' : 'black',
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: (context) => `Y = ${context.raw?.toFixed(2) || 0}`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X',
                    color: darkMode ? 'white' : 'black',
                },
                ticks: {
                    color: darkMode ? 'white' : 'black',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y',
                    color: darkMode ? 'white' : 'black',
                },
                beginAtZero: true,
                ticks: {
                    color: darkMode ? 'white' : 'black',
                },
            },
        },
    };

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Line data={data} options={options} width={1150} height={400} />
                </div>
            </div>
            <div className="input-row" style={{ marginTop: '20px' }}>
                <label
                    htmlFor="funcao"
                    style={{ color: darkMode ? 'white' : 'black', marginRight: '10px' }}
                >
                    Função (use 'x' como variável):
                </label>
                <input
                    type="text"
                    id="funcao"
                    value={funcao}
                    onChange={(e) => setFuncao(e.target.value)}
                    className={`input-funcao ${darkMode ? 'dark' : ''}`}
                    placeholder="Ex: 2*x + 1"
                />
            </div>
        </div>
    );
};

export default function FunctionTesterPage() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <main className="container mx-auto px-4 py-8">
                <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Testador de Funções
                </h1>
                <p className="text-xl mb-8 text-center">
                    Insira uma função matemática e veja seu gráfico.
                </p>

                <div className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <GraficoLinha darkMode={darkMode} />
                </div>
            </main>
        </div>
    );
}
    