import { Code, Database, Cpu, Book } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const iconMap = {
  Languages: Code,
  Frameworks: Cpu,
  Tools: Book,
  Libraries: Code,
  Databases: Database,
  SoftSkills: Book,
};

const SkillsSection = () => {
  const skills = portfolioData.skills;

  return (
    <section id="skills" className="py-24 bg-[#04050a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items }], idx) => {
            const Icon = iconMap[category] || Code;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-b from-black/60 to-[#07101a]/40 border border-cyan-900/10 backdrop-blur-sm hover:shadow-neon transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-black/30">
                    <Icon size={22} className="text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-full bg-black/30 border border-cyan-900/10 text-cyan-100 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
