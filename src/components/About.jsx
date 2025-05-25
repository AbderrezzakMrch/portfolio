import React from 'react';
import codingImg from './assets/coding_img.png';




const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
            <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-12">
                {/* Left Section - Image */}
                <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
                    <h2 id='about' className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                        About Me
                    </h2>
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <img 
                            src={codingImg} 
                            alt="Coding illustration" 
                            className="w-full h-full object-contain animate-float"
                        />
                        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 blur-xl animate-pulse"></div>
                    </div>
                </div>

                {/* Right Section - Text */}
                <div className="flex-1 space-y-6 text-gray-300">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Hi, I'm <span className="text-cyan-400">Abderrezzak</span>. A passionate Developer based in Algeria.
                    </h2>
                    <p className="text-lg leading-relaxed">
                        I'm a web developer and AI enthusiast, currently pursuing my Master's degree in Artificial Intelligence at USTO-MB Oran. My journey in tech started with web development, where I've built full-stack applications using React, Node.js, and Express.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Along the way, I discovered my deep passion for AI, particularly in Natural Language Processing (NLP) and Speech Recognition fields where I've worked on projects like Arabic NLP pipelines and voice analysis tools.
                    </p>
                    <p className="text-lg leading-relaxed">
                        One of my proudest achievements is securing <span className="font-bold text-yellow-400">4th place in the National AI Olympiad</span> (regional level), which motivated me to dive deeper into AI research and applications. I'm a fast learner, always exploring new technologies, and I'm excited to expand my skills into mobile development next.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I love solving complex problems, creating innovative solutions, and contributing to the world of technology.
                    </p>
                    <p className="text-xl font-medium text-cyan-400 mt-6">
                        Let's build something amazing together!
                    </p>
                </div>
            </div>


            {/* Add this to your global CSS or Tailwind config */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

export default About;