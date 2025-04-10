/**
 * Common type definitions for the portfolio application
 */

// Social media link type
export interface SocialLink {
  href: string;
  icon: string; // Icon identifier string
  label: string; // For accessibility
}

// Navigation link type
export interface NavLink {
  id: number;
  link: string;
  label?: string; // Optional display label if different from link
}

// Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  imageSrc: string;
  demoLink: string;
  codeLink: string;
}

// Skill type
export interface Skill {
  id: number;
  name: string;
  icon: string; // Icon identifier string
}

// Animation variants
export const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};