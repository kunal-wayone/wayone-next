"use client";

import Image from "next/image";
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

const trans: any = { duration: 0.4, ease: liquidEase }

// === Hero Section Component ===
const HeroContactSection = ({
  title1 = "Let’s Connect and Build Something Amazing Together",
  title2 = "Solutions for Your Business",
  description = "Contact us to explore innovative, results-driven solutions for your digital marketing goals.",
  awardShow = true,
  primaryLink = "/contact-us",
  secondaryLink = "/about-us",
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


  return (
    <section id="home" className="relative flex items-start mt-20 md:mt-0 h-[70vh] md:min-h-screen md:h-[115vh] rounded-b-[4rem] w-[98%] mx-auto overflow-hidden">
      {/* === Background SVG === */}
      <Image
        src="/assets/images/bghero1.svg"
        width={1600}
        height={900}
        alt="Hero Background"
        className="absolute inset-0 object-none md:object-cover w-full mx-auto h-full md:h-auto -z-10"
      />

      {/* === Floating Hero Images === */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="absolute hidden md:block inset-0"
      >
        {/* Side Illustration */}
        <motion.div variants={imageVariant} className="absolute bottom-20 right-0.5 w-2/5 -z-10">
          <Image
            src="/assets/images/sekh1.png"
            width={600}
            height={400}
            alt="Hero Side"
            className="object-cover w-4/5"
          />
        </motion.div>
      </motion.div>

      {/* === Hero Text Content === */}
      <div className="absolute w-full h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          ref={ref}
          className="max-w-xl md:ml-20 md:mt-14 md:w-2/3"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[title1, description].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={textVariants}
              className={
                i === 0
                  ? "text-2xl sm:text-2xl lg:text-4xl font-semibold text-gray-50"
                  : i === 2
                    ? "text-xl sm:text-2xl font-semibold text-gray-100"
                    : "text-base sm:text-lg text-gray-200"
              }
            >
              {text}
            </motion.p>
          ))}

          {/* Right Column (Form) */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
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

export default HeroContactSection;
