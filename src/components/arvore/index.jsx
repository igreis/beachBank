'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, Edit2, ChevronUp, ChevronDown, Waves, ArrowLeft } from 'lucide-react';

const initialTree = {
  id: '1',
  title: 'Árvore do Dinheiro',
  description: 'Explore as ramificações do seu dinheiro',
  children: []
};

const TreeCard = ({ node, onAddChild, onRemove, onUpdate, isRoot }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(node.title);
  const [editDescription, setEditDescription] = useState(node.description);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSave = () => {
    onUpdate(node.id, {
      ...node,
      title: editTitle,
      description: editDescription
    });
    setIsEditing(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Título"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Descrição"
              rows="2"
            />
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">{node.title}</h3>
              <div className="flex gap-1">
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-blue-600 dark:text-blue-400"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => onAddChild(node.id)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-green-600 dark:text-green-400"
                >
                  <Plus size={16} />
                </button>
                {!isRoot && (
                  <button
                    onClick={() => onRemove(node.id)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-red-600 dark:text-red-400"
                  >
                    <X size={16} />
                  </button>
                )}
                {node.children.length > 0 && (
                  <button
                    onClick={toggleExpand}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{node.description}</p>
          </div>
        )}
      </div>

      {isExpanded && node.children.length > 0 && (
        <div className="relative">
          <div className="absolute top-0 left-1/2 w-px h-4 bg-blue-300 dark:bg-blue-700"></div>
          <div className="pt-4">
            <div className="flex gap-8">
              {node.children.map((child) => (
                <div key={child.id} className="relative">
                  <div className="absolute top-0 left-1/2 w-px h-4 bg-blue-300 dark:bg-blue-700"></div>
                  <TreeCard
                    node={child}
                    onAddChild={onAddChild}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    isRoot={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CardTree = () => {
  const [tree, setTree] = useState(initialTree);

  const addChild = (parentId) => {
    const newNode = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Novo Card',
      description: 'Adicione uma descrição',
      children: []
    };

    const updateTree = (node) => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [...node.children, newNode]
        };
      }
      return {
        ...node,
        children: node.children.map(updateTree)
      };
    };

    setTree(updateTree(tree));
  };

  const removeNode = (nodeId) => {
    const removeFromTree = (node) => {
      return {
        ...node,
        children: node.children
          .filter(child => child.id !== nodeId)
          .map(removeFromTree)
      };
    };

    setTree(removeFromTree(tree));
  };

  const updateNode = (nodeId, updatedNode) => {
    const updateInTree = (node) => {
      if (node.id === nodeId) {
        return updatedNode;
      }
      return {
        ...node,
        children: node.children.map(updateInTree)
      };
    };

    setTree(updateInTree(tree));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto overflow-x-auto">
      <div className="min-w-max">
        <TreeCard
          node={tree}
          onAddChild={addChild}
          onRemove={removeNode}
          onUpdate={updateNode}
          isRoot={true}
        />
      </div>
    </div>
  );
};

export default function MoneyTreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-blue-200 dark:from-indigo-900 dark:to-purple-900">
     

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Árvore do Dinheiro
        </h1>
        <p className="text-xl mb-8 text-center text-gray-700 dark:text-gray-300">
          Crie sua própria árvore do dinheiro! Comece com o card principal e adicione novos ramos para aprender sobre economizar, gastar e investir.
        </p>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg overflow-x-auto">
          <CardTree />
        </div>

        
      </main>

    </div>
  );
}