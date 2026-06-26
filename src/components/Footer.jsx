import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/Lanna-Maria',
      icon: FaGithub,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/lannamaria/',
      icon: FaLinkedinIn,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:lannamarya2016@gmail.com',
      icon: HiOutlineMail,
      label: 'Email',
    },
  ];

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-[#062f7a] pt-10 pb-6 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* DESKTOP */}
        <div className="hidden items-center justify-between md:flex">
          {/* Espaço vazio à esquerda */}
          <div className="w-32" />

          {/* Links centrais */}
          <nav className="flex gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative transition-all duration-300
                  hover:text-purple-300
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-purple-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ícones */}
          <div className="flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  rounded-lg border border-white/30 p-3
                  transition-all duration-300
                  hover:scale-110 hover:border-purple-400
                  hover:bg-purple-600 hover:shadow-lg
                  hover:shadow-purple-500/30
                  active:scale-95
                "
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col items-center gap-6 text-sm md:hidden">
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  transition-colors duration-300
                  hover:text-purple-300
                  active:text-purple-400
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  rounded-xl border border-white/30 p-3
                  transition-all duration-300
                  hover:scale-110 hover:bg-purple-600
                  active:scale-95
                "
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-purple-900 pt-6 text-center text-sm text-gray-300">
          © {currentYear} Lanna Maria
        </div>
      </div>
    </footer>
  );
}
