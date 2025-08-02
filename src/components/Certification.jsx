import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);
  const certifications = [
    { title: "Responsive Web Design", image: "/certs/Responsive_Web_Design.png" },
    { title: "Intro to Programming", image: "/certs/Intro to Programming.png" },
    { title: "Python", image: "/certs/Python.png" },
    { title: "4th place in the National AI Olympiad", image: "/certs/AI Olompyade.png" },
  ];

  return (
    <section id="certifications" className="py-20 bg-black text-white">
        {/* certification title */}
        <h2  className="text-4xl sm:text-5xl md:text-6xl pt-12 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-12">
        Certifications
        </h2>
        {/* show line certification */}
      <Marquee pauseOnHover gradient={false} speed={40}>
        {certifications.map((cert, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mx-6 cursor-pointer"
            key={index}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="h-60 w-auto rounded shadow-md"
            />
          </motion.div>
        ))}
      </Marquee>
        {/* pop up of certficatie whene click */}
      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg text-black max-w-[90%] max-h-[90%] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedCert.title}</h3>
              <button
                className="text-red-600 text-lg font-bold"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>
            </div>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[80vh] rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certification;
