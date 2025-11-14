import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="transform transition-all hover:scale-[1.02] hover:shadow-neon rounded-2xl overflow-hidden border border-transparent hover:border-cyan-700/30"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="p-6 bg-gradient-to-b from-[#07101a]/60 to-black/40 backdrop-blur-sm border border-cyan-900/10 rounded-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-cyan-300 text-sm">{project.subtitle}</p>
          </div>

          <div className="flex gap-2">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-black/30 hover:bg-black/20 transition">
                <Github size={18} className="text-cyan-300" />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-semibold">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-black/30 border border-cyan-900/20 text-cyan-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-[#03030a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">A selection of recent work — AI, RAG, and deep learning systems.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
