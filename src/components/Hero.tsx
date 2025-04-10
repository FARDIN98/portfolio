'use client';
 
import { motion } from 'framer-motion';
import { socialLinks, heroContent } from '@/data';
import { fadeInLeft, fadeInRight } from '@/types';
import SocialLinks from './ui/SocialLinks';
import ProfileImage from './ui/ProfileImage';
import Button from './ui/Button';
import IconRenderer from './ui/IconRenderer';
 
/**
 * Hero section component for the portfolio
 */
const Hero = () => {
  return (
    <section id="home" className="w-full h-[100dvh] bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row md:gap-8">
        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center md:items-start flex-1 md:max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center md:text-left mb-4">
            {heroContent.title}
          </h1>
          <p className="text-gray-400 py-4 max-w-md text-base sm:text-lg text-center md:text-left mb-6">
            {heroContent.description}
          </p>
 
          <SocialLinks links={socialLinks} className="mb-8" />
 
          <div className="flex justify-center md:justify-start w-full gap-4">
            {heroContent.ctaButtons.map((button, index) => (
              <Button 
                key={index}
                href={button.href}
                download={button.download}
                external={false}
                icon={button.icon}
              >
                {button.text}
                {button.icon && (
                  <span className={`ml-2 ${button.download ? '' : 'group-hover:rotate-90 duration-300'}`}>
                    <IconRenderer iconName={button.icon} />
                  </span>
                )}
              </Button>
            ))}
          </div>
        </motion.div>
 
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex justify-center items-center mb-0 md:mb-0 pt-20 md:pt-0 flex-1"
        >
          <ProfileImage src="/Fardin.jpg" alt="Fardin Ahmed - Front End Developer" />
        </motion.div>
      </div>
    </section>
  );
};
 
export default Hero;