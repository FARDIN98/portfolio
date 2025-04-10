'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { navLinks } from '@/data';
import useScrollEffect from '@/hooks/useScrollEffect';

/**
 * Navigation component with responsive mobile menu
 */
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrolled = useScrollEffect(10);

  useEffect(() => {
    // Check if we're on mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full h-16 sm:h-20 z-50 flex justify-between items-center px-3 sm:px-4 md:px-8 lg:px-16 ${scrolled || isMobile ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'} transition-all duration-300`}
    >
      <div>
        <Link href="#home">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-signature text-white ml-2">Fardin</h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav aria-label="Desktop navigation">
        <ul className="hidden md:flex">
          {navLinks.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:text-gray-300 hover:scale-105 duration-200"
            >
              <Link href={`#${link}`}>{label || link}</Link>
            </li>
          ))}
      </ul>
      </nav>

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
        <nav aria-label="Mobile navigation">
          <motion.ul
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-[100dvh] bg-black/80 backdrop-blur-md text-white"
          >
            {navLinks.map(({ id, link, label }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 sm:py-6 text-2xl sm:text-3xl hover:text-cyan-400 hover:scale-105 duration-300 transform transition-all border-b-2 border-transparent hover:border-cyan-400"
              >
                <Link onClick={handleClick} href={`#${link}`}>
                  {label || link}
                </Link>
              </li>
            ))}
        </motion.ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;