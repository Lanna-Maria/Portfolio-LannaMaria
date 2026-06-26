import { Experiencia } from './pages/Experiencia';
import { Sobre } from './pages/Sobre';
import { Projetos } from './pages/Projetos';
import { Contato } from './pages/Contato';
import { Inicio } from './pages/Inicio';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black w-full">
      <Header />
      <Inicio />
      <Projetos />
      <Experiencia />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}
