"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// === Types ===
type ButtonProps = {
  link: string;
  title: string;
  colors: {
    from: string;
    to: string;
    text: string;
  };
};

// === Easing Curve ===
const liquidEase = [0.6, 0.05, 0.3, 0.95];

// === Framer Motion Variants ===
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const imageVariant: any = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: liquidEase,

    },
  },
};

const textVariants: any = {
  hidden: { opacity: 0, x: 80 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: liquidEase,
    },
  }),
};

const buttonVariant: any = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: liquidEase,
    },
  },
};

const trans: any = { duration: 0.4, ease: liquidEase }

// === Hero Section Component ===
const HeroSection = ({
  title1 = "Advanced Web & App Development",
  title2 = "Solutions for Your Business",
  description = "We provide innovative and scalable web and mobile application solutions...",
  awardShow = true,
  primaryLink = "/contact",
  secondaryLink = "/services",
  primaryLinkTitle = "Contact Us",
  secondaryLinkTitle = "View More",
}: {
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
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  const heroImages = [
    { src: "/assets/images/group1.png", className: "bottom-44 left-0 w-16" },
    { src: "/assets/images/group5.png", className: "bottom-2 left-20 w-20" },
    { src: "/assets/images/group2.png", className: "bottom-2 left-44 w-20" },
    { src: "/assets/images/group3.png", className: "bottom-2 left-[17rem] max-w-[150px]" },
    { src: "/assets/images/group6.png", className: "bottom-2 left-[24rem] max-w-[150px]" },
  ];

  const buttons: ButtonProps[] = [
    {
      link: secondaryLink,
      title: secondaryLinkTitle,
      colors: { from: "gray-100", to: "gray-300", text: "blue-800" },
    },
    {
      link: primaryLink,
      title: primaryLinkTitle,
      colors: { from: "blue-800", to: "blue-600", text: "white" },
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      buttonIndex: index,
    });
  };

  return (
    <section id="home" className="relative flex items-start min-h-screen h-[115vh] rounded-b-[4rem] w-[98%] mx-auto overflow-hidden">
      {/* === Background SVG === */}
      <Image
        src="/assets/images/bghero1.svg"
        width={1600}
        height={900}
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full mx-auto h-auto -z-10"
      />

      {/* === Floating Hero Images === */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="absolute inset-0"
      >
        {heroImages.map((img, idx) => (
          <motion.div
            key={idx}
            variants={imageVariant}
            className={`absolute ${img.className} h-fit max-h-72 object-contain -z-10`}
          >
            <Image src={img.src} alt={`Hero Image ${idx}`} width={100} height={100} />
          </motion.div>
        ))}

        {/* Side Illustration */}
        <motion.div variants={imageVariant} className="absolute bottom-20 right-0.5 w-2/5 -z-10">
          <Image
            src="/assets/images/heroh2.png"
            width={600}
            height={400}
            alt="Hero Side"
            className="object-cover w-full"
          />
        </motion.div>
      </motion.div>

      {/* === Hero Text Content === */}
      <div className="absolute w-full h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          ref={ref}
          className="max-w-5xl space-y-6 ml-20 w-2/3"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[title1, title2, description].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={textVariants}
              className={
                i === 0
                  ? "text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-50"
                  : i === 1
                    ? "text-xl sm:text-2xl font-semibold text-gray-100"
                    : "text-base sm:text-lg text-gray-300"
              }
            >
              {text}
            </motion.p>
          ))}

          {/* === Call to Action Buttons === */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={containerVariants}>
            {buttons.map((btn, index) => (
              <motion.div key={index} variants={buttonVariant}>
                <Link href={btn.link}>
                  <span
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    className={`relative inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-${btn.colors.from} to-${btn.colors.to} text-${btn.colors.text} font-semibold text-sm sm:text-base shadow-lg overflow-hidden transition-all`}
                  >
                    {/* Hover Effect */}
                    <motion.span
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${hoverPosition.buttonIndex === index
                          ? `${hoverPosition.x}px ${hoverPosition.y}px`
                          : "50% 50%"
                          }, ${index === 1 ? "rgba(255,255,255,0.2)" : "#215bdb20"}, transparent 70%)`,
                      }}
                      animate={{
                        opacity: hoverPosition.buttonIndex === index ? 1 : 0,
                      }}
                      transition={trans}
                    />
                    {btn.title}
                    <span
                      className={`ml-2 p-2 rounded-full border ${index === 0
                        ? "bg-gradient-to-r from-[#215bdb] to-blue-800 text-white"
                        : "bg-gradient-to-r from-gray-100 to-gray-300 text-[#215bdb]"
                        }`}
                    >
                      <IoArrowForward className="text-lg" />
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* === Awards Section === */}
          {awardShow && (
            <motion.div
              className="flex absolute bottom-5 right-5 items-center gap-2 mt-10"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <p className="text-white text-sm sm:text-base">50k Satisfied Customers</p>
              <div className="flex relative w-28 h-10">
                {["pr1", "pr2", "pr3"].map((name, index) => (
                  <motion.div
                    key={index}
                    variants={imageVariant}
                    className={`absolute top-0 ${index === 0 ? "right-10" : (index === 1 ? "right-14" : "right-18")} `}
                  >
                    <Image
                      src={`/assets/images/${name}.png`}
                      width={40}
                      height={40}
                      alt={`Award ${index}`}
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
