'use client'

import React, { useState } from 'react'
import { Button } from "../ui/dados/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/dados/card"
import { Input } from "../ui/dados/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/dados/table"
import { Waves, User, Edit, Save } from 'lucide-react'
import { useLocation } from 'react-router-dom'

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Seus Dados Pessoais
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Confira e gerencie suas informações pessoais
        </p>

        <Card className="max-w-4xl mx-auto bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-6 w-6 text-blue-600" />
              <span>Informações Pessoais</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campo</TableHead>
                    <TableHead>Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((field) => (
                    <TableRow key={field.key}>
                      <TableCell className="font-medium">{field.label}</TableCell>
                      <TableCell>
                        {editing ? (
                          <Input
                            value={editedData[field.key]}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                          />
                        ) : (
                          userData[field.key]
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 flex justify-end">
              {editing ? (
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" /> Salvar Alterações
                </Button>
              ) : (
                <Button onClick={handleEdit}>
                  <Edit className="mr-2 h-4 w-4" /> Editar Informações
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}