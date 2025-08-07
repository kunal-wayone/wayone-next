'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react';

function VideoCard({ videoSrc, coverImage, description }: any) {
    const videoRef: any = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    return (
        <div className="flex-1 w-1/2 h-94 rounded-[2.5rem] overflow-hidden relative m-2">
            {!isPlaying && (
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer z-10 rounded-xl"
                    onClick={handlePlay}
                >
                    <Image src={coverImage} width={900} height={900} alt="cover" className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-xl" />
                    <div className='bg-primary absolute z-50 rounded-full shadow-xl'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-gray-200 z-20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}
            <video
                ref={videoRef}
                className="w-full h-full rounded-xl"
                controls={isPlaying}
                preload="none"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-white">{description}</p>
        </div>
    );
}

export default function VideoTestimonials() {
    return (
        <div className="flex w-[55%]  bg-primary p-6 rounded-r-[3rem]">
            <VideoCard
                videoSrc="/videos/testimonial1.mp4"
                coverImage="/assets/images/sekh1.png"
                description="Customer Testimonial 1"
            />
            <VideoCard
                videoSrc="/videos/testimonial2.mp4"
                coverImage="/assets/images/sekh1.png"
                description="Customer Testimonial 2"
            />
        </div>
    );
}
