import React from "react";
import ProspectCard from "./common/ProjectCard";
import Image from "next/image";

const cardsData = [
    {
        title: "Web Development",
        logo: "/assets/images/mockup.png",
        image2: '/assets/images/app.png',
        description:
            "End-to-end web, app, and enterprise technology solutions tailored to your business needs.",
        link: "/frontend",
        points: ["Ui & Ux Developemtn", "Web Developmetn", "Ui & Ux Developemtn", "Web Developmetn"],
        rtl: false
    },
    {
        title: "Web Development",
        logo: "/assets/images/mockup.png",
        image2: '/assets/images/app.png',
        description:
            "End-to-end web, app, and enterprise technology solutions tailored to your business needs.",
        link: "/frontend",
        points: ["Ui & Ux Developemtn", "Web Developmetn", "Ui & Ux Developemtn", "Web Developmetn"],
        rtl: true
    },
]

export default function ProjectSection() {
    return (
        <div className="min-h-screen m-auto py-20 p-4 lg:p-16 overflow-hidden">
            {/* Title and Desc */}
            <div className="text-left text-gray-800 mb-12">
                <div className="flex items-center">
                    <h2 className="text-4xl font-bold mb-4">Where Every Project Tells a <span className="text-primary">Story of Innovation</span></h2>
                    <Image src={'/assets/images/icons/cuate.png'} width={900} height={900} alt="" className="w-20 h-20 -mt-12 object-contain ml-4" />
                </div>
                <p className="text-lg text-gray-500 font-600">
                    We design bespoke digital solutions that combine creativity, technology, and strategy—every project reflecting our commitment to innovation, creating tangible impact and useful user experiences on a variety of industries and platforms.        </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 mx-auto">
                {cardsData.map((card, index) => (
                    <ProspectCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
}
