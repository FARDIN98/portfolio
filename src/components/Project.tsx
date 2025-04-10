'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data';
import { fadeInUp, staggerContainer } from '@/types';
import ProjectCard from './ui/ProjectCard';
import SectionHeading from './ui/SectionHeading';

/**
 * Projects section component displaying portfolio projects
 */
const Project = () => {
  return (
    <section id="project" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading 
            title="Projects" 
            description="Check out some of my work right here" 
          />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;