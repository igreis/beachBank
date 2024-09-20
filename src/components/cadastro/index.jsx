import React, { useEffect, useState } from 'react'
import { Button } from "../ui/cadastro/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/cadastro/card"
import { Input } from "../ui/cadastro/input"
import { Label } from "../ui/cadastro/label"
import { useNavigate, useLocation } from 'react-router-dom'
import useStore from '../../store/store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isEmail } from 'validator'

export default function OpenAccountPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useStore();

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
    //VALIDAÇOES
    if (!(formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.cpf &&
      formData.birthDate &&
      formData.income &&
      formData.password &&
      formData.confirmPassword)
    ) {
      toast.error('Preencha todos os dados')
      return;
    }
    if (formData.password != formData.confirmPassword) {
      console.log(formData.password, formData.confirmPassword)
      toast.error('Senha ou confirmar senha inválido');
      return;
    }
    if(!isEmail(formData.email)) {
      toast.error('E-mail inválido')
      return;
    }
    
      navigate('/dados/', {
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

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          {location.state ? "Atualize seus Dados" : "Abra sua conta no Praia Bank"}
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          {location.state ? "Preencha o formulário abaixo para atualizar seu cadastro" :
            "Preencha o formulário abaixo para começar sua jornada financeira conosco"}
        </p>

        <Card className="max-w-8xl mx-auto bg-white dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-blue-400">
              Formulário de Abertura de Conta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-800 dark:text-gray-300">Nome Completo</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800 dark:text-gray-300">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-800 dark:text-gray-300">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf" className="text-gray-800 dark:text-gray-300">CPF</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="text-gray-800 dark:text-gray-300">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income" className="text-gray-800 dark:text-gray-300">Renda Mensal</Label>
                  <Input
                    id="income"
                    name="income"
                    type="number"
                    value={formData.income}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-800 dark:text-gray-300">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-800 dark:text-gray-300">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                Abrir Conta
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}