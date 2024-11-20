export const grafo = {
  nodes: [
      { id: 'A' },
      { id: 'B' },
      { id: 'C' },
      { id: 'D' },
      { id: 'E' },
  ],
  links: [
      { source: 'A', target: 'B', value: 6, label: '6 unidades', weight: 6},
      { source: 'A', target: 'C', value: 2, label: '2 unidades', weight: 2},
      { source: 'B', target: 'D', value: 15, label: '15 unidades', weight: 15},
      { source: 'C', target: 'D', value: 5, label: '5 unidades', weight: 5},
      { source: 'C', target: 'E', value: 8, label: '8 unidades', weight: 8},
      { source: 'D', target: 'E', value: 10, label: '10 unidades', weight: 10},
  ],
};
