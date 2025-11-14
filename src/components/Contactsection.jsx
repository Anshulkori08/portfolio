import { Mail, Linkedin, Github } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const ContactSection = () => {
  const { email, links } = portfolioData.personal;

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      bg: "from-cyan-600 to-violet-600",
      accent: "text-cyan-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: links.linkedin,
      bg: "from-blue-600 to-cyan-500",
      accent: "text-blue-300"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check my repos",
      href: links.github,
      bg: "from-violet-600 to-pink-500",
      accent: "text-violet-200"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#03030a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm open to collaborations and exciting AI/product engineering roles. Let's build something futuristic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map(({ icon: Icon, label, href, value, bg, accent }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`group rounded-2xl p-6 flex flex-col items-start gap-3 border border-transparent hover:border-cyan-700/20 transition-all bg-gradient-to-b ${bg} bg-opacity-10`}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center ring-1 ring-cyan-800/30 bg-black/30">
                <Icon size={20} className={accent} />
              </div>
              <h3 className="text-xl font-bold text-white">{label}</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
