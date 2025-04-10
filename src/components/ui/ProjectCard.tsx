import { Project } from '@/types';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { itemFadeIn } from '@/types';

interface ProjectCardProps {
  project: Project;
}

/**
 * Reusable project card component for displaying portfolio projects
 */
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, title, description, tech, imageSrc, demoLink, codeLink } = project;
  
  return (
    <motion.article
      variants={itemFadeIn}
      custom={id}
      className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
    >
      <div className="relative h-48 bg-gray-700 flex items-center justify-center">
        <div className="text-3xl font-bold text-gray-500">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        <p className="text-xs text-cyan-400 mb-4">{tech}</p>
        <div className="flex items-center justify-between h-12">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-sm w-20 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors duration-200"
            aria-label={`View live demo of ${title}`}
          >
            Demo <FaExternalLinkAlt size={12} />
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-sm w-20 py-2 rounded-md border border-gray-500 hover:bg-gray-700 transition-colors duration-200"
            aria-label={`View source code of ${title} on GitHub`}
          >
            Code <FaGithub size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;