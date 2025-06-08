import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-8 px-6 sm:px-10 md:px-20 lg:px-36 xl:px-52 text-center border-t border-gray-700">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">© {new Date().getFullYear()} Abderrezzak Maireche</h3>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <p className="text-xs text-gray-500 mt-6">
        Designed & built with ❤️ by Abderrezzak
      </p>
    </footer>
  );
};

export default Footer;
