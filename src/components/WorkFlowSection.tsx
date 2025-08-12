import Image from 'next/image'
import React from 'react'

export default function WorkFlowSection() {
    return (
        <div className='p-4 lg:p-16'>
            {/* Title and Desc */}
            <div className="text-left text-gray-800 mb-12">
                <div className="flex items-center">
                    <h2 className="text-4xl font-bold mb-4">Where Every Project Tells a <span className="text-primary">Story of Innovation</span></h2>
                    <Image src={'/assets/images/icons/cuate.png'} width={900} height={900} alt="" className="w-20 h-20 -mt-12 object-contain ml-4" />
                </div>
                <p className="text-lg text-gray-500 font-600">
                    We design bespoke digital solutions that combine creativity, technology, and strategy—every project reflecting our commitment to innovation, creating tangible impact and useful user experiences on a variety of industries and platforms.        </p>
            </div>


            <div className='flex flex-col md:flex-row items-center justify-around'>
                {[1, 2, 3, 4, 5]?.map((data, index) => (
                    <div key={index} className={`rounded-full w-44 h-44 relative flex flex-col justify-center items-center border-[1.5px] border-dashed border-gray-500 bg-white ${index % 2 != 0 ? "mt-4 md:mt-16" : "mt-4 md:mb-16"}`}>
                        <Image src={'/assets/images/key3.png'} width={900} height={900} alt="" className="w-20 h-20  object-contain" />
                        <h4 className='font-semibold'>Research</h4>
                        <span className={`block w-44 h-[1.5px] border-t-[1.5px] border-dashed absolute -right-3/5   ${(index % 2) !== 0 ? "hidden md:block rotate-[-20deg]" : "hidden md:block rotate-20 top-2/3"} ${index === 4 && "hidden"} z-[-10]`} />
                        <span className={`block w-44 h-[1.5px] border-t-[1.5px] border-dashed absolute bottom-0  ${(index % 2) !== 0 ? "block md:hidden rotate-[90deg]" : "block md:hidden rotate-90 "} ${index === 4 && "hidden"} z-[-10]`} />

                    </div>
                ))}
            </div>
        </div >
    )
}
