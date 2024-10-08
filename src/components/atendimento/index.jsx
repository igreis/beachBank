import React, { useState, useEffect } from 'react'
import { Button } from "../ui/uiAtendimento/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Waves, UserCheck, UserPlus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../../store/store'

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow"
    return this.items.shift()
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue"
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

export default function CustomerServicePage() {
  const [queue, setQueue] = useState(new Queue())
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [customerCount, setCustomerCount] = useState(0)
  const [isDequeuing, setIsDequeuing] = useState(false)

  const { darkMode } = useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!queue.isEmpty() && !currentCustomer) {
        setIsDequeuing(true)
        setTimeout(() => {
          const nextCustomer = queue.front()
          setCurrentCustomer(nextCustomer)

          const newQueue = new Queue()
          newQueue.items = [...queue.items]
          newQueue.dequeue()
          setQueue(newQueue)

          setIsDequeuing(false)

          setTimeout(() => {
            setCurrentCustomer(null)
          }, 2000) // Simula o tempo de atendimento
        }, 1000) // Tempo para a animação de desenfileirar
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [queue, currentCustomer])

  useEffect(() => {
    if(darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  })

  const addCustomer = () => {
    const newCustomer = `Cliente ${customerCount + 1}`
    const updatedQueue = new Queue()
    updatedQueue.items = [...queue.items, newCustomer] // Adiciona o novo cliente
    setQueue(updatedQueue) // Atualiza o estado com a nova fila
    setCustomerCount(customerCount + 1) // Atualiza o contador de clientes
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-blue-400 mb-8">
          Atendimento ao Cliente
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Simulação de fila de atendimento do Praia Bank
        </p>
  
        <div className="flex flex-col items-center mb-8">
          <Button onClick={addCustomer} className="mb-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
            <UserPlus className="mr-2 h-4 w-4" /> Adicionar Cliente à Fila
          </Button>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
            Clientes na fila: {queue.size()}
          </p>
        </div>
  
        {/* Seção para exibir os clientes em espera */}
        <Card className="mb-8 bg-white dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <UserCheck className="h-6 w-6" />
              <span>Clientes em Espera</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              {queue.items.length > 0
                ? queue.items.join(', ')
                : "Nenhum cliente em espera"}
            </p>
          </CardContent>
        </Card>
  
        <Card className="mb-8 bg-white dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <UserCheck className="h-6 w-6" />
              <span>Atendimento Atual</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              {currentCustomer ? currentCustomer : "Nenhum cliente em atendimento"}
            </p>
          </CardContent>
        </Card>
  
        <div className="relative h-40 bg-blue-50 dark:bg-gray-700 rounded-lg overflow-hidden">
          <AnimatePresence>
            {queue.items.map((customer, index) => (
              <motion.div
                key={`${customer}-${index}`}
                className="absolute bottom-0 w-14 h-14 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white font-bold"
                initial={{ x: '100%', y: 40 }}
                animate={{ x: index * 60, y: 0 }}
                exit={isDequeuing && index === 0 ? { x: '-100%', y: 40 } : { x: (index - 1) * 60, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {customer.split(' ')[1]}
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="absolute top-0 right-5 w-16 h-full bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-700 z-10" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-blue-50 to-transparent dark:from-gray-700 z-10" />
        </div>
      </main>
    </div>
  );  
}