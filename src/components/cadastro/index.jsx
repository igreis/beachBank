import React, { useState } from 'react'
import { Button } from "../ui/cadastro/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/cadastro/card"
import { Input } from "../ui/cadastro/input"
import { Label } from "../ui/cadastro/label"
import { useNavigate, useLocation } from 'react-router-dom'


export default function OpenAccountPage() {

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: location.state?.nome || '',
    email: location.state?.email || '',
    phone: location.state?.telefone || '',
    cpf: location.state?.cpf || '',
    birthDate: location.state?.birthDate || '',
    income: location.state?.income || '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/dados/' , {
      state: {
        nome: formData.fullName,
        email: formData.email,
        telefone: formData.phone,
        cpf: formData.cpf,
        birthDate: formData.birthDate,
        income: formData.income,
      }
    })
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          {location.state ? "Atualize seus Dados" : "Abra sua conta no Praia Bank"}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {location.state ? "Preencha o formulário abaixo para atualizar seu cadastro" : 
          "Preencha o formulário abaixo para começar sua jornada financeira conosco"}
        </p>

        <Card className="max-w-8xl mx-auto bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Formulário de Abertura de Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Renda Mensal</Label>
                  <Input
                    id="income"
                    name="income"
                    type="number"
                    value={formData.income}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Abrir Conta
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}