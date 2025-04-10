import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Reusable profile image component with gradient border
 */
const ProfileImage = ({ src, alt, className = '' }: ProfileImageProps) => {
  return (
    <div className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ${className}`}>
      <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          width={300} 
          height={300} 
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ProfileImage;