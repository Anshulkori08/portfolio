import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-gradient-to-r from-black/60 via-blue-900/40 to-black/60 shadow-lg ring-1 ring-blue-800/40' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
          &lt;{personal.name.split(' ')[0]} /&gt;
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="relative text-gray-200 hover:text-white font-medium px-2 py-1 transition-colors"
            >
              <span className="inline-block transform transition-all group-hover:translate-y-0">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-200 hover:text-white p-2">
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-blue-900/30">
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-lg font-medium text-gray-200 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-2">
              <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">LinkedIn</a>
              <a href={personal.links.github} target="_blank" rel="noreferrer" className="text-violet-300 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
