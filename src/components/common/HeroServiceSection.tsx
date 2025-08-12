"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  message: yup.string().required('Message is required'),
});

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
const HeroServiceSection = ({
  title1 = "Bring Your Ideas to Life with Wayone’s Expert App Development Services",
  title2 = "Custom, Scalable & High-Performance App Development",
  subTitle = "App Development Services – Wayone",
  description = "we offer end-to-end app development services that turn your own ideas into reality. Our team designs customized, high-performing applications with smooth user interfaces and functionality in line with your business requirements.",
  awardShow = true,
  primaryLink = "/contact-us",
  secondaryLink = "/about-us",
  primaryLinkTitle = "Start Your Project",
  secondaryLinkTitle = "",
}: {
  title1?: string;
  title2?: string;
  subTitle?: string;
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Replace this with your real API endpoint
      await axios.post('/api/contact', data);

      setShowModal(true);
      reset();
    } catch (err) {
      console.log(err)
      alert('Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      link: primaryLink,
      title: primaryLinkTitle,
      colors: { from: "gray-100", to: "gray-300", text: "blue-800" },
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
    <section id="home" className="relative bg-primary md:!bg-transparent mt-20 md:mt-0 flex items-start justify-between min-h-screen h-[115vh] rounded-b-[4rem] w-[98%] mx-auto overflow-hidden">
      {/* === Background SVG === */}
      <Image
        src="/assets/images/bghero1.svg"
        width={1600}
        height={900}
        alt="Hero Background"
        className="absolute inset-0 mt-20 md:mt-0 object-none md:object-cover w-full mx-auto h-auto -z-10"
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
        <motion.div variants={containerVariants} className="absolute top-4 md:top-auto md:bottom-5 left-4 md:left-20 w-full h-full md:h-4/5 max-w-xl  z-10 md:-z-10">
          {[subTitle, title1, title2, description].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={textVariants}
              className={
                i === 1
                  ? "text-2xl sm:text-2xl lg:text-3xl font-semibold text-gray-50 mb-3"
                  : i === 2
                    ? "text-xl sm:text-2xl font-semibold text-gray-100 mb-2"
                    : "text-sm sm:text-lg text-gray-200 mb-1"
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


        </motion.div>
      </motion.div>

      {/* === Hero Text Content === */}
      <div className="absolute right-0 w-full h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          ref={ref}
          className="md:mx-0 mt-auto mb-16 md:mb-0 md:mt-14 w-full md:w-1/2  !ml-auto max-w-lg bg-white rounded-3xl overflow-hidden "
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <p className="bg-secondary text-white p-4 text-center font-semibold">Get a Free Consultation – Contact Us Today!</p>
          {/* Right Column (Form) */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4 px-6 pb-6 pt-2">
            <div>
              <input
                {...register('name')}
                placeholder='Enter your name'
                className="w-full bg-gray-100 py-3 mt-1 px-4  border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <input
                type="email"
                {...register('email')}
                placeholder='Enter you email address'
                className="w-full bg-gray-100 py-3 mt-1 px-4  border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register('phone')}
                placeholder='Enter your phone number'
                className="w-full bg-gray-100 py-3 mt-1 px-4  border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
              <textarea
                rows={4}
                {...register('message')}
                placeholder='Message'
                className="w-full bg-gray-100 py-3 p-10 mt-1 px-4  border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full text-white py-2 px-4 rounded-full
                        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
                        bg-opacity-60 brightness-130 hover:scale-102
                        backdrop-blur-md border border-white/10
                        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                        ring-1 ring-inset ring-blue-300/10
                        transition duration-200 ease-in-out disabled:opacity-50
                        overflow-hidden"
            >
              {/* Shine Overlay */}
              <span className="pointer-events-none absolute top-0 left-0 w-full h-1/3
                                        bg-gradient-to-b from-white/40 to-transparent
                                        rounded-t-full brightness-120
                                        opacity-60
                                        blur-sm" />

              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </motion.div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-full-lg shadow-xl text-center w-80">
            <h3 className="text-lg font-semibold text-green-600">Thank You!</h3>
            <p className="mt-2 text-gray-700">Your message has been sent.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroServiceSection;
