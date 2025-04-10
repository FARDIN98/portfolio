'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data';
import { fadeInUp, staggerContainer, itemFadeIn } from '@/types';
import SectionHeading from './ui/SectionHeading';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiFirebase, SiShadcnui } from 'react-icons/si';
import { RiSupabaseFill } from "react-icons/ri";

/**
 * Function to render the appropriate icon based on the icon identifier
 */
const renderSkillIcon = (iconName: string) => {
  const iconSize = 50;
  
  switch (iconName) {
    case 'html5':
      return <FaHtml5 size={iconSize} className="text-orange-500" />;
    case 'css3':
      return <FaCss3Alt size={iconSize} className="text-blue-500" />;
    case 'javascript':
      return <FaJs size={iconSize} className="text-yellow-500" />;
    case 'typescript':
      return <SiTypescript size={iconSize} className="text-blue-600" />;
    case 'react':
      return <FaReact size={iconSize} className="text-cyan-400" />;
    case 'nextjs':
      return <SiNextdotjs size={iconSize} className="text-white" />;
    case 'tailwind':
      return <SiTailwindcss size={iconSize} className="text-cyan-300" />;
    case 'shadcn':
      return <SiShadcnui size={iconSize} className="text-green-500" />;
    case 'mongodb':
      return <SiMongodb size={iconSize} className="text-green-400" />;
    case 'supabase':
      return <RiSupabaseFill size={iconSize} className="text-pink-500" />;
    case 'firebase':
      return <SiFirebase size={iconSize} className="text-yellow-400" />;
    case 'git':
      return <FaGitAlt size={iconSize} className="text-orange-600" />;
    case 'database':
      return <FaDatabase size={iconSize} className="text-blue-400" />;
    default:
      return null;
  }
};

/**
 * Skills section component displaying technical skills
 */
const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading 
            title="Skills" 
            description="These are the technologies I&apos;ve worked with" 
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center"
          >
            {skills.map(({ id, name, icon }) => (
              <motion.div
                key={id}
                variants={itemFadeIn}
                custom={id}
                className="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-gray-600"
              >
                <div className="flex justify-center mb-2" aria-hidden="true">
                  {renderSkillIcon(icon)}
                </div>
                <p className="mt-4">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;