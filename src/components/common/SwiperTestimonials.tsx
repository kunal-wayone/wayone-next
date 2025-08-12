'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Nisha Kumari',
    image: '/assets/images/pr1.png',
    quote: '“The branding and design services provided by Wayone IT Solutions PVT. LTD gave our company a modern, professional look that resonates with our target audience. We’ve noticed a significant increase in customer engagement!”',
  },
  {
    name: 'Bob Smith',
    image: '/assets/images/pr2.png',
    quote: 'We’re proud to have earned the trust of over 1200 clients who rely on our expertise to fuel their success—and that number keeps rising!',
  },
  {
    name: 'Clara Adams',
    image: '/assets/images/pr3.png',
    quote: "“WayOne's team completely transformed our online presence.Their SEO and digital marketing expertise helped us rank higher on search engines, bringing in more leads than ever before!”",
  },
];

export default function SwiperTestimonials() {
  return (
    <div className='w-5/6 md:w-4/5 max-w-md md:pr-6 mx-auto'>
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
            <div className='relative h-56  p-4 pt-2 rounded-3xl overflow-visible w-full'>

              <div className='flex items-end justify-start gap-1 absolute pl-4'>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={800}
                  height={800}
                  className='w-20 h-20 rounded-full left-0 -top-5  '

                />
                <h4 className='w-full font-semibold mb-2 '>{t.name}</h4>
              </div>
              <div className='bg-blue-100 rounded-2xl mt-10 h-40 pt-10 pb-4 px-4  text-sm'>
                <div className='bg-white rounded-2xl h-full w-full p-4'>
                  <p className='line-clamp-4'>&quot;{t.quote}&quot;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
