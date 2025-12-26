import React, { useState } from 'react';
import { Briefcase, LogIn, UserPlus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">WorkanaClone</span>
            </a>
          </div>

          {/* Links da Direita - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Encontrar Projetos
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Publicar um Projeto
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Como Funciona
            </a>
          </div>

          {/* Botões de Ação - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <LogIn className="h-5 w-5 mr-1" />
              Entrar
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center shadow-md hover:shadow-lg"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Cadastrar
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-2 rounded-md hover:bg-gray-50">
                Encontrar Projetos
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-2 rounded-md hover:bg-gray-50">
                Publicar um Projeto
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-2 rounded-md hover:bg-gray-50">
                Como Funciona
              </a>
              <hr className="my-2" />
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md hover:bg-gray-50">
                <LogIn className="h-5 w-5 mr-2" />
                Entrar
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Cadastrar Grátis
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
