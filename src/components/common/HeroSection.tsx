"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Custom easing function
const liquidEase: any = [0.6, 0.05, 0.3, 0.95];

// Animation variants for cards (could be reused elsewhere)
const cardVariants: any = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: "easeInOut",
    },
  }),
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// Animation variants for content (right to left)
const contentVariant: any = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: liquidEase,
      staggerChildren: 0.2,
    },
  },
};

// Image entrance animation
const imageVariant: any = {
  hidden: { opacity: 0, scale: 0.8, rotate: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring" as const,
      damping: 12,
      stiffness: 80,
    },
  },
};

// Button animation
const buttonVariant: any = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const HeroSection = ({
  client = false,
  title1 = "Advanced Web & App Development",
  title2 = "Solutions for Your Business",
  description = "We provide innovative and scalable web and mobile application solutions...",
  awardShow = true,
  primaryLink = "/contact",
  secondaryLink = "/services",
  primaryLinkTitle = "Contact Us",
  secondaryLinkTitle = "View More",
}: {
  client?: boolean;
  title1?: string;
  title2?: string;
  description?: string;
  awardShow?: boolean;
  primaryLink?: string;
  secondaryLink?: string;
  primaryLinkTitle?: string;
  secondaryLinkTitle?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0, buttonIndex: -1 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>, buttonIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y, buttonIndex });
  };

  const handleMouseLeave = () => {
    setHoverPosition({ x: 0, y: 0, buttonIndex: -1 });
  };

  return (
    <section id="home" className="relative overflow-hidden flex justify-start items-start min-h-screen">
      {/* Background image */}
      <Image
        src="/assets/images/bghero1.svg"
        width={1650}
        height={900}
        className="p-4 py-2.5 h-auto w-full object-contain -z-10"
        alt="Wayone IT Solution Background"
      />

      {/* Hero decorative images */}
      {[{ src: "/assets/images/heroh2.png", className: "absolute bottom-20 right-4.5 h-auto object-cover w-2/5" },
      { src: "/assets/images/Group7.png", className: "absolute bottom-5 left-1 object-contain h-56 w-16" }].map((img, idx) => (
        <motion.div key={idx} variants={imageVariant} initial="hidden" animate={controls}>
          <Image src={img.src} width={1650} height={900} className={`${img.className} -z-10`} alt="Decoration" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="w-full h-full absolute px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center justify-between text-left">
        <motion.div
          ref={ref}
          className="max-w-5xl mt-44 w-2/3 mr-auto ml-10 space-y-6"
          variants={contentVariant}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-50" variants={cardVariants}>
            {title1}
          </motion.h2>
          <motion.h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100" variants={cardVariants}>
            {title2}
          </motion.h4>
          <motion.p className="text-base sm:text-lg font-medium text-gray-200" variants={cardVariants}>
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={contentVariant}>
            {[{ link: secondaryLink, title: secondaryLinkTitle, colors: { from: "gray-100", to: "gray-300", text: "blue-800" } },
            { link: "/get-started", title: "Get Started", colors: { from: "blue-800", to: "blue-600", text: "white" } }].map((btn, index) => (
              <motion.div
                key={index}
                variants={buttonVariant}
                whileHover="hover"
                whileFocus={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: liquidEase },
                }}
              >

                <Link href={btn.link}>
                  <span
                    tabIndex={0}
                    className={`relative inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-${btn.colors.from} to-${btn.colors.to} text-${btn.colors.text} font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${btn.colors.text}`}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "0 0",
                    }}
                  >

                    <motion.span
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at ${hoverPosition.buttonIndex === index ? `${hoverPosition.x}px ${hoverPosition.y}px` : "50% 50%"}, ${index === 1 ? "rgba(255,255,255,0.2)" : "#215bdb20"}, transparent 70%)`,
                      }}
                      animate={{
                        opacity: hoverPosition.buttonIndex === index ? 1 : 0,
                        transition: { duration: 0.4, ease: liquidEase },
                      }}
                    />
                    {btn.title}
                    <span className={`rounded-full p-2 ml-2 border ${index === 0 ? `bg-gradient-to-r from-[#215bdb] to-blue-800 text-white` : `bg-gradient-to-r from-gray-100 to-gray-300 text-[#215bdb]`} `}>
                      <IoArrowForward className="text-lg" />
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Awards */}
        {awardShow && (
          <motion.div className="relative right-8 bottom-5 flex items-center justify-end w-full gap-2" variants={contentVariant}>
            <p className="text-white text-sm sm:text-base">50k Satisfied Customers</p>
            <div className="flex items-center justify-center w-25 h-10">
              {["/assets/images/pr1.png", "/assets/images/pr2.png", "/assets/images/pr3.png"].map((src, index) => (
                <motion.div key={index} variants={imageVariant} initial="hidden" animate={controls}>
                  <Image src={src} width={40} height={40} className={`w-10 h-10 object-contain absolute top-0 right-${5 + index * 5}`} alt={`Award ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        span:hover {
          background-position: 100% 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
