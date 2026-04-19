import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

import { Download } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skills = {
    frontend: ['React', 'HTML5', 'CSS3', 'Bootstrap5', 'Axios'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'API RESTful', 'Prisma'],
    linguagensDeProgramacao: ['Python', 'JavaScript'],
    ferramentasControle: [
      'Git',
      'GitHub',
      'VS Code',
      'Insomnia',
      'npm',
      'Figma',
    ],
  };

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* TÍTULO */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white">Sobre Mim</h2>
          <motion.div
            className="w-20 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* TEXTO + INFO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-4 text-gray-300">
              Sou desenvolvedora Full Stack com foco em aplicações web modernas
              utilizando React, Node.js e JavaScript. Possuo experiência no
              desenvolvimento de interfaces responsivas, APIs REST e integração
              com bancos de dados.
            </p>

            <p className="mb-4 text-gray-300">
              Atuo na construção de sistemas completos, do front-end ao
              back-end, com foco em qualidade de código, código limpo e
              performance.;
            </p>

            <p className="text-gray-300">
              Atualmente, sou mestranda em Engenharia Elétrica e de Computação e
              graduada em Ciência da Computação, o que fortalece minha base
              teórica e capacidade de resolver problemas complexos.
            </p>

            <p className="text-gray-300">
              Busco oportunidade como desenvolvedora para aplicar e expandir
              minhas habilidades.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                label: 'Formação Acadêmica',
                value:
                  'Mestranda em Engenharia Elétrica e de Computação | Bacharela em Ciência da Computação',
              },
              {
                label: 'Experiência',
                value: 'Projetos acadêmicos e Full Stack',
              },
              {
                label: 'Formação Complementar',
                value: 'Desenvolvimento Full Stack',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-2 h-2 bg-purple-600 rounded-full" />
                <span className="text-gray-300">
                  <strong className="text-white">{item.label}:</strong>{' '}
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        {/* ESPAÇADOR */}
        <div className="h-32 md:h-40 lg:h-48" />

        {/* HABILIDADES TÉCNICAS */}
        <div className="mb-24 text-center">
          <h2 className="mb-4 text-white">Habilidades Técnicas</h2>
        </div>

        <Card className="p-6 bg-gray-900 border-gray-800">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="flex flex-wrap sm:flex-nowrap w-full gap-2 mb-8 h-auto">
              {[
                { value: 'frontend', label: 'Frontend' },
                { value: 'backend', label: 'Backend' },
                {
                  value: 'linguagensDeProgramacao',
                  label: 'Linguagens de Programação',
                },
                { value: 'ferramentasControle', label: 'Ferramentas' },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="
                    text-xs sm:text-sm
                    transition-colors duration-200
                    hover:bg-purple-600
                    data-[state=active]:bg-purple-600
                    data-[state=active]:text-white
                  "
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skills).map(([key, values]) => (
              <TabsContent key={key} value={key}>
                <div className="flex flex-wrap gap-3">
                  {values.map((skill) => (
                    <Badge
                      key={skill}
                      className="
                        px-4 py-2
                        bg-purple-900/50
                        text-purple-300
                        border border-purple-700
                        transition-all
                        hover:bg-purple-800
                        hover:scale-105
                      "
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
