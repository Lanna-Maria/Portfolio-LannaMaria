import { Button } from '../ui/button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineArrowDown } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import perfil from '../assets/img/Perfil.png';

export function Inicio() {
  const [displayedText, setDisplayedText] = useState('');

  const fullText = 'Lanna Maria';
  const fullRole =
    'Desenvolvedora Full Stack • React • Node.js • JavaScript | Engenharia de Software | Machine Learning';

  const fullDescription =
    'Desenvolvo aplicações web completas com foco em engenharia de software, integração de APIs, interfaces responsivas e experiência do usuário. Também possuo experiência com dados e Machine Learning em projetos acadêmicos e pessoais. Disponível para oportunidades de trabalho e projetos freelance.';

  useEffect(() => {
    let textIndex = 0;

    const interval = setInterval(() => {
      if (textIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, textIndex));
        textIndex++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black text-white"
    >
      {/* Partículas */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Foto */}
        <motion.div
          className="mb-10 -mt-24 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
          }}
        >
          <div className="rounded-full p-1">
            <motion.div
              className="h-32 w-32 overflow-hidden rounded-full border-2 border-purple-500/40 bg-black shadow-xl shadow-purple-500/20 sm:h-36 sm:w-36"
              whileHover={{
                scale: 1.05,
              }}
            >
              <img
                src={perfil}
                alt="Foto de perfil da Lanna Maria"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Nome */}
        <motion.h1
          style={{
            fontSize: 'clamp(1.8rem,2.5vw,3.5rem)',
          }}
          className="mb-6 flex items-center justify-center gap-3 font-extrabold tracking-tight"
        >
          <motion.span
            animate={{
              rotate: [0, 14, -8, 14, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            👋
          </motion.span>

          <span>
            Olá, me chamo{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </motion.h1>

        {/* Cargo */}
        <motion.h2
          className="mb-4 text-lg text-gray-300 sm:text-xl md:text-2xl lg:text-3xl"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          {fullRole}
        </motion.h2>

        {/* Descrição */}
        <motion.p
          className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          {fullDescription}
        </motion.p>

        {/* Botão */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-4"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projetos')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Ver Projetos
          </Button>
        </motion.div>

        {/* Redes sociais */}
        <motion.div
          className="flex justify-center gap-8"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <motion.a
            href="https://github.com/Lanna-Maria"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: 5,
            }}
          >
            <FaGithub className="h-6 w-6 transition hover:text-purple-400" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/lannamaria/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: 5,
            }}
          >
            <FaLinkedinIn className="h-6 w-6 transition hover:text-purple-400" />
          </motion.a>

          <motion.a
            href="mailto:lannamarya2016@gmail.com"
            whileHover={{
              scale: 1.2,
              rotate: 5,
            }}
          >
            <HiOutlineMail className="h-6 w-6 transition hover:text-purple-400" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => scrollToSection('projetos')}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block"
      >
        <HiOutlineArrowDown className="h-8 w-8 text-purple-400" />
      </button>
    </section>
  );
}
