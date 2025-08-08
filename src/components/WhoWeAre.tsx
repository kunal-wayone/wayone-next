
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowForward } from "react-icons/io5";


export default function WhoWeAre({
    title,
    colorTitle,
    subtitle,
    description,
    buttonText,
    onButtonClick,
    imageSrc,
    reverse = false,
    containerClass = '',
    textClass = '',
    imageClass = ''
}: any) {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-12 ${containerClass}`}>
            {/* Text Section */}
            <div className={`flex-1 flex flex-col justify-center ${textClass}`}>
                {subtitle && <h3 className="text-xl md:text-xl text-secondary mb-2">{subtitle}</h3>}
                {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}<br /> <span className='text-primary'>{colorTitle && colorTitle}</span> </h2>}
                {description && <p className="text-base md:text-lg text-gray-700 mb-4">{description}</p>}
                {buttonText && (
                    <Link
                        href={onButtonClick}
                        className="text-primary font-bold flex items-center justifu-center gap-2 ml-2 transition-all duration-300 hover:scale-105 w-fit"
                    >
                        {buttonText}
                        <span className='p-2 rounded-full bg-primary text-white'>
                            <IoArrowForward className='m-auto' />
                        </span>
                    </Link>
                )}
            </div>

            {/* Image Section */}
            {imageSrc && (
                <div className="flex-1 rounded-3xl overflow-hidden shadow">
                    <Image
                        width={900}
                        height={900}
                        src={imageSrc}
                        alt={title || 'Who We Are Image'}
                        className={`w-full h-auto object-fill ${imageClass}`}
                    />
                </div>
            )}
        </div>
    );
}
