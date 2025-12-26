import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina Silva',
    role: 'CEO, TechStart',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Encontrei desenvolvedores incríveis para meu projeto em menos de 24 horas. A qualidade dos profissionais superou todas as minhas expectativas!',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Diretor de Marketing, AgênciaX',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Já contratei mais de 20 freelancers pela plataforma. O processo é simples, seguro e os resultados sempre são excelentes.',
    rating: 5,
  },
  {
    name: 'Ana Beatriz',
    role: 'Fundadora, E-commerce Plus',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'A plataforma revolucionou a forma como gerencio projetos. Economizei tempo e dinheiro, além de ter acesso aos melhores talentos do mercado.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative">
    <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
    
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    
    {/* Content */}
    <p className="text-gray-600 mb-6 leading-relaxed">
      "{testimonial.content}"
    </p>
    
    {/* Author */}
    <div className="flex items-center gap-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Milhares de empresas já transformaram seus projetos com nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Logos de empresas */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-400 text-sm mb-8">
            EMPRESAS QUE CONFIAM EM NÓS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <span className="text-2xl font-bold text-gray-400">Google</span>
            <span className="text-2xl font-bold text-gray-400">Microsoft</span>
            <span className="text-2xl font-bold text-gray-400">Amazon</span>
            <span className="text-2xl font-bold text-gray-400">Meta</span>
            <span className="text-2xl font-bold text-gray-400">Netflix</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
