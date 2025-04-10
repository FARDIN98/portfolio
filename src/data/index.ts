/**
 * Centralized data for the portfolio application
 */
import { NavLink, Project, Skill, SocialLink } from '@/types';
// Import icons separately to be used in components
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
// import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiFirebase, SiShadcnui } from 'react-icons/si';
// import { RiSupabaseFill } from "react-icons/ri";
// import { HiArrowNarrowRight } from 'react-icons/hi';

// Navigation links
export const navLinks: NavLink[] = [
  { id: 1, link: 'home' },
  { id: 2, link: 'skills' },
  { id: 3, link: 'project' },
  { id: 4, link: 'blog' },
  { id: 5, link: 'contact' },
];

// Social media links
export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/fardin-ahmed/",
    icon: "linkedin",
    label: "LinkedIn profile"
  },
  {
    href: "https://github.com/FARDIN98",
    icon: "github",
    label: "GitHub profile"
  }
];

// Projects data
export const projects: Project[] = [
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

// Skills data
export const skills: Skill[] = [
  { id: 1, name: 'HTML', icon: "html5" },
  { id: 2, name: 'CSS', icon: "css3" },
  { id: 3, name: 'JavaScript', icon: "javascript" },
  { id: 4, name: 'TypeScript', icon: "typescript" },
  { id: 5, name: 'React', icon: "react" },
  { id: 6, name: 'Next.js', icon: "nextjs" },
  { id: 7, name: 'Tailwind CSS', icon: "tailwind" },
  { id: 8, name: 'Shad Cn', icon: "shadcn" },
  { id: 9, name: 'MongoDB', icon: "mongodb" },
  { id: 10, name: 'Supabase', icon: "supabase" },
  { id: 11, name: 'Firebase', icon: "firebase" },
  { id: 12, name: 'Git', icon: "git" },
  { id: 13, name: 'SQL', icon: "database" },
];

// Hero section content
export const heroContent = {
  title: "A Front End Developer",
  description: "I have experience building and designing software. Currently, I love to work on web applications using technologies like React, Tailwind & Next.js.",
  ctaButtons: [
    {
      text: "Project",
      href: "#project",
      icon: "arrow-right",
      download: false
    },
    {
      text: "My CV",
      href: "/cv.pdf",
      icon: "download",
      download: true
    }
  ]
};