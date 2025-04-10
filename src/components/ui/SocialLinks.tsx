import { SocialLink } from '@/types';
import IconRenderer from './IconRenderer';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

/**
 * Reusable component for displaying social media links
 */
const SocialLinks = ({ links, className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex gap-6 justify-center md:justify-start w-full ${className}`}>
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label={link.label}
        >
          <IconRenderer iconName={link.icon} size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;