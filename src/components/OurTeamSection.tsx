'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import Image from 'next/image';

const LiquidCard = ({ member }: any) => (
    <motion.div
        className="relative w-full h-96 bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
        whileHover="hover"
        initial="rest"
        animate="rest"
    >
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
        <div className="w-full ">
            <Image
                width={900}
                height={900}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="absolute  top-0 hover:bg-black/5  z-10 flex flex-col justify-between h-full w-full ">
            <div className='mt-auto mb-10 bg-white'>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
            <motion.div
                className="absolute bottom-3 left-3 text-sm font-medium text-primary hidden flex items-center"
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

export default function OurTeamSection({ subtitle, title, colorTitle, description, team }: any) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    const activeMember = team[activeIndex];

    return (
        <div className="p-4 lg:px-16 text-left max-w-7xl m-auto overflow-y-clip overflow-x-hidden">
            {/* Title Section */}
            {subtitle && <h3 className="text-xl text-secondary mb-2">{subtitle}</h3>}
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {title} <span className="text-primary">{colorTitle}</span>
                </h2>
            )}
            {description && <p className="text-base text-gray-600 mb-6">{description}</p>}

            <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                {/* Left Info Box */}
                <div className='md:w-1/2 px-10 text-left'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMember.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">{activeMember.name}</h3>
                            <h6 className="text-lg text-primary">{activeMember.role}</h6>
                            <p className="text-gray-600 mt-2">{activeMember.description}</p>
                            <div className='flex items-center justify-start gap-4 w-44 mt-8 mb-10'>
                                <p className='font-semibold'>Follow on</p>
                                <Link href={''}><IoLogoFacebook size={24} /></Link>
                                <Link href={''}><IoLogoInstagram size={24} /></Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Swiper Card */}
                <div className=' text-center'>
                    <Swiper
                        modules={[EffectCards]}
                        effect="cards"
                        grabCursor
                        centeredSlides
                        slidesPerView="auto"
                        spaceBetween={100}
                        className="w-full rounded-2xl max-w-sm mx-auto"
                        onSlideChange={handleSlideChange}
                        loop={true}
                    >
                        {team.map((member: any) => (
                            <SwiperSlide className='rounded-3xl overflow-hidden' key={member.id}>
                                <LiquidCard member={member} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
