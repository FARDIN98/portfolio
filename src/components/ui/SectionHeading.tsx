import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
}

/**
 * Reusable section heading component with consistent styling
 */
const SectionHeading = ({ title, description, className = '' }: SectionHeadingProps) => {
  return (
    <div className={`pb-8 ${className}`}>
      <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">{title}</h2>
      {description && <p className="py-6">{description}</p>}
    </div>
  );
};

export default SectionHeading;