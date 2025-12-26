import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Encontre os melhores freelancers para o seu projeto
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Milhares de profissionais qualificados prontos para trabalhar.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Qual serviço você está procurando?"
              className="w-full p-4 pr-16 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
