/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import {  FaExternalLinkAlt } from 'react-icons/fa';

const Blog = () => {
  const Blogs = [
    {
      id: 1,
      title: 'Difference between Website & Webapp',
      description: 'A detailed explanation of website, webapp and their differences written on medium.',
      imageSrc: '/website-webapp.jpg',
      demoLink: 'https://shorturl.at/NvN8n',
    },
    {
      id: 2,
      title: 'ReactJS fundamental concepts',
      description: 'An article about ReactJS fundamentals and its key concepts.',
      imageSrc: '/react-fundamentals.webp',
      demoLink: 'https://shorturl.at/hvE3W',
    },
    {
      id: 3,
      title: 'Javascript interview question & answer',
      description: 'An article about popular Javascript interview questions and easy answers',
      imageSrc: '/js.webp',
      demoLink: 'https://example.com',
    },   
  ];

  return (
    <div id="blog" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-40">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Blogs</p>
          <p className="py-6">Read some of my blogs right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {Blogs.map(({ id, title, description, imageSrc, demoLink }) => (
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
                <div className="flex items-center justify-between h-12">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 text-sm w-20 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors duration-200"
                  >
                    Read <FaExternalLinkAlt size={12} />
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

export default Blog;