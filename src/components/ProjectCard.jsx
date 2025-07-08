import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 mb-20`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl shadow-lg w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">{project.title}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>

        {/* Language Badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {project.languages?.map((lang, idx) => (
            <span
              key={idx}
              className="px-4 py-1 border border-cyan-400/30 bg-cyan-700 font-bold rounded-full text-sm"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-evenly">
          <a
            href={project.viewLink}
            className="border border-white px-10 py-2 rounded-full hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
          <a
            href={project.codeLink}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={40} />
            Git code
          </a>
        </div>
      </div>
    </div>
  );
}
