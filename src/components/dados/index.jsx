import React from 'react'
import { Button } from "../ui/dados/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/dados/card"
import { User, Edit } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function UserDataPage() {
  
  const location = useLocation();
  const navigate = useNavigate();

  const dados = location.state || {};
  console.log(dados)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Seus Dados Pessoais
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Confira e gerencie suas informações pessoais
        </p>

        <Card className="max-w-2xl mx-auto bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-6 w-6 text-blue-600" />
              <span>Informações Pessoais</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold text-gray-600 col-span-1">Nome:</dt>
                <dd className="col-span-2">{dados.nome}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold text-gray-600 col-span-1">Email:</dt>
                <dd className="col-span-2">{dados.email}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold text-gray-600 col-span-1">Telefone:</dt>
                <dd className="col-span-2">{dados.telefone}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold text-gray-600 col-span-1">Data de Nascimento:</dt>
                <dd className="col-span-2">{dados.birthDate}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold text-gray-600 col-span-1">CPF:</dt>
                <dd className="col-span-2">{dados.cpf}</dd>
              </div>
            </dl>
            <Button className="mt-8 w-full" variant="outline" onClick={() => navigate('/cadastro', {state: dados })}>
              <Edit className="mr-2 h-4 w-4" /> Editar Informações
            </Button>
          </CardContent>
        </Card>
      </main> 
    </div>
  )
}