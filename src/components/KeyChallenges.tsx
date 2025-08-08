'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

// 🔹 LiquidCard Component
const LiquidCard = ({ member }: any) => (
    <motion.div
        className="relative w-full h-96 py-10 border-[1.6px] border-dashed border-gray-300 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
        whileHover="hover"
        initial="rest"
        animate="rest"
    >
        {/* Background hover effect */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-10 z-0"
            variants={{
                rest: { height: '0%' },
                hover: {
                    height: '100%',
                    transition: { duration: 0.6, ease: 'easeInOut' }
                }
            }}
            style={{ originY: 1 }}
        />

        {/* Image */}
        <div className="w-3/4 h-1/3 m-auto">
            <Image
                width={900}
                height={900}
                src={member.image}
                alt={member.name}
                className="w-full h-full m-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        {/* Info Overlay */}
        <div className=" relative flex flex-col justify-between text-gray-800 h-full w-full p-4">
            <div className='mb-4 bg-white/80 rounded p-2'>
                <h3 className="text-xl font-semibold text-gray-800">{member?.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-5 ">{member?.description}</p>
            </div>

            {/* Bottom-left arrow */}
            <motion.div
                className="absolute z-20 bottom-3 left-3 text-sm font-medium text-primary hidden group-hover:flex items-center"
                variants={{
                    rest: { x: -20, opacity: 0 },
                    hover: {
                        x: 0,
                        opacity: 1,
                        transition: { type: 'spring', stiffness: 300 }
                    }
                }}
            >
                <svg
                    className="w-4 h-4 mr-1 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                View More
            </motion.div>
        </div>
    </motion.div>
);

// 🔹 Main Component
export default function KeyChallenges({ subtitle, title, colorTitle, description, team }: any) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex); // use realIndex to account for loop mode
    };

    const active = team[activeIndex];

    return (
        <div className="py-10 px-4 text-center max-w-7xl mx-auto">

            {/* Team Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">


                {/* Right Swiper Carousel */}
                <div className='w-full lg:w-3/4'>
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        onSlideChange={handleSlideChange}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className="w-full max-w-2xl mx-auto"
                    >
                        {team.map((member: any) => (
                            <SwiperSlide key={member.id} className="rounded-3xl overflow-hidden">
                                <LiquidCard member={member} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {/* Left Info Box */}
                <div className='w-full lg:w-2/4 text-right pr-10'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Title Section */}
                            <h3 className="text-xl text-secondary mb-2">{active?.industry +" "+" Industries Challenges"}</h3>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {'Key Challenges in the'} <br /> <span className="text-primary">{active?.name}</span>
                            </h2>

                            <p className="text-base text-gray-600 mb-6">{active?.description}</p>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
