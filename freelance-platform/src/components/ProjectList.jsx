import React from 'react';
import { Tag, Clock, DollarSign } from 'lucide-react';

const projects = [
  {
    title: 'Desenvolvimento de E-commerce com React',
    client: 'Loja Tech',
    budget: 2500,
    time: '4 semanas',
    description: 'Preciso de um desenvolvedor experiente para criar uma loja virtual moderna e responsiva utilizando React e Next.js.',
    skills: ['React', 'Next.js', 'TailwindCSS', 'Node.js']
  },
  {
    title: 'Criação de Logo e Identidade Visual',
    client: 'Startup Inova',
    budget: 800,
    time: '2 semanas',
    description: 'Buscamos um designer para desenvolver um logo memorável e um manual de identidade visual para nossa nova marca.',
    skills: ['Design Gráfico', 'Illustrator', 'Branding']
  },
  {
    title: 'Gerenciamento de Campanhas no Google Ads',
    client: 'Marketing Direto',
    budget: 1200,
    time: 'Mensal',
    description: 'Procuramos um especialista em marketing digital para otimizar nossas campanhas de Google Ads e aumentar o ROI.',
    skills: ['Google Ads', 'SEO', 'Marketing Digital']
  },
  {
    title: 'Aplicativo Mobile para Delivery',
    client: 'FoodExpress',
    budget: 8000,
    time: '8 semanas',
    description: 'Desenvolvimento de aplicativo completo para iOS e Android para sistema de delivery com rastreamento em tempo real.',
    skills: ['React Native', 'Firebase', 'Maps API', 'Node.js']
  },
  {
    title: 'Redesign de Website Corporativo',
    client: 'Construtora ABC',
    budget: 3500,
    time: '3 semanas',
    description: 'Modernização completa do site institucional com foco em UX/UI e otimização para conversão de leads.',
    skills: ['UI/UX', 'WordPress', 'Elementor', 'SEO']
  },
  {
    title: 'Tradução de Documentos Técnicos',
    client: 'TechDocs Brasil',
    budget: 1500,
    time: '2 semanas',
    description: 'Tradução de manuais técnicos e documentação de software do inglês para português brasileiro.',
    skills: ['Tradução EN-PT', 'Documentação', 'Revisão']
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
    <h3 className="font-bold text-xl text-gray-800">{project.title}</h3>
    <p className="text-sm text-gray-500 mt-1">por {project.client}</p>
    <p className="text-gray-600 my-4">{project.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.skills.map(skill => (
        <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {skill}
        </span>
      ))}
    </div>

    <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
      <div className="flex items-center gap-1">
        <DollarSign size={16} />
        <span>R$ {project.budget.toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock size={16} />
        <span>{project.time}</span>
      </div>
    </div>
  </div>
);


const ProjectList = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Projetos Recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Ver todos os projetos
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
