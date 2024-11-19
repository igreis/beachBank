import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const GraficoLinha = ({ periodo, dados, darkMode }) => {

    const labels = Array.from({ length: periodo }, (_, i) => `${i + 1}º mês`);

    const data = {
        labels,
        datasets: [
            {
                label: 'Montante Acumulado',
                data: dados,
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
                    color: darkMode ? 'white' : 'black', // Ajusta a cor no modo escuro
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (context) {
                        return `R$ ${context.raw.toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Período (Meses)',
                    color: darkMode ? 'white' : 'black',
                },
                ticks: {
                    color: darkMode ? 'white' : 'black',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Valor (R$)',
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
                    <Line data={data} options={options} width={1150} height={400} margin={10} />
                </div>
            </div>
        </div>
    );
};

export default GraficoLinha;