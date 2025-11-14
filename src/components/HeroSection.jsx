import { FileText, ExternalLink, Mail, Linkedin, Github, Code } from 'lucide-react';
import useTypingEffect from '../hooks/useTypingEffect';
import portfolioData from '../data/portfolioData';
import { FaBeer as Icon } from 'react-icons/fa'
const HeroSection = () => {
  const { name, titles, links } = portfolioData.personal;
  const typedText = useTypingEffect(titles, 80, 40, 1600);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#050308] via-[#050014] to-[#050308]">
      {/* neon background lines */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr from-cyan-600/20 to-violet-600/20 animate-blob"></div>
        <div className="absolute -right-48 -bottom-44 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 animate-blob animation-delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0b1220]/40 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-24">
        <div className="mb-4">
          <span className="text-cyan-300 text-lg font-mono tracking-wide">Hi, I'm</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-300">
            {name}
          </span>
        </h1>

        <div className="h-20 flex items-center justify-center mb-6">
          <div className="text-2xl md:text-4xl text-gray-200 font-semibold flex items-center gap-3">
            <span className="text-cyan-300">{typedText}</span>
            <span className="inline-block w-1 h-8 bg-gradient-to-b from-cyan-400 to-violet-400 rounded animate-pulse" />
          </div>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Building futuristic web & AI systems — RAG chatbots, deep-learning pipelines, and full-stack solutions. I blend clean engineering with creative neon aesthetics.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href={links.resume}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-black px-6 py-3 rounded-full font-semibold shadow-neon hover:scale-[1.03] transition-transform"
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={18} />
            View Resume
            <ExternalLink size={14} className="opacity-80" />
          </a>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-violet-700 text-gray-100 hover:bg-violet-800/30 transition-colors"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Linkedin, href: links.linkedin, label: "LinkedIn" },
            { icon: Github, href: links.github, label: "GitHub" },
            { icon: Code, href: links.codeforces ?? '#', label: "Code" }
          ].map(({  href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/50 border border-blue-900/30 hover:scale-110 transition-transform shadow-[0_0_20px_rgba(100,200,255,0.04)]"
              aria-label={label}
            >
              <Icon size={20} className="text-cyan-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
