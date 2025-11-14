import { GraduationCap, MapPin, Award } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#04050a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-900/30 to-violet-900/20 ring-1 ring-cyan-400/10">
                <GraduationCap size={28} className="text-cyan-300" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100">Education</h3>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-gradient-to-b from-black/60 to-[#07101a]/40 border border-cyan-900/20 backdrop-blur-sm hover:shadow-neon transition-all">
                <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-400 blur-md opacity-30"></div>
                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-cyan-300 font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-gray-400 text-sm mb-3">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-cyan-300" />
                    {edu.location}
                  </span>
                  <span className="text-xs">{edu.years}</span>
                </div>
                <p className="text-gray-300">{edu.detail}</p>
              </div>
            ))}
          </div>

          {/* Achievements / Other */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-violet-900/20 to-pink-900/10 ring-1 ring-violet-400/10">
                <Award size={28} className="text-violet-300" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100">Highlights</h3>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-black/60 to-[#07101a]/40 border border-violet-900/20 backdrop-blur-sm hover:shadow-neon transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Technical & Leadership</h4>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Built offline RAG chatbots (Mistral-7B via Ollama) with FAISS embeddings and LangChain.</li>
                <li>Developed a CNN-based Pneumonia Detection System — 92% validation accuracy.</li>
                <li>Designed a production-ready Food Delivery Chatbot with Dialogflow, FastAPI & MySQL.</li>
                <li>PR Marketing Coordinator — Culrav-Avishkar (MNNIT).</li>
                <li>Top placements in CodeStart and Mathrush; solved 400+ problems on coding platforms.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-black/60 to-[#07101a]/40 border border-cyan-900/10 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-2">Certifications</h4>
              <p className="text-gray-300">Databases and SQL for Data Science with Python - IBM (Coursera). NCC A-grade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
