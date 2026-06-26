import { Card } from '../ui/card';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi';

export function Contato() {
  return (
    <section id="contato" className="bg-gray-950 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Vamos conversar
          </h2>

          <div className="mx-auto mb-4 h-1 w-20 bg-purple-600" />

          <p className="mx-auto max-w-xl text-gray-400">
            Aberta a oportunidades como Desenvolvedora Full Stack, na área de
            Engenharia de Software ou em projetos de Machine Learning.
          </p>
        </div>

        <div className="grid place-items-center">
          <div className="flex flex-col">
            <Card className="mx-auto flex w-[340px] flex-col items-center border-gray-800 bg-gray-900 p-6 text-center">
              <p className="text-sm leading-relaxed text-gray-300">
                Possuo experiência no desenvolvimento de aplicações web
                completas, atuando do front-end ao back-end, com integração de
                APIs. Também possuo experiência acadêmica com Machine Learning
                aplicada à análise de dados.
              </p>

              <p className="mt-3 text-sm text-gray-400">
                Se você tiver uma oportunidade, projeto ou ideia, fico à
                disposição para conversar.
              </p>

              <div className="mt-6 mb-6 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:lannamarya2016@gmail.com"
                  className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-white transition hover:bg-purple-600"
                  aria-label="Enviar e-mail"
                >
                  <HiOutlineMail className="h-5 w-5" />
                  <span className="text-sm font-medium">E-mail</span>
                </a>

                <a
                  href="https://lattes.cnpq.br/7989926813407096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-white transition hover:bg-purple-600"
                >
                  <HiOutlineDocumentText className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Perfil acadêmico (Lattes)
                  </span>
                </a>
              </div>

              <h3 className="mb-3 text-white">Conecte-se comigo</h3>

              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Lanna-Maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-800 p-3 transition hover:bg-purple-600"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5 text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lannamaria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-800 p-3 transition hover:bg-purple-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-5 w-5 text-white" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
