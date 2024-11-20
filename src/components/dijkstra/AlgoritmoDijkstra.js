// src/pages/AlgoritmoDijkstra/dijkstraAlgorithm.js

import { grafo } from './dijkstraLogic';

/**
 * Implementação do Algoritmo de Dijkstra
 * @param {Object} grafo - Grafo representado como objeto com nodes e links
 * @param {string} inicio - Nó inicial
 * @returns {Object} - Distâncias e predecessores
 */
export function dijkstra(grafo, inicio) {
  const distancias = {};
  const visitados = new Set();
  const anteriores = {};


  grafo.nodes.forEach((node) => {
    distancias[node.id] = Infinity;
  });
  distancias[inicio] = 0;

  while (visitados.size < grafo.nodes.length) {
   
    let menorDistancia = Infinity;
    let nodoAtual = null;

    grafo.nodes.forEach((node) => {
      if (!visitados.has(node.id) && distancias[node.id] < menorDistancia) {
        menorDistancia = distancias[node.id];
        nodoAtual = node.id;
      }
    });

    if (nodoAtual === null) break; 

    visitados.add(nodoAtual);


    const vizinhos = grafo.links
      .filter((link) => link.source === nodoAtual || link.target === nodoAtual)
      .map((link) => (link.source === nodoAtual ? link.target : link.source));

    vizinhos.forEach((vizinho) => {
      const aresta = grafo.links.find(
        (link) =>
          (link.source === nodoAtual && link.target === vizinho) ||
          (link.target === nodoAtual && link.source === vizinho)
      );

      const distancia = grafo.links.find(
        (link) =>
          (link.source === nodoAtual && link.target === vizinho) ||
          (link.target === nodoAtual && link.source === vizinho)
      ).value;

      const novaDistancia = distancias[nodoAtual] + distancia;

      if (novaDistancia < distancias[vizinho]) {
        distancias[vizinho] = novaDistancia;
        anteriores[vizinho] = nodoAtual;
      }
    });
  }

  return { distancias, anteriores };
}
