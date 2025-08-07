'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Alice Johnson',
    image: '/assets/images/pr1.png',
    quote: 'This service exceeded my expectations!',
  },
  {
    name: 'Bob Smith',
    image: '/assets/images/pr2.png',
    quote: 'Truly professional and reliable.',
  },
  {
    name: 'Clara Adams',
    image: '/assets/images/pr3.png',
    quote: 'Exceptional customer support and quality.',
  },
];

export default function SwiperTestimonials() {
  return (
    <div className='w-4/5 max-w-md pr-6'>
      <div>
        <h3 className='text-3xl mb-2 font-bold w-full'>1200+ Clients, Unmatched
          <br />  <span className='text-primary'>
            Satisfaction, and Growing!
          </span>
        </h3>
        <p className='mb-4'>We’re proud to have earned the trust of over 1200 clients who rely on our expertise to fuel their success—and that number keeps rising!</p>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className='relative h-44 bg-blue-50 p-4 pt-2 rounded-3xl overflow-visible w-full'>

              <div className='flex items-end justify-start gap-2 absolute'>

                <Image
                  src={t.image}
                  alt={t.name}
                  width={800}
                  height={800}
                  className='w-16 h-16 rounded-full left-0 -top-5  '

                />
                <h4 className='w-full font-semibold mb-2 '>{t.name}</h4>
              </div>
              <div className='bg-blue-200 rounded-2xl mt-10 p-4 h-28  text-sm'>
                <p className='line-clamp-4'>&quot;{t.quote}&quot;</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
