import React from 'react';
import SwiperTestimonials from './common/SwiperTestimonials';
import VideoTestimonials from './common/VideoTestimonials';

export default function TestimonialSection() {
    return (
        <div className='md:py-4'>
            <div className='flex flex-col md:flex-row items-center  justify-between mb-16 gap-8'>

                {/* Part 1: Videos */}
                <VideoTestimonials  />

                {/* Part 2: Swiper Cards */}
                <SwiperTestimonials />
            </div>
        </div>
    );
}
