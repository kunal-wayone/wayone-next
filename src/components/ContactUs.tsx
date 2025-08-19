'use client'; // Only needed for app router

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';

// Validation Schema
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone is required'),
    message: yup.string().required('Message is required'),
});

export default function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            // Replace this with your real API endpoint
            await axios.post('/api/contact', data);

            setShowModal(true);
            reset();
        } catch (err) {
            console.log(err)
            alert('Submission failed.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=" py-10 bg-white text-gray-800 pt-28">
            <div className=" mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="flex flex-col items-start justify-start space-y-2 p-16">
                    <h2 className="text-5xl font-bold text-gray-800">Let’s Build the Future <br /> Together! <span className='text-secondary'> Contact Us <br /> Today</span></h2>
                    <p className="text-gray-600">
                        Reach out now to discuss how our innovative solutions can accelerate your business growth and transform your digital landscapeReminder for images Portfolio Section 4 line.                     </p>
                    <Image
                        src={'/assets/images/arrow.png'}
                        alt="Contact"
                        className="w-2/3 ml-auto hidden"
                        width={900}
                        height={900}
                    />
                </div>

                {/* Right Column (Form) */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-primary p-10 rounded-l-[3rem] overflow-hidden relative">
                    <div>
                        <input
                            {...register('name')}
                            placeholder='Enter your name'
                            className="w-full bg-blue-100/40 py-3 mt-1 px-4 text-white placeholder-gray-50 border border-blue-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder='Enter you email address'
                            className="w-full bg-blue-100/40 py-3 mt-1 px-4 text-white placeholder-gray-50 border border-blue-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input
                            {...register('phone')}
                            placeholder='Enter your phone number'
                            className="w-full bg-blue-100/40 py-3 mt-1 px-4 text-white placeholder-gray-50 border border-blue-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <textarea
                            rows={4}
                            {...register('message')}
                            placeholder='Message'
                            className="w-full bg-blue-100/40 py-3 mt-1 px-4 text-white placeholder-gray-50 border border-blue-300 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative z-50 w-full py-2 px-4 rounded-full text-primary font-bold
                        bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300
                        backdrop-blur-md border border-white/10
                        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                        ring-1 ring-inset ring-gray-300/10
                        transition duration-200 ease-in-out
                        overflow-hidden
                        hover:scale-105
                        disabled:opacity-50
                        `}
                    >
                        {/* Shine Overlay */}
                        <span
                            className="pointer-events-none absolute top-0 left-0 w-full h-1/3
      bg-gradient-to-b from-white/40 to-transparent
      rounded-t-full opacity-60 blur-sm"
                        />

                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    <Image
                        src={'/assets/images/serviceicon.png'}
                        alt={'UAE'}
                        width={900}
                        height={900}
                        className="w-auto h-44 md:h-5/6 absolute -bottom-5 -right-6 brightness-70 object-contain mr-auto"
                    />
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-full-lg shadow-xl text-center w-80">
                        <h3 className="text-lg font-semibold text-green-600">Thank You!</h3>
                        <p className="mt-2 text-gray-700">Your message has been sent.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
