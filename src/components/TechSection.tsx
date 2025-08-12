'use client';

import React, { useEffect, useState } from 'react';
import {
  useMotionValue,
  animate,
} from 'framer-motion';
import TechIcon from './common/TechIcon';

// Icon list
const techIcons = [
  { src: '/assets/images/tech/g11.svg', alt: 'Tech 1' },
  { src: '/assets/images/tech/g10.svg', alt: 'Tech 2' },
  { src: '/assets/images/tech/g13.svg', alt: 'Tech 3' },
  { src: '/assets/images/tech/g14.svg', alt: 'Tech 4' },
  { src: '/assets/images/tech/g15.svg', alt: 'Tech 5' },
];

export default function TechSection() {
  const [windowWidth, setWindowWidth] = useState(1000);
  const rotation = useMotionValue(0);
  const visibleCount = 5;

  // Animate rotation
  useEffect(() => {
    const controls = animate(rotation, 360, {
      duration: 30,
      repeat: Infinity,
      ease: 'linear',
    });
    return () => controls.stop();
  }, [rotation]);

  // Update window width on resize
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="w-full flex flex-col h-screen items-center justify-center pb-20 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Innovative Technologies Powering <br />
          <span className="text-primary">Our Solutions</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Using the latest technology to drive innovation and supply high-performance solutions aimed at meeting the unique needs of each project.
        </p>
      </div>

      {/* Curve and animated tech icons */}
      <div className="relative w-full h-[300px]">
        {/* Curve path SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox={`0 0 ${windowWidth} 300`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M 0 0 Q ${windowWidth / 2} 500, ${windowWidth} 0`}
            stroke="#d1d5db"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>

        {/* Floating icons */}
        {Array.from({ length: visibleCount }).map((_, index) => (
          <TechIcon
            key={index}
            index={index}
            rotation={rotation}
            visibleCount={visibleCount}
            windowWidth={windowWidth}
            icon={techIcons[index % techIcons.length]}
          />
        ))}
      </div>
    </div>
  );
}
