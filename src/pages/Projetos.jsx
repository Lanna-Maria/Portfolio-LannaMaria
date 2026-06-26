import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CafeDoAmanha from '../assets/img/CafeAmanha.png';
import PetShop from '../assets/img/PetFeliz.png';
import ApiAlunos from '../assets/img/Api.png';
import ML from '../assets/img/ML.png';
import Calculadora from '../assets/img/Calculadora.png';

export function Projetos() {
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
        'Projeto web full stack de uma cafeteria desenvolvido em Node.js/Express, React e PostgreSQL com Prisma. Desenvolvido na disciplina de Estudos Especiais (Gerência de Configuração de Software - UFC 2026.1), o projeto evoluiu ao longo do desenvolvimento com melhorias de interface, aplicação de boas práticas de versionamento, deploy e introdução de conceitos de integração e entrega contínua (CI/CD).',
      image: CafeDoAmanha,
      tags: [
        'React.js',
        'Node.js',
        'PostgreSQL',
        'Prisma',
        'Axios',
        'Git',
        'CI/CD',
        'Vercel',
      ],
      github: 'https://github.com/Lanna-Maria/EstudosEspeciais.git',
      demo: 'https://cafe-gourmet-front.vercel.app/',
    },

    {
      title: '🧮 Calculadora React',
      description:
        'Aplicação web desenvolvida em React.js como projeto prático do Curso de Extensão Capacita Brasil. Implementa uma calculadora funcional com operações matemáticas básicas e avançadas, reforçando conceitos como componentização, estado, eventos e renderização dinâmica. O projeto também foi publicado via GitHub Pages.',
      image: Calculadora,
      tags: [
        'React.js',
        'JavaScript (ES6+)',
        'Frontend',
        'State Management',
        'UI Components',
      ],
      github: 'https://github.com/Lanna-Maria/Calculadora-React',
      demo: 'https://Lanna-Maria.github.io/Calculadora-React',
    },
    {
      title: '📚 API de Cadastro de Alunos',
      description:
        'API REST desenvolvida em Node.js com arquitetura MVC para gerenciamento de alunos e professores. Implementa operações CRUD, integração com PostgreSQL e estruturação organizada do backend.',
      image: ApiAlunos,
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/Lanna-Maria/cadastro-de-alunos-backend.git',
    },

    {
      title: '📊 Inteligência Computacional / Machine Learning',
      description:
        'Projeto de Machine Learning aplicado à análise de desempenho de equipes de League of Legends, utilizando técnicas de aprendizado não supervisionado. Implementa o algoritmo K-Means para identificação de padrões entre times, com pré-processamento de dados, avaliação de clusters e visualização com PCA e t-SNE.',
      image: ML,
      tags: [
        'Python',
        'Machine Learning',
        'Clustering',
        'K-Means',
        'PCA',
        't-SNE',
      ],
      github:
        'https://github.com/Lanna-Maria/projetos-academicos/tree/8024d3e99215bd3bcfdf939a37c8c52e8d78f391/inteligencia-computacional',
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
          />
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
                      <FaGithub className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>

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
                        <HiOutlineExternalLink className="w-4 h-4 mr-2" />
                        Deploy
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

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
            <FaGithub className="w-4 h-4" />
            <span className="leading-tight">Ver todos no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
