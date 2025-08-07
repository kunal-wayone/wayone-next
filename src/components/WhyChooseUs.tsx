'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function WhyChooseUs() {
    const controls = useAnimation();

    const points = [
        "Efficient Project Management",
        "Dedicated Team of Experts",
        "Timely Project Completion"
    ];


    // Start animation on mount
    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <div className="bg-primary  flex flex-col lg:flex-row items-center justify-between relative">
            {/* Text Section */}
            <div className="p-4 lg:pl-16 lg:py-10 w-full lg:w-2/3 z-10">
                <h2 className="text-3xl font-semibold mb-2 text-white">
                    Why <br />
                    Choose <span className="text-secondary">WayOne?</span>
                </h2>
                <p className="text-sm text-gray-200 mb-4">
                    With years of experience and a client-centric approach, we provide smooth collaboration, delivering innovative solutions that drive your business forward
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

            {/* Image Section */}
            <div className="w-full lg:w-2/3 overflow-visible relative">
     
                    <Image
                        src="/assets/images/heroh22.png"
                        width={1650}
                        height={900}
                        className="w-3/4 h-11/12 mb-[-7rem] z-[1000] ab ml-auto object-top drop-shadow drop-shadow-gray-300 "
                        alt="Decoration"
                    />
            </div>
        </div>
    );
}
