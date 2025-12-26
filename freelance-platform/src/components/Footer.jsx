import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">WorkanaClone</span>
            </a>
            <p className="text-gray-500 text-sm">
              A plataforma que conecta os melhores talentos aos melhores projetos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Para Clientes</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Como funciona</a></li>
              <li><a href="#" className="hover:text-blue-600">Publicar um projeto</a></li>
              <li><a href="#" className="hover:text-blue-600">Encontrar freelancers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Para Freelancers</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Como funciona</a></li>
              <li><a href="#" className="hover:text-blue-600">Encontrar projetos</a></li>
              <li><a href="#" className="hover:text-blue-600">Criar perfil</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Sobre nós</a></li>
              <li><a href="#" className="hover:text-blue-600">Contato</a></li>
              <li><a href="#" className="hover:text-blue-600">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} WorkanaClone. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
