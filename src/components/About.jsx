import React from 'react';
import { motion } from 'framer-motion';
import my_image from '/MyPic/image2.jpg';


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const download_CV = () => {
    const cv_path = '/CV.pdf';
    const link = document.createElement('a');
    link.href = cv_path;
    link.download = 'Abderrezzak_Maireche_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='about' className='bg-gradient-to-br from-gray-900 to-gray-800 pb-4'>
      <div className="min-h-screen flex items-center justify-center py-16 px-4 mt-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Left Section - Image */}
          <motion.div
            className="flex-1 flex flex-col items-center md:items-start space-y-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              About Me
            </h2>
          <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-full">
            <img 
              src={my_image} 
              alt="Coding illustration" 
              loading="lazy"
              className="relative z-10 w-full h-full object-cover rounded-full px-8 py-8"
            />
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-cyan-400 opacity-30"
                    style={{
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float-particle ${Math.random() * 10 + 10}s infinite ease-in-out`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Text */}
          <motion.div
            className="flex-1 space-y-6 text-gray-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Hi, I'm <span className="text-cyan-400">Abderrezzak</span>. A passionate Developer based in Algeria.
            </h2>
            <p className="text-lg leading-relaxed">
              I'm a web developer and AI enthusiast, currently pursuing my Master's degree in Artificial Intelligence at USTO-MB Oran. My journey in tech started with web development, where I've built full-stack applications using React, Node.js, and Express.
            </p>
            <p className="text-lg leading-relaxed">
              Along the way, I discovered my deep passion for AI, particularly in Natural Language Processing (NLP) and Speech Recognitionfields where I've worked on projects like Arabic NLP pipelines and voice analysis tools.
            </p>
            <p className="text-lg leading-relaxed">
              One of my proudest achievements is securing <span className="font-bold text-yellow-400">4th place in the National AI Olympiad</span>, which motivated me to dive deeper into AI research and applications. I'm a fast learner, always exploring new technologies, and I'm excited to expand my skills into mobile development next.
            </p>
            <p className="text-lg leading-relaxed">
              I love solving complex problems, creating innovative solutions, and contributing to the world of technology.
            </p>
            <p className="text-xl font-medium text-cyan-400 mt-6">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className='flex justify-center relative mt-5'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <button
          className='text-2xl absolute top-[-80px] border-2 border-amber-50 rounded-3xl px-10 py-3'
          onClick={download_CV}
        >
          Download CV
        </button>
      </motion.div>
    </section>
  );
};

export default About;
