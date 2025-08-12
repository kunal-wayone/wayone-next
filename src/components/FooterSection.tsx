import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';

export default function FooterSection() {
    return (
        <footer className="relative w-full bg-primary text-white py-16 px-10">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between gap-10 lg:w-4/5">
                {/* Logo & Description */}
                <div className="md:w-1/2">
                    <Image
                        src="/assets/images/footerlogo.png"
                        width={200}
                        height={60}
                        className="w-40 h-14 object-contain mb-4"
                        alt="Wayone IT Solution"
                    />
                    <p className="text-sm text-gray-200 leading-relaxed">
                        We provide reliable IT services including Website Development, App Development,
                        software solutions with tech support and all Digital Marketing services.
                        Helping businesses grow with smart and simple technology.
                        Trusted by clients across industries for quality and commitment.
                    </p>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm text-gray-100">
                        <li><a href="#">Website Development</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Software Solutions</a></li>
                        <li><a href="#">Technical Support</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-100">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

            </div>

            <div className='flex items-center justify-start gap-4 w-44 mt-8 mb-10'>
                <p className='font-semibold'>Follow Us</p>
                <Link href={''}><IoLogoFacebook size={24} /></Link>
                <Link href={''}><IoLogoInstagram size={24} /></Link>
            </div>
            <hr className='my-4 w-4/5' />
            {/* Contact Info */}
            <div className='md:w-2/5'>
                <div className="space-y-2 flex itece justify-between text-sm text-gray-100">

                    <p className='flex items-center gap-2'><IoMailOutline /> contact@wayoneit.com</p>
                    <p className='flex items-center gap-2'><IoCallOutline /> +1 234 567 890</p>
                </div>
                <p className='flex items-center gap-2'><IoLocationOutline /> 123 Wayone Street, Tech City, Country</p>
            </div>


            {/* Bottom Line */}
            <div className=" mt-4 text-sm text-gray-400 text-center hidden">
                © {new Date().getFullYear()} Wayone IT Solutions. All rights reserved.
            </div>
            {/* Bottom Logo or Decoration */}
            <Image
                src="/assets/images/namelogo.svg"
                width={100}
                height={100}
                className="absolute right-0 bottom-0 w-52 h-auto object-contain opacity-50 md:opacity-80 pointer-events-none"
                alt="Wayone IT Name Logo"
            />
        </footer>
    );
}
