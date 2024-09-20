'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "../ui/dados/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/dados/card"
import { Input } from "../ui/dados/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/dados/table"
import { User, Edit, Save } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import useStore from '../../store/store'

export default function UserDataPage() {

  const location = useLocation();

  const [userData, setUserData] = useState({
    name: location.state.nome,
    email: location.state.email,
    phone: location.state.telefone,
    birthDate: location.state.birthDate,
    cpf: location.state.cpf,
  })

  const [editing, setEditing] = useState(false)
  const [editedData, setEditedData] = useState({...userData})
  const { darkMode } = useStore();

  const fields = [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Telefone' },
    { key: 'birthDate', label: 'Data de Nascimento' },
    { key: 'cpf', label: 'CPF' },
  ]

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    setUserData(editedData)
    setEditing(false)
  }

  const handleChange = (key, value) => {
    setEditedData(prev => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    if(darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-blue-400 mb-8">
          Seus Dados Pessoais
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Confira e gerencie suas informações pessoais
        </p>
  
        <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800 dark:text-gray-300">
              <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span>Informações Pessoais</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-800 dark:text-gray-300">Campo</TableHead>
                    <TableHead className="text-gray-800 dark:text-gray-300">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((field) => (
                    <TableRow key={field.key}>
                      <TableCell className="font-medium text-gray-800 dark:text-gray-300">
                        {field.label}
                      </TableCell>
                      <TableCell>
                        {editing ? (
                          <Input
                            value={editedData[field.key]}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                          />
                        ) : (
                          <span className="text-gray-800 dark:text-gray-300">
                            {userData[field.key]}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 flex justify-end">
              {editing ? (
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  <Save className="mr-2 h-4 w-4" /> Salvar Alterações
                </Button>
              ) : (
                <Button onClick={handleEdit} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  <Edit className="mr-2 h-4 w-4" /> Editar Informações
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );  
}