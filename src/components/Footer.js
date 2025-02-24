import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 mt-[40px] text-gray-800 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 Edibles. All rights reserved. | Built with ❤️ by Ujjwal Anand
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://github.com/Ujjwal-anand00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-green-600 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ujjwal-anand63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
