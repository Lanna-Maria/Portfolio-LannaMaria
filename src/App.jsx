import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black w-full">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Toaster />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
