"use client"
import React from 'react';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from 'lucide-react'

export default function Contacts () {
  return (
    <section className="w-full sm:py-4 md:py-6 lg:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Formulário de Contato */}
          <div className="flex-1 h-auto space-y-6 px-12 border p-8 rounded-md shadow-lg">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Entre em Contato</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Preencha o formulário abaixo para enviar sua mensagem.
              </p>
            </div>
            <form className="space-y-4" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault(); // Evita o comportamento padrão do formulário

                // Capturar os valores dos inputs
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const user_email = (document.getElementById('email') as HTMLInputElement).value;
                const subject = (document.getElementById('subject') as HTMLInputElement).value;
                const message = (document.getElementById('message') as HTMLTextAreaElement).value;
                const email_target = 'anaestermatos483@gmail.com'

                // Montar o link mailto
                const mailtoLink = `mailto:${email_target}?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(
                  `Olá,\n\nMeu nome é ${name}.\n\n${message}\n\nAtenciosamente, ${name}\n${user_email}`
                )}`;

                // Abrir o cliente de e-mail
                window.location.href = mailtoLink;
              }}>
                
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" placeholder="seu@email.com" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Assunto da mensagem" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Digite sua mensagem aqui"
                  required
                />
              </div>

              <Button className="w-full
                bg-orange-100 border border-primary text-lg
                text-primary font-semibold hover:bg-primary hover:text-secondary" size="lg">
                Enviar
              </Button>

            </form>
          </div>

          {/* Links Acadêmicos */}
          <div className="flex-1 space-y-6 px-12">
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Trabalhos Acadêmicos</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Para ter acesso aos trabalhos de <span className='font-semibold'>Ana Ester de Matos Silva</span> acesse os seguintes links:
              </p>
            </div>

            <div className="space-y-4">

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className='text-xl'>Trabalho de Conclusão de Curso de História – UFPI/CSHNB</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Entre melodias, ruídos e ritmos: sonoridades urbanas na cidade de Picos-PI, nas décadas de 1980 e 1990
                  </p>
                  <a 
                    href="https://ufpi.br/biblioteca-digital-de-monografias-cshnb-bdm/50823-historia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                  >
                    <Button className="w-full font-semibold
                    text-primary border border-primary bg-orange-100 
                    hover:text-background hover:bg-primary" variant="outline">
                      Acessar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className='text-xl'>Dissertação de Mestrado – PPGHB/UFPI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    "Cidade do Barulho": análise histórica das sonoridades urbanas da cidade de Picos-PI (década de 1990)
                  </p>
                  <a 
                    href="http://repositorio.ufpi.br:8080/xmlui/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                  >
                    <Button className="w-full font-semibold
                    text-primary border border-primary bg-orange-100 
                    hover:text-background hover:bg-primary" variant="outline">
                      Acessar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className='text-xl'>Currículo Lattes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Acesse o currículo acadêmico de Ana Ester Matos Silva
                  </p>
                  <a 
                    href="http://lattes.cnpq.br/3307191696748619" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                  > 
                    <Button className="w-full font-semibold
                    text-primary border border-primary bg-orange-100
                    hover:text-background hover:bg-primary" variant="outline">
                      Acessar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

            </div>
          </div>


        </div>
      </div>
    </section>
  )
}