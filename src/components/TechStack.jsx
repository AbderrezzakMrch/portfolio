import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


import react from './assets/tech stack/react-2.svg';
import reactNative from './assets/tech stack/react-native-1.svg';
import tailwind from './assets/tech stack/tailwind-css-2.svg';
import mongodb from './assets/tech stack/mongodb.svg';
import mysql from './assets/tech stack/mysql.svg';
import npm from './assets/tech stack/npm.svg';
import python from './assets/tech stack/python.svg';
import pytorch from './assets/tech stack/pytorch-icon.svg';
import tensorflow from './assets/tech stack/tensorflow-icon.svg';



const icons = [react, reactNative,tailwind, mongodb, mysql, npm, python,pytorch,tensorflow];

const TechStocks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.1,
                ease: 'easeOut'
            }
        }),
    };

    return (
        <section
            id="tech-stack"
            ref={ref}
            className='text-center'
        >
            <motion.h3
                className='text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Tech Stack
            </motion.h3>

            <div className='max-w-6xl mx-auto flex justify-center items-center flex-wrap gap-8 mb-16'>
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className="group relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        custom={index}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={itemVariants}
                    >
                        <img
                            src={icon}
                            alt="tech icon"
                            className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500'
                        />
                        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </motion.div>
                ))}
            </div>

            {/* Animated scroll indicator */}
            <motion.div
                className='flex justify-center mt-8'
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <a href='#about' className='block animate-bounce'>
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
            </motion.div>
        </section>
    );
};

export default TechStocks;
