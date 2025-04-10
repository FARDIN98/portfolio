'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'skills' },
    { id: 3, link: 'project' },
    { id: 4, link: 'blog' },
    { id: 5, link: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleClick = () => setNav(!nav);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full h-16 sm:h-20 z-50 flex justify-between items-center px-3 sm:px-4 md:px-8 lg:px-16 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'} transition-all duration-300`}
    >
      <div>
        <Link href="#home">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-signature text-white ml-2">Fardin</h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:text-gray-300 hover:scale-105 duration-200"
          >
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={handleClick}
        className="cursor-pointer p-5 z-10 text-white md:hidden rounded-full hover:bg-gray-800/50 transition-colors active:bg-gray-700/70 flex items-center justify-center m-2"
        aria-label="Toggle menu"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-[100dvh] bg-black/80 backdrop-blur-md text-white"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 sm:py-6 text-2xl sm:text-3xl hover:text-cyan-400 hover:scale-105 duration-300 transform transition-all border-b-2 border-transparent hover:border-cyan-400"
            >
              <Link onClick={handleClick} href={`#${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Navbar;