import { Card } from './ui/card';
import {
  Github,
  Linkedin,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Download,
  FileText,
} from 'lucide-react';

import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Vamos conversar
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4" />

          <p className="text-gray-400 max-w-xl mx-auto">
            Aberta a oportunidades como Desenvolvedora Full Stack e projetos em
            Engenharia de Software.
          </p>
        </div>

        <div className="grid place-items-center">
          <div className="flex flex-col">
            <Card className="w-[340px] p-6 bg-gray-900 border-gray-800 flex flex-col items-center text-center mx-auto">
              <p className="text-gray-300 text-sm leading-relaxed">
                Possuo experiência no desenvolvimento de aplicações web
                completas,atuando do front-end ao back-end e integração de
                sistemas.
              </p>

              <p className="text-gray-400 text-sm">
                Se você tem uma oportunidade, projeto ou ideia, vamos conversar.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-auto mb-6">
                <a
                  href="mailto:lannamarya2016@gmail.com"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition text-white"
                  aria-label="Enviar e-mail"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">E-mail</span>
                </a>

                <a
                  href="https://lattes.cnpq.br/7989926813407096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition text-white"
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Lattes (acadêmico)
                  </span>
                </a>
              </div>

              <h3 className="text-white mb-3">Conecte-se comigo</h3>

              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/Lanna-Maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lannamaria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
