// 1. Todos os imports devem ficar no topo
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats.jsx';
import Categories from './components/CategoryCard.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FeaturedFreelancers from './components/FeaturedFreelancers.jsx';
import ProjectList from './components/ProjectList.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

// 2. Importe o CSS global para garantir que o Tailwind funcione
import './index.css'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Componente de Navegação */}
      <Navbar />

      <main className="flex-grow">
        {/* Seção Principal (Hero) */}
        <Hero />

        {/* Estatísticas da Plataforma */}
        <Stats />

        {/* Seção de Categorias */}
        <Categories />

        {/* Como Funciona */}
        <HowItWorks />

        {/* Freelancers em Destaque */}
        <FeaturedFreelancers />

        {/* Seção de Projetos Recentes */}
        <ProjectList />

        {/* Depoimentos de Clientes */}
        <Testimonials />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

// 3. Apenas um export default por arquivo
export default App;