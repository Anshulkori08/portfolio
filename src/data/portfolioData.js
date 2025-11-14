import { Terminal, Code, Cpu, Database, Cloud } from "lucide-react";
const portfolioData = {
  personal: {
    name: "Anshul Kori",
    title: "Software Developer",
    titles: [
      "Full Stack Developer",
      "AI & ML Enthusiast",
      "Problem Solver"
    ],
    email: "anshulkori500@gmail.com",
    phone: "+91-8878653232",
    location: "Prayagraj, India",
    links: {
      linkedin: "https://www.linkedin.com/in/anshulkori08",
      github: "https://github.com/Anshulkori08",
      
      resume: "https://drive.google.com/uc?export=download&id=1CK0SIlsxX-bK8_jMLaXtAW2NYXXzAapv"
    }
  },
  education: [
    {
      degree: "Bachelor of Technology, Chemical Engineering",
      institution: "Motilal Nehru National Institute of Technology Allahabad",
      location: "Prayagraj",
      years: "2022-2026",
      detail: "CPI 7.33 (till 6th Semester)"
    },
    
  ],
  projects: [
    {
      title: "Food Delivery Chatbot",
      subtitle: "NLP, Dialogflow, FastAPI, MySQL",
      description:
        "AI-powered food delivery chatbot with order processing, recommendations, user intent detection, real-time updates, and automated backend workflows.",
      tech: ["NLP", "Dialogflow", "FastAPI", "MySQL", "Python"],
      links: {
        github: "https://github.com/Anshulkori08/FOODChatbot"
        
      }
    },
    {
      title: "Pneumonia Detection System",
      subtitle: "Deep Learning · CNN · TensorFlow",
      description:
        "Developed a CNN model on Kaggle chest X-ray dataset (5,800+ images) with augmentation, preprocessing, and hyperparameter tuning achieving 92% validation accuracy.",
      tech: ["TensorFlow", "Keras", "CNN", "Python"],
      links: {
        github: "https://github.com/Anshulkori08/Pneumonia-Detection"
      }
    },
    {
      title: "Document-Centric RAG Chatbot",
      subtitle: "Local RAG · FAISS · LangChain · Ollama",
      description:
        "Built an offline Mistral-7B RAG chatbot with document pipeline, embeddings, dual chat modes, audit logs, compliance mode, and multi-language support.",
      tech: ["LangChain", "FAISS", "Ollama", "Python", "RAG"],
      links: {
        github: "https://github.com/Anshulkori08/Document-Centric-Chatbot-"
      }
    }
  ],

  skills: {
    "Languages": {
      items: ["Python", "C++", "SQL"],
      icon: Terminal
    },
    "AI & ML": {
      items: ["Machine Learning", "Deep Learning", "NLP", "RAG", "LLM"],
      icon: Cpu
    },
    "Developer Tools": {
      items: ["VS Code", "PyCharm", "Jupyter", "Dialogflow", "HuggingFace"],
      icon: Code
    },
    "Libraries": {
      items: ["NumPy", "Pandas", "Computer Vision", "TensorFlow", "LangChain"],
      icon: Code
    },
    "Databases & Cloud": {
      items: ["MySQL", "Google Cloud", "FAISS"],
      icon: Database
    },
    "Soft Skills": {
      items: ["Teamwork", "Learning Ability", "Problem-Solving", "Time Management"],
      icon: Cloud
    }
  },

  experience: [
    {
      role: "PR Marketing Coordinator",
      organization: "Culrav-Avishkar (MNNIT Cultural Fest)",
      date: "2023 – Present",
      description:
        "Handled publicity, event coordination, outreach strategies, and communication for college-wide cultural fest."
    },
    {
      role: "Member",
      organization: "MNNIT Green Club",
      date: "2022 – Present",
      description:
        "Contributed to environmental campus initiatives and awareness activities."
    }
  ],




};
export default portfolioData;