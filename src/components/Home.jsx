import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Profile_img from './assets/MyPic/image1.jpg';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      ref={ref}
      className='flex flex-col lg:flex-row justify-evenly items-center px-4 md:px-8 lg:px-16 py-12 md:py-1.5 gap-8 md:gap-16'
    >
      <motion.div
        className='order-2 lg:order-1 text-center lg:text-left max-w-2xl'
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={textVariants}
      >
        <motion.h2
          className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight mb-4'
          custom={0}
          variants={textVariants}
        >
          Software & AI Enthusiast
        </motion.h2>

        <motion.p
          className='text-lg sm:text-xl md:text-xl lg:text-2xl mb-8'
          custom={0.3}
          variants={textVariants}
        >
          Hi, I'm Abderrezzak. A passionate Developer based in Algeria 📍
        </motion.p>

        <motion.div
          className='flex gap-5 justify-center lg:justify-start'
          custom={0.6}
          variants={textVariants}
        >
        </motion.div>
      </motion.div>

      <motion.div
        className='order-1 lg:order-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-96 h-1/2 '
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src={Profile_img}
          alt="Portfolio Picture"
          loading="lazy"
          className='rounded-full border-8 border-amber-50 object-cover w-full h-auto shadow-xl hover:border-blue-700 duration-100'
        />
      </motion.div>
    </section>
  );
};

export default Home;
