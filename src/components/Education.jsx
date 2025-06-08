import React from "react";
import { FaGraduationCap, FaUniversity, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Education = () => {
    const items = [
        {
            icon: <FaGraduationCap className="text-xl" />,
            title: "Baccalaureate (2020-2021)",
            desc: "Technical Mathematics - Electrical Engineering",
            sub: "Grade: 14.95/20"
        },
        {
            icon: <FaUniversity className="text-xl" />,
            title: "Licence Degree (2023-2024)",
            desc: "Mathematics & Computer Science",
            sub: "University of Ibn Khaldoun, Tiaret"
        },
        {
            icon: <FaLaptopCode className="text-xl" />,
            title: "Master 1 (Current 2024-2025)",
            desc: "Artificial Intelligence & Applications (IAA)",
            sub: "USTO University, Oran"
        },
        {
            icon: <FaUserTie className="text-xl" />,
            title: "Activities & Experience",
            list: [
                "Member of Google Developer Student Club (GDSC) - Oran & Tiaret",
                "Freelance Developer (Current)",
                "Academic projects in AI/ML fields"
            ]
        }
    ];

    return (
        <section id="education" className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 py-12 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={fadeUp}
                    className="text-4xl pt-20 sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-12"
                >
                    Education & Experience
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-3 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

                    <div className="space-y-8 ml-12">
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                variants={fadeUp}
                            >
                                <div className="absolute -left-14 top- w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                                    {item.desc && <p className="text-gray-300">{item.desc}</p>}
                                    {item.sub && <p className="text-gray-400 mt-2">{item.sub}</p>}
                                    {item.list && (
                                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                                            {item.list.map((entry, j) => <li key={j}>{entry}</li>)}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Preview */}
                <motion.div
                    className="mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    variants={fadeUp}
                >
                    <h3 className="text-2xl font-bold mb-6">Developing Skills In:</h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            'AI/ML', 'Python', 'TensorFlow', 'Data Science', 'Web Development',
                            'Mobile Development', 'NLP', 'Speech Processing', 'Image Processing',
                            'React', 'Algorithms'
                        ].map((skill, i) => (
                            <motion.span
                                key={skill}
                                className="px-4 py-2 bg-gray-800 rounded-full text-cyan-400 border border-cyan-400/30"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
