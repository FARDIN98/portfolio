'use client';

import { motion } from 'framer-motion';
import { RiSupabaseFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiFirebase, SiShadcnui } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { id: 2, name: 'CSS', icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { id: 3, name: 'JavaScript', icon: <FaJs size={50} className="text-yellow-500" /> },
    { id: 4, name: 'TypeScript', icon: <SiTypescript size={50} className="text-blue-600" /> },
    { id: 5, name: 'React', icon: <FaReact size={50} className="text-cyan-400" /> },
    { id: 6, name: 'Next.js', icon: <SiNextdotjs size={50} className="text-white" /> },
    { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-cyan-300" /> },
    { id: 8, name: 'Shad Cn', icon: <SiShadcnui size={50} className="text-green-500" /> },
    { id: 9, name: 'MongoDB', icon: <SiMongodb size={50} className="text-green-400" /> },
    { id: 10, name: 'Supabase', icon: <RiSupabaseFill size={50} className="text-pink-500" /> },
    { id: 11, name: 'Firebase', icon: <SiFirebase size={50} className="text-yellow-400" /> },
    { id: 12, name: 'Git', icon: <FaGitAlt size={50} className="text-orange-600" /> },
    { id: 13, name: 'SQL', icon: <FaDatabase size={50} className="text-blue-400" /> },
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Skills</p>
            <p className="py-6">These are the technologies I&apos;ve worked with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {skills.map(({ id, name, icon }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: id * 0.05 }}
                viewport={{ once: true }}
                className="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-gray-600"
              >
                <div className="flex justify-center mb-2">
                  {icon}
                </div>
                <p className="mt-4">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;