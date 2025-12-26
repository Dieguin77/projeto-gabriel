import React from 'react';
import { Code, Palette, Megaphone, PenTool, BarChart2, Briefcase } from 'lucide-react';

const categories = [
  {
    title: 'TI e Programação',
    description: 'Web, Mobile e Software',
    icon: <Code className="mx-auto mb-4 text-blue-500" size={40} />,
    borderColor: 'border-blue-500'
  },
  {
    title: 'Design e Multimedia',
    description: 'Logos, Vídeos e UX/UI',
    icon: <Palette className="mx-auto mb-4 text-purple-500" size={40} />,
    borderColor: 'border-purple-500'
  },
  {
    title: 'Marketing e Vendas',
    description: 'SEO, Social Media e Ads',
    icon: <Megaphone className="mx-auto mb-4 text-orange-500" size={40} />,
    borderColor: 'border-orange-500'
  },
  {
    title: 'Redação e Tradução',
    description: 'Artigos, eBooks e Conteúdo',
    icon: <PenTool className="mx-auto mb-4 text-green-500" size={40} />,
    borderColor: 'border-green-500'
  },
  {
    title: 'Serviços Empresariais',
    description: 'Jurídico, Contábil e Planos',
    icon: <Briefcase className="mx-auto mb-4 text-red-500" size={40} />,
    borderColor: 'border-red-500'
  },
  {
    title: 'Engenharia e Arquitetura',
    description: 'Plantas, 3D e Estruturas',
    icon: <BarChart2 className="mx-auto mb-4 text-yellow-500" size={40} />,
    borderColor: 'border-yellow-500'
  }
];

const CategoryCard = ({ icon, title, description, borderColor }) => (
  <div className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition border-t-4 ${borderColor} text-center`}>
    {icon}
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
  </div>
);

const Categories = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Navegue pelas principais categorias
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map(category => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
