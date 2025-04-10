import Link from 'next/link';
import { ReactNode } from 'react';
// import IconRenderer from './IconRenderer';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
  external?: boolean;
  icon?: string;
}

/**
 * Reusable button component that can be either a Link or anchor tag
 * depending on the provided props
 */
const Button = ({ href, children, className = '', download = false, external = false }: ButtonProps) => {
  const baseClasses = "group text-white w-fit px-8 py-4 text-lg flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300";
  const combinedClasses = `${baseClasses} ${className}`;
  
  // External link or download link
  if (external || download) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }
  
  // Internal navigation link
  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
};

export default Button;