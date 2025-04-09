/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id="home" className="w-full h-[100dvh] bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row gap-12 md:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center md:items-start h-full w-full md:max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center md:text-left mb-4">
            A Front End Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-base sm:text-lg text-center md:text-left mb-6">
            I have experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind & Next.js.
          </p>

          <div className="flex gap-6 mb-8 justify-center md:justify-start w-full">
            <a 
              href="https://www.linkedin.com/in/fardin-ahmed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href="https://github.com/FARDIN98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub size={32} />
            </a>
          </div>

          <div className="flex justify-center md:justify-start w-full gap-4">
            <Link
              href="#project"
              className="group text-white w-fit px-8 py-4 text-lg flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Project
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={24} className="ml-2" />
              </span>
            </Link>
            <a
              href="/cv.pdf"
              download
              className="group text-white w-fit px-8 py-4 text-lg flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              My CV
              <FaDownload size={20} className="ml-2" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 pt-20 md:pt-0"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img src="/Fardin.jpg" alt="Fardin" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;