'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const portfolios = [
    {
      id: 1,
      title: 'AI Mock Interview',
      description: 'Ai-powered mock interview platorm to practice interview using Gemini AI.',
      tech: 'Next.js, Tailwind, Shad CN, Firebase, Gemini, Vapi',
      imageSrc: '/mock-interview.png',
      demoLink: 'https://ai-mock-interview-pied-five.vercel.app/',
      codeLink: 'https://github.com/FARDIN98/ai-mock-interview',
    },
    {
      id: 2,
      title: 'Gsports',
      description: 'Sports center booking platform from anywhere & anytime.',
      tech: 'Next.js, Tailwind CSS, Shad CN, Supabase, Sqaure',
      imageSrc: '/gsports.png',
      demoLink: 'https://gsports1.netlify.app/',
      codeLink: 'https://github.com/FARDIN98/gsports',
    },
    {
      id: 3,
      title: 'Movix',
      description: 'A dynamic web app provided detailed information about movie & tv series.',
      tech: 'React, Redux, React Router, TMDb API',
      imageSrc: '/Movix.png',
      demoLink: 'https://movix-sites.vercel.app/',
      codeLink: 'https://github.com/FARDIN98/movix',
    },
  ];

  return (
    <div id="project" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Project</p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, title, description, tech, imageSrc, demoLink, codeLink }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 bg-gray-700 flex items-center justify-center">
                <div className="text-3xl font-bold text-gray-500">
                  <img src={imageSrc} alt="" />
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
                  >
                    Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 text-sm w-20 py-2 rounded-md border border-gray-500 hover:bg-gray-700 transition-colors duration-200"
                  >
                    Code <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;