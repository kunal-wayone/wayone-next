'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

// Example tab and mockup data
const mockupTabs = [
    {
        name: 'Mobile',
        images: [
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
        ]
    },
    {
        name: 'Tablet',
        images: [
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',

        ]
    },
    {
        name: 'Desktop',
        images: [
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',
            '/assets/images/app.png',

        ]
    }
];

export default function MockUpSection() {
    const [activeTab, setActiveTab] = useState(mockupTabs[0].name);

    const activeImages = mockupTabs.find(tab => tab.name === activeTab)?.images || [];

    return (
        <div className="w-full  py-10 bg-white">
            {/* 3 action active based tab with dynamic name, primary color using Tailwind */}
            <div className="flex justify-center gap-4 border border-gray-300 rounded-3xl mb-8 w-11/12 p-2 mx-auto ">
                {mockupTabs.map(tab => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-6 py-6 rounded-3xl w-full  font-semibold transition-all duration-300 
              ${activeTab === tab.name
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-blue-100'}
            `}
                    >
                        {tab.name} Panel
                    </button>
                ))}
            </div>

            {/* Active tab based mockups image view in grid format slide also with extraordinary effect using Swiper */}
            <Swiper
                effect="coverflow"
                // grabCursor={true}
                // centeredSlides={true}
                slidesPerView={5}
                // coverflowEffect={{
                //     rotate: 30,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 1,
                //     slideShadows: true,
                // }}
                // modules={[EffectCoverflow]}
                className="w-full mx-auto "
            >
                {activeImages.map((image, index) => (
                    <SwiperSlide key={index} className="mx-5">
                        <div className='relative'>
                            <Image
                                width={900}
                                height={900}
                                src={image}
                                alt={`Mockup ${index}`}
                                className=" m-auto my-10  object-contain rounded-xl "
                            />
                            <div className='bg-primary rounded-[3rem] p-4 w-full h-36 flex juce items-center absolute left-1/2 -translate-x-1/2 bottom-[-5%] -z-10 '>
                                <span className='w-28 h-28 rounded-full bg-blue-950 block m-auto' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
