'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        name: 'Creative Commerce',
        type: 'E-commerce',
        desc: 'A modern e-commerce platform built with performance in mind.',
        image: '/assets/images/projects/pr1.png',
        link: 'https://pr.example.com',
        bgColor: 'bg-blue-100',
    },
    {
        id: 2,
        name: 'Finance Tracker',
        type: 'Mobile App',
        desc: 'Track your daily expenses and income on the go.',
        image: '/assets/images/projects/pr5.png',
        link: 'https://finance.example.com',
        bgColor: 'bg-gray-100',
    },
    {
        id: 3,
        name: 'Design Portfolio',
        type: 'Portfolio',
        desc: 'A minimalist portfolio to showcase design skills.',
        image: '/assets/images/projects/pr3.png',
        link: 'https://portfolio.example.com',
        bgColor: 'bg-yellow-100',
    },
    {
        id: 4,
        name: 'Task Manager',
        type: 'Web App',
        desc: 'Collaborative task management tool for teams.',
        image: '/assets/images/projects/pr4.png',
        link: 'https://tasks.example.com',
        bgColor: 'bg-blue-100',
    },
    {
        id: 5,
        name: 'ShopNow',
        type: 'E-commerce',
        desc: 'Sleek e-commerce experience for fashion items.',
        image: '/assets/images/projects/pr6.png',
        link: 'https://shopnow.example.com',
        bgColor: 'bg-gray-100',
    },
    {
        id: 6,
        name: 'ShopNow',
        type: 'E-commerce',
        desc: 'Sleek e-commerce experience for fashion items.',
        image: '/assets/images/projects/pr2.png',
        link: 'https://shopnow.example.com',
        bgColor: 'bg-yellow-100',
    },
]


const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Portfolio']

const MAX_VISIBLE = 10

export default function ProjectsGridSection() {
    const [activeCategory, setActiveCategory] = useState('All')

    const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE)
    const router = useRouter()

    const handleLoadMore = () => {
        if (visibleCount + MAX_VISIBLE >= projects.length) {
            router.push('#')
        } else {
            setVisibleCount(prev => prev + MAX_VISIBLE)
        }
    }
    // Filtered projects based on active tab
    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter(p => p.type === activeCategory)

    return (
        <div className="w-full py-12 mx-auto overflow-hidden">
            {/* Header */}
            <div className="text-center mx-auto text-gray-800 mb-12">
                <div className="flex items-start md:items-center gap-4 relative justify-center">
                    <h2 className="text-3xl md:text-4xl relative font-bold mx-auto mb-2">
                        Where Every Project Tells a{' '}
                        <span className="text-secondary">Story of Innovation</span>
                        <Image
                            src="/assets/images/icons/cuate.png"
                            width={900}
                            height={900}
                            alt="Innovation Icon"
                            className="w-16 h-16 absolute -left-24 md:w-20 md:h-20 object-contain -mt-4 md:-mt-12"
                        />
                        <Image
                            src="/assets/images/icons/cuate.png"
                            width={900}
                            height={900}
                            alt="Innovation Icon"
                            className="w-16 h-16 absolute -right-24 md:w-20 md:h-20 object-contain -mt-4 md:-mt-12"
                        />
                    </h2>
                </div>
                <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto mt-2">
                    We design bespoke digital solutions that combine creativity, technology, and
                    strategy—every project reflecting our commitment to innovation, creating tangible
                    impact and useful user experiences across various industries.
                </p>
            </div>


            <div className="flex flex-wrap md:flex-nowrap items-center justify-center  gap-4 mb-8 overflow-x-auto md:w-full px-10">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-3 rounded-full w-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                            ? 'bg-blue-600 text-white shadow'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 p-4 ld:p-0 gap-6">
                {filteredProjects?.map((project, index) => {
                    // Pattern: [3,2], [2,3]
                    const mod = index % 4
                    let colSpan = 2
                    if (mod === 0 || mod === 3) colSpan = 3

                    return (
                        <div
                            key={project.id}
                            className={`${colSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1 md:col-span-3'} relative rounded-3xl flex flex-col md:flex-row justify-between items-center py-6 px-4 overflow-hidden shadow-md group ${project.bgColor}`}
                        >
                            {/* External Link Icon */}
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-3 right-3 z-10 bg-white text-blue-600 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
                            >
                                <FiExternalLink size={20} />
                            </Link>

                            <Image
                                src={project.image}
                                width={500}
                                height={300}
                                alt={project.name}
                                className=" h-56 object-contain"
                            />
                            <div className="p-4">
                                <p className="text-sm text-blue-600 font-semibold mb-1">{project.type}</p>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
                                <p className="text-sm text-gray-600 line-clamp-4">{project.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* Load More Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md  transition"
                >
                    View More
                </button>
            </div>
        </div>
    )
}
