import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 sm:px-10 md:px-20 lg:px-36 xl:px-52 py-20 text-white"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl pt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-12"
      >
        Contact
      </motion.h2>

      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12"
      >
        Let’s Connect
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-300 text-center mb-44"
      >
        Don't be a stranger! Say hello and let's collaborate
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[ // Add animation to each contact card
          {
            icon: <MdEmail className="text-8xl text-orange-500 hover:text-orange-400 transition" />,
            label: "212138070119@etu.univ-usto.dz",
            href: "mailto:212138070119@etu.univ-usto.dz",
          },
          {
            icon: <FaMapMarkerAlt className="text-8xl text-red-500 hover:text-red-400 transition" />,
            label: "Algeria, Oran",
            href: null,
          },
          {
            icon: <FaLinkedin className="text-8xl text-blue-500 hover:text-blue-400 transition" />,
            label: "Abderrezzak Maireche",
            href: "https://www.linkedin.com/in/abderrezzak-maireche/",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center space-y-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
          >
            {item.icon}
            {item.href ? (
              <a href={item.href} className="text-lg hover:underline" target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <p className="text-lg">{item.label}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
