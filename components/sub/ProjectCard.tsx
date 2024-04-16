
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Import next/image component

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  // Set card visibility when it enters the viewport
  useEffect(() => {
    if (inView) {
      setIsCardVisible(true);
    }
  }, [inView]);

  // Define custom motion variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isCardVisible ? "visible" : "hidden"}
      variants={cardVariants}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      {/* Use next/image component */}
      <div className="w-full h-96 relative">
        {isCardVisible && (
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>

      <motion.div
        className="relative p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isCardVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
