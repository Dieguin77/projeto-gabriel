import React from 'react';
import { Users, Briefcase, CheckCircle, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    value: '50.000+',
    label: 'Freelancers Cadastrados',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    value: '12.000+',
    label: 'Projetos Publicados',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    value: '98%',
    label: 'Taxa de Satisfação',
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    value: '150+',
    label: 'Países Atendidos',
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
