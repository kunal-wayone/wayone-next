'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const liquidEase = [0.6, 0.05, 0.3, 0.95];

export default function WhyChooseUs() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false }); // Not once: allow repeat

    const points = [
        "Efficient Project Management",
        "Dedicated Team of Experts",
        "Timely Project Completion",
    ];

    const imageVariant: any = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: liquidEase,
            },
        },
    };

    // === Handle scroll into view
    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden'); // Optional: reset when out of view
        }
    }, [isInView, controls]);

    // === Handle tab focus
    useEffect(() => {
        const handleFocus = () => {
            if (isInView) {
                controls.start('visible');
            }
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, [isInView, controls]);

    return (
        <div
            ref={ref}
            className="bg-primary flex flex-col lg:flex-row items-center justify-between overflow-hidden relative"
        >
            {/* Text Section */}
            <div className="p-4 lg:pl-16 lg:py-10 w-full lg:w-2/3 z-10">
                <h2 className="text-3xl font-semibold mb-2 text-white leading-tight">
                    Why <br />
                    Choose <span className="text-secondary">WayOne?</span>
                </h2>
                <p className="text-sm text-gray-200 mb-4">
                    With years of experience and a client-centric approach, we provide smooth collaboration, delivering innovative solutions that drive your business forward.
                </p>

                <div className="flex flex-col items-center gap-3 mb-6 w-3/4 max-w-xl">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="text-sm flex justify-center items-center text-white text-center rounded-full py-3 px-4 bg-[#215cdb8a] border border-[#ffffff80] shadow-[inset_4px_4px_8px_#ffffff20,inset_-4px_-4px_8px_#ffffff10] w-full"
                        >
                            {point}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Animated Image Section */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={imageVariant}
                className="w-full lg:w-2/3 overflow-visible relative"
            >
                <Image
                    src="/assets/images/heroh22.png"
                    width={1650}
                    height={900}
                    alt="Decoration"
                    className="w-3/4 h-11/12 mb-[-7rem] z-[1000] ml-auto object-top drop-shadow drop-shadow-gray-300"
                />
            </motion.div>
        </div>
    );
}
