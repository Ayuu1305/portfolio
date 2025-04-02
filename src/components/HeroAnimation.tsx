import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Animated circles */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            filter: 'blur(50px)',
          }}
        />
      ))}
      
      {/* Main animated shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-30"
        initial={{ scale: 0.8, x: '-50%', y: '-50%' }}
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ filter: 'blur(30px)' }}
      />
    </div>
  );
};

export default HeroAnimation;
