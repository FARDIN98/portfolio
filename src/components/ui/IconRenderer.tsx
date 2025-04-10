import { ReactNode } from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

interface IconRendererProps {
  iconName: string;
  className?: string;
  size?: number;
}

/**
 * Component that renders the appropriate icon based on the icon name
 */
const IconRenderer = ({ iconName, className = '', size = 20 }: IconRendererProps): ReactNode => {
  switch (iconName) {
    case 'arrow-right':
      return <HiArrowNarrowRight size={size} className={className} />;
    case 'download':
      return <FaDownload size={size} className={className} />;
    case 'github':
      return <FaGithub size={size} className={className} />;
    case 'linkedin':
      return <FaLinkedin size={size} className={className} />;
    default:
      return null;
  }
};

export default IconRenderer;