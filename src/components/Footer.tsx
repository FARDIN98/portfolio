import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Fardin. All Rights Reserved.</p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com/FARDIN98" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/fardin-ahmed/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://www.facebook.com/fardin.ahmed.54943/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;