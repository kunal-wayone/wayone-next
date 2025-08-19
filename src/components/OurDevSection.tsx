'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const OurDevSection = ({ sectionTitle, sectionDescription, cardsData }: any) => {
    // Ref for scroll trigger
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    // Custom easing for liquid-like flow
    const liquidEase = [0.4, 0, 0.2, 1]; // Cubic-bezier for smooth, organic motion

    // Animation variants for title/description
    const textVariants: any = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: liquidEase,
                staggerChildren: 0.2,
            },
        },
    };

    // Animation variants for cards
    const cardVariants: any = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: (index: any) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: index * 0.15,
                ease: liquidEase,
            },
        }),
        hover: {
            scale: 1.03,
            transition: { duration: 0.4, ease: liquidEase },
        },
    };

    // Animation for View More link
    const viewMoreVariants: any = {
        hidden: { opacity: 0, x: -15 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.6,
                ease: liquidEase,
            },

            hover: {
                x: 3,
                transition: { duration: 0.3, ease: liquidEase },
            },
        }
    };

    return (
        <div className="py-4 lg:py-16 flex flex-col lg:flex-row items-center justify-center m-auto" ref={ref} >
            {/* Section 1: Title & Description (2/6) */}
            <motion.div
                className="flex-2/6 text-left p-4 md:py-12 md:px-16 bg-white"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={textVariants}
            >
                <motion.h2
                    className="text-4xl text-secondary font-bold mb-4"
                    variants={textVariants}
                >
                    {sectionTitle}
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600"
                    variants={textVariants}
                >
                    {sectionDescription}
                </motion.p>
            </ motion.div>

            {/* Section 2: Grid of Cards (4/6) */}
            < div
                className="flex-4/6 px-6 bg-primary p-6 rounded-none md:rounded-l-[3rem]  "
            >
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto overflow- relative ">
                    {cardsData?.slice(0, 6).map((card: any, index: any) => (
                        <motion.div
                            key={index}
                            className="bg-transparent p-2"
                            custom={index}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            whileHover="hover"
                            whileFocus="hover"
                        >
                            <Image
                                src={card.logo}
                                alt={card.title}
                                width={600}
                                height={600}
                                className="h-12 w-24 mb-4 object-contain mr-auto"
                            />
                            <h3 className="text-lg font-semibold text-white text-left text- mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-200 text-sm text-left mb-2 line-clamp-2">
                                {card.description}
                            </p>
                            <div className="text-left">
                                <Link
                                    href={card.link}
                                    className="text-gray-300 text-sm font-medium hover:underline"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    <div className="text-left m-auto absolute -bottom-19 right-10  bg-secondary w-44 h-13 rounded-b-[3rem] flex items-end justify-center pb-4">
                        <Link
                            href={'/our-work'}
                            className="text-gray-50 font-semibold z-50 hover:underline"
                        >
                            View More
                            <span className='rotate-[-45deg] pl-2 inline-block'>
                                →
                            </span>
                        </Link>
                    </div>

                    <div className="text-left m-auto absolute -top-6 -right-6 md:right-0 z-10 bg-secondary w-36 h-16 rounded-b-full flex items-end justify-center pb-4">
                        <Image src={'/assets/images/icons/webd.png'} alt='' width={100} height={100} className='h-10 w-10 object-contain' />
                    </div>
                    <Image
                        src={'/assets/images/serviceicon.png'}
                        alt={'UAE'}
                        width={900}
                        height={900}
                        className="w-auto h-44 md:h-5/6 absolute -bottom-5 -right-6 brightness-70 object-contain mr-auto"
                    />
                </div>
            </ div>
        </div >
    );
};

export default OurDevSection;   