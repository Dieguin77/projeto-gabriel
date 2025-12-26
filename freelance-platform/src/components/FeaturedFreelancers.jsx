import React from 'react';
import { Star, MapPin, CheckCircle } from 'lucide-react';

const freelancers = [
  {
    name: 'Lucas Mendes',
    title: 'Desenvolvedor Full Stack',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    location: 'São Paulo, SP',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 120,
    skills: ['React', 'Node.js', 'TypeScript'],
    verified: true,
  },
  {
    name: 'Juliana Costa',
    title: 'Designer UX/UI',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    location: 'Rio de Janeiro, RJ',
    rating: 5.0,
    reviews: 89,
    hourlyRate: 95,
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    verified: true,
  },
  {
    name: 'Pedro Almeida',
    title: 'Especialista em Marketing Digital',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    location: 'Belo Horizonte, MG',
    rating: 4.8,
    reviews: 156,
    hourlyRate: 85,
    skills: ['Google Ads', 'SEO', 'Social Media'],
    verified: true,
  },
  {
    name: 'Fernanda Lima',
    title: 'Redatora e Copywriter',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    location: 'Curitiba, PR',
    rating: 4.9,
    reviews: 203,
    hourlyRate: 70,
    skills: ['Copywriting', 'SEO', 'Blog Posts'],
    verified: true,
  },
];

const FreelancerCard = ({ freelancer }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
    {/* Header com gradiente */}
    <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-600" />
    
    {/* Avatar */}
    <div className="relative px-6 pb-6">
      <img
        src={freelancer.avatar}
        alt={freelancer.name}
        className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 left-6 object-cover"
      />
      
      {freelancer.verified && (
        <div className="absolute -top-8 left-20">
          <CheckCircle className="h-6 w-6 text-blue-600 bg-white rounded-full" />
        </div>
      )}
      
      <div className="pt-14">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
          {freelancer.name}
        </h3>
        <p className="text-gray-500 text-sm">{freelancer.title}</p>
        
        <div className="flex items-center gap-1 mt-2 text-sm text-gray-400">
          <MapPin className="h-4 w-4" />
          <span>{freelancer.location}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-800">{freelancer.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">({freelancer.reviews} avaliações)</span>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {freelancer.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t">
          <div>
            <span className="text-2xl font-bold text-gray-800">R${freelancer.hourlyRate}</span>
            <span className="text-gray-400 text-sm">/hora</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedFreelancers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Freelancers em Destaque
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça alguns dos profissionais mais bem avaliados da nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freelancers.map((freelancer, index) => (
            <FreelancerCard key={index} freelancer={freelancer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Ver todos os freelancers
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;
