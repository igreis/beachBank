import React, { useState, useEffect } from 'react';
import GrafoVisual from './GrafoVisual';
import '../../style/index.css';
import useStore from '../../store/store';
import { grafo } from './dijkstraLogic';
import { dijkstra } from './AlgoritmoDijkstra';

export default function AlgoritmoDijkstra() {
    const { darkMode } = useStore();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const [inicio, setInicio] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleCalcular = () => {
        if (!inicio) {
            alert('Por favor, selecione um ponto de partida.');
            return;
        }
        const res = dijkstra(grafo, inicio);
        setResultado(res);
    };

    const reconstruirCaminho = (destino) => {
        if (!resultado || !resultado.anteriores) return []; // Verifica se resultado está disponível
        const caminho = [];
        let atual = destino;

        while (resultado.anteriores[atual]) {
            caminho.unshift(atual);
            atual = resultado.anteriores[atual];
        }

        caminho.unshift(atual);
        return caminho;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <main className="container mx-auto px-4">
                <div className="container mx-auto p-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">Algoritmo de Dijkstra</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        O algoritmo de Dijkstra é um método para encontrar o menor caminho entre
                        pontos em um grafo. Ele é amplamente usado em sistemas de navegação,
                        redes de computadores e, neste caso, para calcular a rota mais curta
                        entre caixas eletrônicos ou agências bancárias.
                    </p>

                    <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-8">Passos do Algoritmo</h2>
                    <ol className="list-decimal ml-6 space-y-2 text-xl text-gray-600 dark:text-gray-300 mb-8">
                        <li>Inicializar o grafo com os nós e arestas.</li>
                        <li>Definir o ponto de partida com distância zero.</li>
                        <li>
                            Para cada nó não visitado, calcular a distância até seus vizinhos.
                        </li>
                        <li>Atualizar a menor distância se um caminho mais curto for encontrado.</li>
                        <li>Repetir até que todos os nós tenham sido visitados.</li>
                    </ol>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Nesta página, implementaremos o algoritmo para calcular a rota mais curta entre
                        pontos simulando caixas eletrônicos ou agências bancárias em um mapa.
                    </p>

                    <p className="text-lg font-semibold mt-6 text-blue-600">
                        Escolha um ponto inicial para começar!
                    </p>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300">
                        Selecionar Ponto de Partida:
                    </label>
                    <select
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}
                        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                        <option value="">-- Escolha um ponto --</option>
                        {grafo.nodes.map((node) => (
                            <option key={node.id} value={node.id}>
                                {node.id}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleCalcular}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Calcular Menor Caminho
                </button>

                <GrafoVisual darkMode={darkMode} />

                {resultado && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-4">Árvore de Menor Caminho</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left">Destino</th>
                                        <th className="px-4 py-2 text-left">Distância</th>
                                        <th className="px-4 py-2 text-left">Caminho</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grafo.nodes.map((node) => (
                                        <tr
                                            key={node.id}
                                            className={`border-b ${node.id === inicio ? 'bg-blue-100' : ''}`} // Destacar ponto de partida
                                        >
                                            <td className="px-4 py-2">{node.id}</td>
                                            <td className="px-4 py-2">
                                                {node.id === inicio
                                                    ? 'Ponto de Partida'
                                                    : resultado.distancias[node.id] !== Infinity
                                                        ? `${resultado.distancias[node.id]} unidades`
                                                        : 'Não alcançável'}
                                            </td>
                                            <td className="px-4 py-2">
                                                {node.id === inicio
                                                    ? 'Início'
                                                    : resultado.anteriores[node.id]
                                                        ? reconstruirCaminho(node.id).join(' -> ')
                                                        : 'Não alcançável'}
                                            </td>
                                            {/* Botão para mostrar caminho, se possível */}
                                            {node.id !== inicio && (
                                                <td className="px-4 py-2">
                                                    <button
                                                        onClick={() => {
                                                            const caminho = reconstruirCaminho(node.id);
                                                            alert(`Caminho para ${node.id}: ${caminho.join(' -> ')}`);
                                                        }}
                                                        className="ml-2 text-blue-600 hover:underline"
                                                    >
                                                        Ver Caminho
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main >
        </div >
    );
}
