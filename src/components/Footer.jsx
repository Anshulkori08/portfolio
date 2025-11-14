import { Linkedin, Github, Code } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { links, name } = portfolioData.personal;

  return (
    <footer className="bg-[#03030a] border-t border-cyan-900/20 py-12 relative overflow-hidden">
      {/* Neon glowing background rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-r from-cyan-700/20 to-violet-700/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-8">

          {/* Social Icons */}
          <div className="flex gap-6">
            {[
              { icon: Linkedin, href: links.linkedin },
              { icon: Github, href: links.github },
              { icon: Code, href: links.codeforces ?? "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/40 border border-cyan-900/20 rounded-full 
                           hover:scale-110 transition-transform hover:shadow-[0_0_18px_rgba(0,255,255,0.3)]"
              >
                <Icon size={20} className="text-cyan-300" />
              </a>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-gray-300 font-medium">
              &copy; {new Date().getFullYear()}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400">
                {name}
              </span>
              . All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with <span className="text-cyan-300">React</span> & <span className="text-violet-300">Tailwind CSS</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

