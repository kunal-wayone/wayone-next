"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Liquid slide animation
const liquidSlide: any = (direction = "left") => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -100 : 100,
        scale: 0.95,
        skewX: direction === "left" ? -5 : 5,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        skewX: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.1,
        },
    },
});

const ProspectCard = ({ title, logo, image2, description, points, rtl }: any) => {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`w-full flex flex-col ${rtl ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch justify-center gap-8 px-4 pt-20`}
        >
            {/* Left Card */}
            <motion.div
                variants={liquidSlide(rtl ? "right" : "left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex-[0_0_30%] bg-gradient-to-br from-[#215BDB] via-[#215BDB] to-[#215BDB] border border-white/10 backdrop-blur-md shadow-lg p-6 rounded-[3rem] hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center"
                style={{ minHeight: "500px" }}
            >
                <Image
                    src={logo}
                    alt={title}
                    width={1080}
                    height={760}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 object-contain w-3/4"
                />
                <span className="w-36 h-36 rounded-full bg-blue-950 block mb-10 mt-10 mx-auto shadow-[20px_20px_50px_#143f9e]" />

                <div className="flex flex-col items-center gap-3 mb-6 w-full max-w-xl px-8">
                    {points?.slice(0, 4).map((point: any, index: any) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="hidden text-sm lg:flex justify-center items-center text-white text-center rounded-full py-3 px-5 bg-[#215cdb8a] border border-[#ffffff80] shadow-[inset_4px_4px_8px_#ffffff20,inset_-4px_-4px_8px_#ffffff10] w-full"
                        >
                            {point}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
                variants={liquidSlide(rtl ? "left" : "right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex-[0_0_65%] flex items-center justify-center gap-4 bg-gradient-to-br from-[#215BDB] via-[#215BDB] to-[#215BDB] backdrop-blur-md rounded-[3.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full"
                style={{ minHeight: "500px" }}
            >
                <div className="w-2/6 h-full relative flex flex-col items-center">
                    <Image
                        src={image2}
                        alt={title}
                        width={1080}
                        height={760}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 object-contain w-2/5"
                    />
                    <span className="w-36 h-36 rounded-full bg-blue-950 block mb-10 mt-16 mx-auto shadow-[20px_20px_50px_#143f9e]" />

                    <div className="flex flex-col items-center px-6 gap-3 mb-6 w-full max-w-xl">
                        {points?.slice(0, 4).map((point: any, index: any) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="hidden text-sm lg:flex justify-center items-center text-white text-center rounded-full py-3 px-0 bg-[#215cdb8a] border border-[#ffffff80] shadow-[inset_4px_4px_8px_#ffffff20,inset_-4px_-4px_8px_#ffffff10] w-full"
                            >
                                {point}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div
                    className="w-4/6 py-16 h-full px-10 bg-white rounded-[3rem] flex flex-col justify-center"
                    style={{ minHeight: "500px" }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
                        <p className="w-full md:w-1/2 text-gray-600 text-wrap ">
                            {/* {points?.length > 4 ? points.slice(4).join(" ") : ""} */}
                            {description}
                        </p>
                        <Image
                            src="/assets/images/mockup.png"
                            width={900}
                            height={900}
                            alt="Unifi Car Mockup"
                            className="w-full md:w-1/2 object-contain rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProspectCard;
