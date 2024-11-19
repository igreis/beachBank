import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraficoPizza({ categorias, valores, darkMode }) {
  const total = valores.reduce((acc, val) => acc + val, 0);

  const data = {
    labels: categorias,
    datasets: [
      {
        label: 'Alocação de Investimentos',
        data: valores,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? 'white' : 'black',
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: R$ ${context.raw.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
     
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
        Este gráfico representa a distribuição do seu investimento entre diferentes categorias. Abaixo, veja os valores detalhados de cada categoria.
      </p>

      <Doughnut data={data} options={options} />

      <table
        style={{
          margin: '20px auto',
          width: '100%',
          borderCollapse: 'collapse',
          color: darkMode ? 'white' : 'black',
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid', padding: '10px' }}>Categoria</th>
            <th style={{ borderBottom: '1px solid', padding: '10px' }}>Valor</th>
            <th style={{ borderBottom: '1px solid', padding: '10px' }}>Porcentagem</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria, index) => (
            <tr key={index}>
              <td style={{ padding: '10px' }}>{categoria}</td>
              <td style={{ padding: '10px' }}>
                R$ {valores[index].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </td>
              <td style={{ padding: '10px' }}>
                {((valores[index] / total) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
