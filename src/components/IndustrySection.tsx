'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const industries = [
  { title: "Health", image: "/assets/images/industries/health.png", link: "/industries/health", direction: 'left' },
  { title: "Finance & Banking", image: "/assets/images/industries/finance.png", link: "/industries/finance-banking", direction: 'right' },
  { title: "Retail & E-Commerce", image: "/assets/images/industries/retail.png", link: "/industries/retail-ecommerce", direction: 'bottom' },
  { title: "Government & Smart Cities", image: "/assets/images/industries/gov.png", link: "/industries/government-smart-cities", direction: 'left' },
  { title: "Logistics & Transportation", image: "/assets/images/industries/logisty.png", link: "/industries/logistics-transportation", direction: 'right' },
  { title: "Real Estate & Construction", image: "/assets/images/industries/realestate.png", link: "/industries/real-estate-construction", direction: 'bottom' },
  { title: "Education & E-learning", image: "/assets/images/industries/education.png", link: "/industries/education-elearning", direction: 'left' },
  { title: "Hospitality & Tourism", image: "/assets/images/industries/hospitality.png", link: "/industries/hospitality-tourism", direction: 'right' },
  { title: "Manufacturing & Industrial", image: "/assets/images/industries/hospitality.png", link: "/industries/manufacturing-industrial", direction: 'bottom' },
];

const getVariant = (direction: string) => {
  const offset = 100;
  switch (direction) {
    case 'left':
      return {
        hidden: { opacity: 0, x: -offset },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: offset },
        visible: { opacity: 1, x: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export default function IndustrySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div ref={sectionRef} className="min-h-screen m-auto py-20 p-4 lg:p-16 overflow-hidden">
      {/* Title */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
        }}
        className="text-left text-gray-800 mb-12"
      >
        <div className="flex items-center">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <Image
            src={'/assets/images/icons/cuate.png'}
            width={900}
            height={900}
            alt=""
            className="w-20 h-20 -mt-12 object-contain ml-4"
          />
        </div>
        <p className="text-lg text-gray-500 font-600">
          We specialize in varied industries such as healthcare, finance, retail, education, manufacturing, and logistics, offering innovative tech solutions that enable businesses to excel in their respective industries.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {industries.map((industry, i) => {
          const variant = getVariant(industry.direction);

          return (
            <Link key={i} href={industry.link} passHref>
              <motion.div
                variants={variant}
                initial="hidden"
                animate={controls}
                whileHover={{
                  scale: 1.06,
                  rotate: [-1, 1, -1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                }}
                transition={{
                  type: 'spring',
                  duration: 0.8,
                  bounce: 0.4,
                }}
                className="cursor-pointer bg-primary flex justify-center items-center rounded-lg relative shadow-md h-28 text-center"
              >
                <div className="w-32 h-32 mx-auto absolute right-0 bottom-0">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-md w-1/2 m-auto font-semibold text-gray-100 z-10">
                  {industry.title}
                </h3>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
