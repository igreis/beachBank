'use client'

import React, { useState, useEffect } from 'react';
import useStore from '../../../store/store';

const MemoryGame = () => {
  const [matriz, setMatriz] = useState(Array(7).fill(Array(7).fill(1)));
  const [color, setColor] = useState(Array(7).fill(Array(7).fill('white')));
  const [treinamentos, setTreinamentos] = useState(0);
  const [treinadas, setTreinadas] = useState([]);
  const [contador, setContador] = useState(0);
  const [mostrarMatrizes, setMostrarMatrizes] = useState(false);

  useEffect(() => {
    const newColor = matriz.map(row =>
      row.map(cel => (cel === 1 ? 'white' : 'black'))
    );
    setColor(newColor);
  }, [matriz]);

  const handleClick = (rowIndex, colIndex) => {
    const newMatriz = matriz.map((row, rIdx) =>
      row.map((cel, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? cel * -1 : cel
      )
    );
    setMatriz(newMatriz);
  };

  const handleTreinamento = () => {
    if (contador < treinamentos) {
      setTreinadas([...treinadas, JSON.parse(JSON.stringify(matriz))]);
      setContador(contador + 1);
    }
  };

  const handleReconhecer = () => {
    setMostrarMatrizes(true);
  };

  const cellStyle = {
    padding: 0,
    margin: 0,
  };

  return (
    <div className="flex">
      <div className="mr-8">
        <div className="flex flex-col items-center mb-6">
          <input
            type="number"
            min="1"
            value={treinamentos}
            onChange={e => {
              setTreinamentos(Number(e.target.value));
              setTreinadas([]);
              setContador(0);
              setMostrarMatrizes(false);
            }}
            placeholder="Número de treinamentos"
            className="mb-4 p-2 border rounded"
          />
          <button
            onClick={handleTreinamento}
            disabled={contador >= treinamentos}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            Treinar
          </button>
          <button
            onClick={handleReconhecer}
            disabled={contador < treinamentos}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          >
            Reconhecer
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Treinamentos restantes: <span className="font-bold">{treinamentos - contador}</span>
            </p>
          </div>
        </div>
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            {matriz.map((linha, rowIndex) => (
              <tr key={rowIndex}>
                {linha.map((_, colIndex) => (
                  <td key={colIndex} style={cellStyle}>
                    <button
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: color[rowIndex][colIndex],
                        border: '1px solid black',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleClick(rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {mostrarMatrizes && treinadas.length > 0 && (
        <div className="ml-8">
          <h2 className="text-lg font-bold mb-4">Matrizes Treinadas:</h2>
          <div className="grid grid-cols-2 gap-4">
            {treinadas.map((matrix, idx) => (
              <div key={idx} className="bg-white p-2 rounded shadow">
                <p className="mb-2">Matriz {idx + 1}:</p>
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    {matrix.map((linha, rowIndex) => (
                      <tr key={rowIndex}>
                        {linha.map((celula, colIndex) => (
                          <td
                            key={colIndex}
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: celula === 1 ? 'white' : 'black',
                              border: '1px solid gray',
                            }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function JogoDaMemoriaPage() {

  const { darkMode } = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])


  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-blue-200 dark:from-indigo-900 dark:to-purple-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Jogo da Memória
        </h1>
        <p className="text-xl mb-8 text-center text-gray-700 dark:text-gray-300">
          Clique nos quadrados para alternar entre preto e branco!
        </p>
        <div className="flex justify-center items-start mb-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <MemoryGame />
          </div>
        </div>
      </main>
    </div>
  );
}