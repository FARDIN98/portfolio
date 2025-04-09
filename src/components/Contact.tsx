'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 shadow-md">
              <FaEnvelope size={24} className="text-cyan-500" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">fardinahmed66@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 shadow-md">
              <FaPhone size={24} className="text-cyan-500" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-300">+8801533989026</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 shadow-md">
              <FaMapMarkerAlt size={24} className="text-cyan-500" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
              />
              <textarea
                name="message"
                rows={10}
                placeholder="Your Message"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
              ></textarea>

              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
                Let&apos;s Talk
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;