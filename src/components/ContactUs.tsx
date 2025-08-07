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
        <div className="min-h-screen px-6 py-10 bg-white text-gray-800 pt-28">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="flex flex-col justify-center space-y-2">
                    <h2 className="text-4xl font-bold text-gray-800">Let’s Build the Future Together! <br /> <span className='text-primary'> Contact Us Today</span></h2>
                    <p className="text-gray-600">
                        Reach out now to discuss how our innovative solutions can accelerate your business growth and transform your digital landscapeReminder for images Portfolio Section 4 line.                     </p>
                    <Image
                        src={'/assets/images/contact.png'}
                        alt="Contact"
                        className=""
                        width={900}
                        height={900}
                    />
                </div>

                {/* Right Column (Form) */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            {...register('name')}
                            placeholder='Enter your name'
                            className="w-full bg-gray-100 py-3 mt-1 px-4  border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder='Enter you email address'
                            className="w-full bg-gray-100 py-3 mt-1 px-4  border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input
                            {...register('phone')}
                            placeholder='Enter your phone number'
                            className="w-full bg-gray-100 py-3 mt-1 px-4  border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <textarea
                            rows={4}
                            {...register('message')}
                            placeholder='Message'
                            className="w-full bg-gray-100 py-3 p-10 mt-1 px-4  border border-gray-300 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full text-white py-2 px-4 rounded-full
                        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
                        bg-opacity-60 brightness-130 hover:scale-102
                        backdrop-blur-md border border-white/10
                        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                        ring-1 ring-inset ring-blue-300/10
                        transition duration-200 ease-in-out disabled:opacity-50
                        overflow-hidden"
                    >
                        {/* Shine Overlay */}
                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/3
                                        bg-gradient-to-b from-white/40 to-transparent
                                        rounded-t-full brightness-120
                                        opacity-60
                                        blur-sm" />

                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

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
