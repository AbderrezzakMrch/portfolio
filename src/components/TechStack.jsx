import React from 'react';
import bash from './assets/tech stack/bash.svg';
import git from './assets/tech stack/git.svg';
import json from './assets/tech stack/json.svg';
import mongodb from './assets/tech stack/mongodb.svg';
import mysql from './assets/tech stack/mysql.svg';
import nodejs from './assets/tech stack/nodejs.svg';
import npm from './assets/tech stack/npm.svg';
import python from './assets/tech stack/python.svg';
import react from './assets/tech stack/react.svg';

const TechStocks = () => {
    return (
        <section id="tech-stack" className='py-10 px-4 text-center bg-gradient-to-b mt-0 pt-0'>
            <h3 className='text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600'>
                Tech Stack
            </h3>
            
            <div className='max-w-6xl mx-auto flex justify-center items-center flex-wrap gap-8 mb-16'>
                {[bash, git, json, mongodb, mysql, nodejs, npm, python, react].map((icon, index) => (
                    <div 
                        key={index}
                        className="group relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                        <img 
                            src={icon} 
                            alt="tech icon" 
                            className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500'
                        />
                        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
            
            {/* Animated scroll indicator */}
            <div className='flex justify-center mt-8 animate-bounce'>
                <a href='#about' className='block'>
                    <svg 
                        className="w-12 h-12 text-cyan-400"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default TechStocks;