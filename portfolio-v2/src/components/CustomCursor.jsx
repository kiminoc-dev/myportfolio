import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-accent-blue rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 2, y: mousePosition.y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      />
      {/* Outer Ring */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border border-accent-blue/50 rounded-full pointer-events-none z-[9998] ${
          isHovering ? 'bg-accent-blue/10' : ''
        }`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(59, 130, 246, 1)' : 'rgba(59, 130, 246, 0.5)'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />
    </>
  );
};

export default CustomCursor;
