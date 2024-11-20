import React, { useRef, useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';
import PropTypes from 'prop-types';
import { grafo } from './dijkstraLogic';

const GrafoVisual = ({ darkMode }) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

    // Atualiza as dimensões com base no tamanho da div
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Configuração do grafo
    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: darkMode ? '#ffffff' : '#3182ce',
            size: 400,
            highlightStrokeColor: 'blue',
            labelProperty: 'id',
            fontColor: darkMode ? '#ffffff' : '#000000',
            fontSize: 16,
        },
        link: {
            highlightColor: 'lightblue',
            renderLabel: true,
            labelProperty: 'weight',
            fontColor: darkMode ? '#ffffff' : '#000000',
            fontSize: 12,
            strokeWidth: 2,
        },
        directed: true,
        height: dimensions.height,
        width: dimensions.width,
        d3: {
            gravity: -50,
            linkLength: 150,
            linkStrength: 0.8,
        },
    };

    return (
        <div
            className="grafo-wrapper"
            style={{
                display: 'flex',
                flexDirection: 'row', // Organiza o grafo e a lista em linha
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '20px', // Espaçamento entre os elementos
                width: '100%',
            }}
        >
            {/* Container do grafo */}
            <div
                ref={containerRef}
                className="grafo-container"
                style={{
                    flex: '1 1 60%',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <Graph id="grafo-dijkstra" data={grafo} config={config} />
            </div>

            {/* Seção de distâncias */}
            <div
                className="distances-wrapper"
                style={{
                    flex: '1 1 40%',
                    maxHeight: '400px',
                    overflowY: 'auto', // Permite rolagem se a lista for muito longa
                }}
            >
                <section className="distances-section" style={{ width: '100%' }}>
                    <h2
                        className="text-xl font-semibold mb-4"
                        style={{
                            textAlign: 'center',
                            marginBottom: '16px',
                            fontSize: '20px',
                        }}
                    >
                        Distâncias Entre Pontos
                    </h2>
                    <ul className="list-disc list-inside" style={{ paddingLeft: '20px' }}>
                        {grafo.links.map((link, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>
                                De <strong>{link.source}</strong> para{' '}
                                <strong>{link.target}</strong>:{' '}
                                <span className="font-semibold">{link.weight} unidades</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

GrafoVisual.propTypes = {
    darkMode: PropTypes.bool.isRequired,
};

export default GrafoVisual;
