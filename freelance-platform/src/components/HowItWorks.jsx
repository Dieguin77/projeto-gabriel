import React from 'react';
import { FileText, Search, MessageCircle, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-white" />,
    title: 'Publique seu Projeto',
    description: 'Descreva o que você precisa, defina o orçamento e prazo desejado.',
    color: 'bg-blue-500',
  },
  {
    icon: <Search className="h-10 w-10 text-white" />,
    title: 'Receba Propostas',
    description: 'Freelancers qualificados enviarão propostas para o seu projeto.',
    color: 'bg-purple-500',
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-white" />,
    title: 'Escolha e Negocie',
    description: 'Analise perfis, portfólios e converse com os candidatos.',
    color: 'bg-orange-500',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-white" />,
    title: 'Aprove e Pague',
    description: 'Receba o trabalho, aprove e libere o pagamento com segurança.',
    color: 'bg-green-500',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contratar um freelancer nunca foi tão fácil. Siga estes 4 passos simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Linha conectora */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Número do passo */}
                <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                
                {/* Ícone */}
                <div className={`${step.color} p-5 rounded-2xl shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                {/* Texto */}
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Comece Agora - É Grátis!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
