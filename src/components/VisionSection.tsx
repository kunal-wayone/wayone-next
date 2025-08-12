import Image from 'next/image';
import React from 'react';

export default function VisionSection() {
    return (
        <div className="p-4 lg:px-16 max-w-7xl m-auto overflow-x-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Vision */}
                <div className="flex-1 py-4">
                    <h2 className="text-3xl font-bold mb-2">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our vision is to be the most sought-after and best Mobile and App development partner. Our goal is to empower businesses through the provision of innovative and scalable technology solutions that meet changing client needs. With the application of emerging and new technologies, we aim to propel businesses towards success, growth, and efficiency globally. With unshakable resolve to excellence, quality, and dependability, we&apos;re constructing a new universe of the digital age. We aspire to provide custom IT solutions that not only support the current needs of businesses but also predict tomorrow’s prospects to help companies thrive in digital transformation era.
                    </p>
                </div>

                {/* Divider */}
                <div className="hidden lg:block rounded-t-full  w-3 bg-blue-900 mx-4 self-stretch" />

                {/* Mission */}
                <div className="flex-1 py-4">
                    <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Wayone believes in empowering companies with groundbreaking IT solutions and digital transformation skills that deliver actual outcomes. We are dedicated to delivering actual business solutions by delivering value-based technology solutions that fit every single customer&apos;s requirement. Through maintaining leadership of the current trends and being responsive in a timely manner to emerging technologies, we aim to offer quantifiable results in the area of enhancing operating effectiveness, business performance, and customer satisfaction.
                    </p>
                </div>
            </div>

            <div className='bg-blue-900 rounded-[3rem] text-white text-center relative p-10'>
                <h3 className='text-secondary font-semibold'>Our Core Values</h3>
                <h2 className='text-3xl font-semibold mb-4'>The Pillars of Innovation, <br />Excellence and Integrity</h2>
                <p className='text-gray-100 mb-10 px-6 '>Our fundamental values drive everything we do. We have a dedication to continuous innovation, upholding the highest standards of excellence, and acting with integrity in every one of our business dealings. Our values influence the way we bring exceptional IT solutions and ensure each project we engage in is built on a sound ethical and professional foundation. By complying with these principles, we ensure that we have innovative solutions in place to accommodate and exceed expectations of clients.</p>

                <Image src={'/assets/images/group1.png'} width={900} height={900} className='w-auto h-4/5 opacity-50 absolute bottom-0 right-0' alt='' />
                <Image src={'/assets/images/group2.png'} width={900} height={900} className='w-auto h-3/5 absolute opacity-50 bottom-0 left-0' alt='' />
            </div>

            <div className='relative flex items-center gap-4 justify-center p-10 pt-32 '>
                <Image src={'/assets/images/Union.png'} width={900} height={900} className='w-[70%] h-2/5 -z-10 absolute  drop-shadow-gray-500 top-0 left-1/2 -translate-x-1/2' alt='' />

                {[{
                    title: 'Innovation', desc: "Always pushing boundaries with new ideas."
                }, {
                    title: 'Integrity', desc: "Transparent and ethical business practices."
                }, {
                    title: 'Excellence', desc: "Commitment to delivering top-quality solutions."
                }, {
                    title: 'Collaboration', desc: "Building strong partnerships for mutual growth."
                }]?.map((data, index) => (
                    <div key={index} className='rounded-2xl p-6 bg-secondary text-center text-white'>
                        < h5 className='text-xl font-semibold mb-2 ' > {data?.title}</h5>
                        <p className='line-clamp-2'>
                            {data?.desc}
                        </p>
                    </div>
                ))
                }

            </div >
        </div >
    );
}
