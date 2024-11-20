'use client'

import React, { useState, useEffect } from 'react'
import useStore from '../../../store/store'

const Sidebar = ({ shapes }) => {
    return (
        <div className="w-64 bg-blue-100 dark:bg-blue-900 p-4 overflow-y-auto rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Formas</h2>
            <div className="grid grid-cols-2 gap-4">
                {shapes.map((shape, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow cursor-grab"
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('shape', JSON.stringify(shape))}
                    >
                        <img src={shape.src} alt={shape.alt} className="w-full h-[120px]" />
                    </div>
                ))}
            </div>
        </div>
    )
}

const DrawingArea = () => {
    const [droppedShapes, setDroppedShapes] = useState([])
    const [selectedShapes, setSelectedShapes] = useState([])
    const [lines, setLines] = useState([])

    const handleDrop = (e) => {
        e.preventDefault()
        const shapeData = JSON.parse(e.dataTransfer.getData('shape'))
        const x = e.clientX - e.currentTarget.getBoundingClientRect().left
        const y = e.clientY - e.currentTarget.getBoundingClientRect().top
        setDroppedShapes([...droppedShapes, { ...shapeData, x, y, id: droppedShapes.length }])
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleShapeClick = (shape) => {
        if (selectedShapes.length === 1) {
            const newLine = { start: selectedShapes[0], end: shape }
            if (!doesLineIntersect(newLine)) {
                setLines([...lines, newLine])
            }
            setSelectedShapes([])
        } else {
            setSelectedShapes([shape])
        }
    }

    const doesLineIntersect = ({ start, end }) => {
        return lines.some(({ start: A, end: B }) =>
            doLinesIntersect(A, B, start, end)
        )
    }

    const doLinesIntersect = (A, B, C, D) => {
        const crossProduct = (P, Q, R) =>
            (R.y - P.y) * (Q.x - P.x) - (R.x - P.x) * (Q.y - P.y)

        const isOppositeSigns = (val1, val2) =>
            (val1 > 0 && val2 < 0) || (val1 < 0 && val2 > 0)

        const d1 = crossProduct(A, B, C)
        const d2 = crossProduct(A, B, D)
        const d3 = crossProduct(C, D, A)
        const d4 = crossProduct(C, D, B)

        return (
            isOppositeSigns(d1, d2) && isOppositeSigns(d3, d4)
        )
    }

    return (
        <div
            className="flex-grow bg-white dark:bg-gray-800 border-4 border-blue-300 dark:border-blue-700 rounded-lg relative overflow-hidden"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {/* Render shapes */}
            {droppedShapes.map((shape, index) => (
                <img
                    key={index}
                    src={shape.src}
                    alt={shape.alt}
                    className="absolute cursor-pointer"
                    onClick={() => handleShapeClick(shape)}
                    style={{
                        left: `${shape.x}px`,
                        top: `${shape.y}px`,
                        width: '100px',
                        height: 'auto',
                    }}
                />
            ))}

            {/* Render lines */}
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {lines.map((line, index) => (
                    <line
                        key={`line-${index}`}
                        x1={line.start.x + 25} // Centraliza o ponto de partida
                        y1={line.start.y + 25}
                        x2={line.end.x + 25} // Centraliza o ponto final
                        y2={line.end.y + 25}
                        stroke="black"
                        strokeWidth="2"
                    />
                ))}
            </svg>
        </div>
    )
}

export default function EducationalGamesPage() {

    const { darkMode } = useStore();

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [darkMode])

    useEffect(() => {
        window.scrollTo(0, 0); // Sempre rola para o topo quando o caminho muda
    }, [location.pathname]);

    const shapes = [
        { src: 'https://it-tehnik.ru/wp-content/uploads/html5-error.jpg', alt: 'Círculo' },
        { src: 'https://th.bing.com/th/id/OIP.93nmuSRCmgrQTWyQ8fHNjAHaKy?rs=1&pid=ImgDetMain', alt: 'Quadrado' },
        { src: 'https://th.bing.com/th/id/R.f56e8a57952546d0e262c8e68f8ae047?rik=ZYMDHj56AuSlaA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fpt%2fb%2fb3%2fSteveMinecraft.png&ehk=BcCOaRMJy4pyBOpXYKakkLA74u1dYlE3z%2fOLeigfLLo%3d&risl=&pid=ImgRaw&r=0', alt: 'Triângulo' },
        { src: 'https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/421065775_1085545815886693_8925505037988710976_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaIBoq_ky-PDG2xKcy2VOizMAdWeDc7XcqCOu3TbCQFWyU&oe=674A335A&_nc_sid=5e03e0&_nc_cat=111', alt: 'Estrela' },
        { src: 'https://th.bing.com/th/id/OIP.XRJmL4nPgtv5P9b20argTwAAAA?w=300&h=451&rs=1&pid=ImgDetMain', alt: 'Coração' },
        { src: 'https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/458467513_2237315666653105_6680601762236950411_n.jpg?ccb=11-4&oh=01_Q5AaIN6gtjJKwFbBfLotoWR_SxZbVSQsfPIWNLtf0CSevjdS&oe=674B34DC&_nc_sid=5e03e0&_nc_cat=110', alt: 'Diamante' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-blue-200 dark:from-indigo-900 dark:to-purple-900">
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
                    Jogo de Formas
                </h1>
                <p className="text-xl mb-8 text-center text-gray-700 dark:text-gray-300">
                    Arraste as formas para a área de desenho e crie sua obra de arte!
                </p>

                <div className="flex gap-8 h-[60vh]">
                    <Sidebar shapes={shapes} />
                    <DrawingArea />
                </div>
            </main>
        </div>
    )
}
