import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting scroll position and applying effects
 * @param threshold - The scroll position threshold to trigger the effect
 * @returns Whether the page has been scrolled past the threshold
 */
const useScrollEffect = (threshold: number = 10): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, threshold]);

  return scrolled;
};

export default useScrollEffect;