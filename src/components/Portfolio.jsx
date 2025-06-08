import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  const projects = [
    {
      title: "Parkinson's Disease Voice Detector 🧠",
      description: "A web application that detects Parkinson's Disease through voice analysis using machine learning. Built for International Olympiad in Artificial Intelligence. 🌟 Features : Voice Recording: Record your voice directly in the browser | File Upload: Upload existing voice recordings for analysis | ML Analysis: FastAPI backend with SVM model processes voice samples | Results Dashboard: Clear visualization of prediction results | Responsive Design: Works on desktop and mobile devices",
      image: "/Projects/projet1.png",
      languages: ["React + Vite","Tailwind CSS","Web Audio API (Voice Recording)","FastAPI","Scikit-learn (SVM Model)", " Pandas/Numpy (Data Processing)"],
      viewLink: "#",
      codeLink: "https://github.com/AbderrezzakMrch/Parkinson-s-Disease-Voice-Detector"
    },
    {
      title: "NextWordAI: Smart Arabic Text Prediction using NLP",
      description: "Developed an Arabic NLP model that predicts the next word in a sentence using a custom-trained dataset from Algerian history books. The pipeline included text extraction from PDFs (via PyPDF2/PdfReader), advanced tokenization with Stanza and NLTK, and preprocessing steps like stopword removal, lemmatization, and NER tagging. The model analyzes character/word matrices and contextual patterns to generate accurate predictions, with a user-friendly interface for phrase generation.",
      image: "/Projects/arabic_nlp.png",
      languages: ["Python","Stanza","NLTK","PyPDF2","PyQt5","json","matplotlib","seaborn","networkx","logging"],
      viewLink: "#",
      codeLink: "https://github.com/AbderrezzakMrch/Arabic-NLP"
    },
  ];

  return (
    <section id='portfolio' className="min-h-screen px-4 sm:px-4 md:px-12 lg:px-20 xl:px-52 py-12">
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl pt-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
        >
          <ProjectCard project={project} reverse={index % 2 === 1} />
        </motion.div>
      ))}
    </section>
  );
};

export default Portfolio;
