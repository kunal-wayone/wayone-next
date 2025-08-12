import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ReachOutTo() {
    return (
        <section id="home" className="relative flex-col items-start p-4  my-10 rounded-[3rem] w-[98%] mx-auto overflow-hidden">
            {/* === Background SVG === */}
            <Image
                src="/assets/images/contactfooter.png"
                width={1600}
                height={900}
                alt="Hero Background"
                className="absolute inset-0 object-cover md:object-contain w-full mx-auto h-full md:h-auto -z-10"
            />

            <Image
                src="/assets/images/taj.png"
                width={1600}
                height={900}
                alt="Hero Background"
                className="absolute hidden md:block left-20 top-10 object-contain w-44 mx-auto h-44 -z-10"
            />

            <Image
                src="/assets/images/group2.png"
                width={1600}
                height={900}
                alt="Hero Background"
                className="absolute hidden md:block right-20 top-5 object-cover w-20 mx-auto h-44 -z-10"
            />

            <div className='text-center w-full mb-8'>
                <h4 className='text-lg text-white font-semibold mb-2'>Reach Out To Us</h4>
                <h3 className='text-4xl text-white font-bold w-full lg:w-1/2 mx-auto mb-2'>We’re Ready to Listen – Let’s Start the Conversation</h3>
                <p className='text-gray-100 w-full lg:w-1/2 mx-auto font-semibold'>Share your thoughts and challenges, and let’s craft a plan for success together.</p>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 p-4'>
                {[{ title: 'Email Support', img: '/assets/images/icons/email.png', type: 'email', desc: "info@wayone.ae" },
                { title: 'Visit Our Office', img: '/assets/images/icons/location.png', type: 'address', desc: "Al Moosa Tower 18th floor Office no #1804, Sheikh Zayed Road, Dubai, U.A.E" },
                { title: 'Mobile Support', img: '/assets/images/icons/call.png', type: 'call', desc: "+971 0556 4768 47" }]?.map((data, index) => (
                    <div key={index} className='bg-white w-full rounded-3xl flex items-center justify-start gap-4 p-4 px-6 h-full '>
                        <Image
                            src={data?.img}
                            width={1600}
                            height={900}
                            alt={data?.title}
                            className=" object-contain w-12  h-10"
                        />
                        <div>
                            <h3 className='text-secondary text-xl font-semibold'>{data?.title}</h3>
                            <Link className='text-sm font-semibold text-gray-800' href={data?.type === "email" ? 'mailto:info@wayone.ae' : data?.type === "call" ? 'callto:+9710556476847' : ""}>{data?.desc}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}
