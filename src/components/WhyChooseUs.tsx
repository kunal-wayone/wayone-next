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
        {
            name: "Efficient Project Management",
            desc: "Our agile project management guarantees timely delivery within budget. With detailed planning, milestones, and regular feedback, we reduce risks and keep your project on track from beginning to end.",
            image: "/assets/images/icons/project.png"
        },
        {
            name: "Dedicated Team of Experts",
            desc: "Our skilled team collaborates with you closely to provide customised, high-quality solutions that match your business objectives, guaranteeing impactful and effective results",
            image: "/assets/images/icons/active.png"
        },
        {
            name: "Timely Project Completion",
            desc: "We respect time. Our dedication to project completion on time, without ever sacrificing quality, has built us trust across industries, allowing you to proceed with confidence.",
            image: "/assets/images/icons/deal2.png"
        }
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
            className="bg-primary flex flex-col lg:flex-row items-center justify-between overflow-x-clip overflow-y-visible relative"
        >
            {/* Text Section */}
            <div className="p-4 lg:pl-10 lg:pr-0 lg:py-10 w-full lg:w-4/6 z-10">
                <h2 className="text-3xl font-semibold mb-2 text-white leading-tight">
                    Why <br />
                    Choose <span className="text-secondary">WayOne?</span>
                </h2>
                <p className="text-sm text-gray-200 mb-4">
                    With years of experience and a client-centric approach, we provide smooth collaboration, delivering innovative solutions that drive your business forward.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 w-full ">
                    {points.map((data, index) => (
                        <div key={index} className='rounded-3xl bg-white py-6'>
                            <div className="w-24 h-24 mb-4 mx-auto">
                                <Image
                                    width={1600}
                                    height={900}
                                    src={data.image}
                                    alt={data.name}
                                    unoptimized
                                    className="w-full h-full m-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Info Overlay */}
                            <div className=" relative flex flex-col justify-between text-gray-800 h-auto w-full p-3 text-center">
                                <h3 className="text- font-bold text-blue-900 mb-2">{data?.name}</h3>
                                <p className="text-gray-600 font-semibold text-sm line-clamp-6 ">{data?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animated Image Section */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={imageVariant}
                className="w-full lg:w-1/3 lg:h-4/5 overflow-visible relative"
            >
                <Image
                    src="/assets/images/heroh22.png"
                    width={1650}
                    height={900}
                    alt="Decoration"
                    className="w-full h-full mb-[-7rem] z-[1000] ml-auto object-top drop-shadow drop-shadow-gray-300"
                />
            </motion.div>
        </div>
    );
}
