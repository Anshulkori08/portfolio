import { Mail, Linkedin, Github } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import React from "react";
const ContactSection = () => {
  const { email, links } = portfolioData.personal;

  const contacts = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}`, color: "blue" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: links.linkedin, color: "blue" },
    { icon: Github, label: "GitHub", value: "Check my repos", href: links.github, color: "purple" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map(({ icon, label, href, value, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-12 h-12 bg-${color}-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${color}-600/30 transition-colors`}>
                {React.createElement(icon, { size: 24, className: `text-${color}-400` })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
              <p className="text-gray-400 group-hover:text-blue-400 transition-colors">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
