'use client'

import React, { useState, useEffect } from 'react'
import { Book, Gamepad, PiggyBank } from 'lucide-react'
import { Link } from "react-router-dom"
import useStore from "../../../store/store"


const ClickableScreen = () => {
    const [points, setPoints] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPoints([...points, { x, y, rightClick: e.type === 'contextmenu' }]);
    };

    return (
        <div
            style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#E6F7FF',
                position: 'relative',
                border: '3px solid #4CAF50',
                borderRadius: '10px',
            }}
            onClick={handleClick}
            onContextMenu={handleClick}
        >
            {points.map((point, index) => {
                if (index > 0 && points[index].rightClick) {
                    const previousPoint = points[index - 1];
                    return (
                        <svg
                            key={`line-${index}`}
                            style={{
                                position: 'absolute',
                                pointerEvents: 'none',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <line
                                x1={previousPoint.x}
                                y1={previousPoint.y}
                                x2={point.x}
                                y2={point.y}
                                stroke="#FF6B6B"
                                strokeWidth="3"
                            />
                        </svg>
                    );
                }
                return null;
            })}

            {points.map((point, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#4CAF50',
                        borderRadius: '50%',
                        left: point.x - 7.5,
                        top: point.y - 7.5,
                    }}
                />
            ))}
        </div>
    );
};

export default function KidsPage() {
    const { darkMode } = useStore();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])


    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div className="bg-gradient-to-b from-yellow-200 to-blue-200 dark:from-indigo-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">


                <main className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
                        Bem-vindo ao Beach Bank Kids!
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 text-center text-gray-700 dark:text-gray-300">
                        Aprenda sobre dinheiro e finanças de um jeito divertido!
                    </p>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
                            Jogo de Conectar Pontos
                        </h2>
                        <p className="text-lg mb-4 text-center text-gray-700 dark:text-gray-300">
                            Clique para criar pontos e clique com o botão direito para conectá-los!
                        </p>
                        <ClickableScreen />
                    </section>

                    <section className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1 */}
                        <Link to='/kids/memoria'>
                            <div className="bg-white dark:bg-gray-800 border-4 border-blue-400 dark:border-blue-600 p-6 rounded-lg shadow-lg">
                                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-4">
                                    <Book className="h-6 w-6" />
                                    <span className="text-lg font-bold">Jogo da Memória</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Treine sua mente enquanto aprende sobre conceitos básicos de finanças e economia!
                                </p>
                                <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
                                    Comece a Jogar
                                </button>
                            </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to='/kids/area'>
                            <div className="bg-white dark:bg-gray-800 border-4 border-purple-400 dark:border-purple-600 p-6 rounded-lg shadow-lg">
                                <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 mb-4">
                                    <Gamepad className="h-6 w-6" />
                                    <span className="text-lg font-bold">Área de Desenho</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Use sua criatividade para desenhar e explorar conexões de maneira divertida!
                                </p>

                                <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md">
                                    Acesse a Área
                                </button>

                            </div>
                        </Link>
                        {/* Card 3 */}
                        <div className="bg-white dark:bg-gray-800 border-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 mb-4">
                                <PiggyBank className="h-6 w-6" />
                                <span className="text-lg font-bold">Meu Cofrinho Virtual</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Alcance suas metas financeiras de forma interativa e acompanhe cada conquista!
                            </p>
                            <button className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">
                                Criar Meu Cofrinho
                            </button>
                        </div>
                    </section>


                    <section className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                            Dica do Dia
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            "Economize um pouco do seu dinheiro toda vez que ganhar algo. Mesmo pequenas quantias podem se transformar em grandes tesouros com o tempo!"
                        </p>
                    </section>
                </main>

            </div>
        </div>
    );
}
