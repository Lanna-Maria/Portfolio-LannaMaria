import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import cafeDoAmanha from '../components/assets/img/CafeAmanha.png';
import petShop from '../components/assets/img/petFeliz.png';
import apiAlunos from '../components/assets/img/api.png';
import academicos from '../components/assets/img/faculdade.png';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: '☕ Sistema Full Stack – Cafeteria Gourmet',
      description:
        'Aplicação web full stack para pedidos online e gerenciamento de produtos e pedidos, integrando front-end e back-end por meio REST. Possui controle de status, interface responsiva e versionamento de código com Git.',
      image: cafeDoAmanha,
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Axios'],
      github: 'https://github.com/Lanna-Maria/EstudosEspeciais.git',
    },
    {
      title: '🐾 PetShop Feliz (React)',
      description:
        'Aplicação web responsiva simulando um sistema de petshop, com navegação entre páginas, gerenciamento de estado e organização de serviços. Foco em experiência do usuário e estrutura de aplicação front-end moderna.',
      image: petShop,
      tags: ['React', 'React Router', 'Context API', 'Bootstrap'],
      github: 'https://github.com/Lanna-Maria/projeto-pet-shop-frontend.git',
      demo: 'https://lanna-maria.github.io/projeto-pet-shop-frontend/',
    },
    {
      title: '📚 API de Cadastro de Alunos',
      description:
        'API REST desenvolvida em Node.js com arquitetura MVC para gerenciamento de alunos e professores. Implementa operações CRUD, integração com banco de dados PostgreSQL e organização estruturada do backend.',
      image: apiAlunos,
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/Lanna-Maria/cadastro-de-alunos-backend.git',
    },
    {
      title: '🎓 Projetos Acadêmicos',
      description:
        'Conjunto de projetos desenvolvidos durante a graduação em Ciência da Computação, envolvendo desenvolvimento web, programação e resolução de problemas. Inclui aplicações práticas utilizando diferentes tecnologias.',
      image: academicos,
      tags: ['JavaScript', 'Python', 'Java', 'PHP', 'MySQL'],
      github: 'https://github.com/Lanna-Maria/projetos-academicos.git',
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-950" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white text-3xl font-semibold">
            Projetos em Destaque
          </h2>
          <motion.div
            className="w-20 h-1 bg-purple-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all bg-gray-900 border-gray-800 h-full">
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-purple-600 text-purple-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {/* Botão Código */}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>

                  {/* Botão Demo (apenas se o projeto tiver a propriedade demo) */}
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Deploy
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* ESPAÇADOR */}
      <div className="h-32 md:h-40 lg:h-48" />
      <h3 className="text-white text-sm font-medium mb-6 text-center">
        Interessado em ver mais do meu trabalho?
      </h3>

      <div className="flex justify-center">
        <a
          href="https://github.com/Lanna-Maria"
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-flex w-fit
      items-center gap-2
      px-3 py-1.5
      bg-gray-800
      border border-gray-700
      rounded-lg
      text-white text-xs
      transition-all duration-300
      hover:bg-purple-600
      hover:border-purple-500
      hover:shadow-md
      hover:shadow-purple-600/30
      hover:scale-105
    "
        >
          <Github className="w-4 h-4" />
          <span className="leading-tight">Ver todos no GitHub</span>
        </a>
      </div>
    </section>
  );
}
