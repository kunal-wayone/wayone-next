'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

// Sample categories
const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Portfolio']

// Sample project data
const projects = [
    {
        id: 1,
        name: 'Creative Commerce',
        type: 'E-commerce',
        desc: 'A modern e-commerce platform built with performance in mind.',
        image: '/assets/images/projects/pr1.png',
        link: 'https://pr.example.com',
    },
    {
        id: 2,
        name: 'Finance Tracker',
        type: 'Mobile App',
        desc: 'Track your daily expenses and income on the go.',
        image: '/assets/images/projects/pr5.png',
        link: 'https://finance.example.com',
    },
    {
        id: 3,
        name: 'Design Portfolio',
        type: 'Portfolio',
        desc: 'A minimalist portfolio to showcase design skills.',
        image: '/assets/images/projects/pr3.png',
        link: 'https://portfolio.example.com',
    },
    {
        id: 4,
        name: 'Task Manager',
        type: 'Web App',
        desc: 'Collaborative task management tool for teams.',
        image: '/assets/images/projects/pr4.png',
        link: 'https://tasks.example.com',
    },
    {
        id: 5,
        name: 'ShopNow',
        type: 'E-commerce',
        desc: 'Sleek e-commerce experience for fashion items.',
        image: '/assets/images/projects/pr6.png',
        link: 'https://shopnow.example.com',
    },
    {
        id: 6,
        name: 'ShopNow',
        type: 'E-commerce',
        desc: 'Sleek e-commerce experience for fashion items.',
        image: '/assets/images/projects/pr2.png',
        link: 'https://shopnow.example.com',
    },

]

export default function ProjectsCards() {
    const [activeCategory, setActiveCategory] = useState('All')

    // Filtered projects based on active tab
    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter(p => p.type === activeCategory)

    return (
        <div className="w-full px-4 py-12 max-w-7xl mx-auto">
            {/* Title and Desc */}
            <div className="text-left text-gray-800 mb-12">
                <div className="flex items-start md:items-center gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Where Every Project Tells a{' '}
                        <span className="text-primary">Story of Innovation</span>
                    </h2>
                    <Image
                        src={'/assets/images/icons/cuate.png'}
                        width={900}
                        height={900}
                        alt="Innovation Icon"
                        className="w-16 h-16 md:w-20 md:h-20 object-contain -mt-4 md:-mt-12"
                    />
                </div>
                <p className="text-lg text-gray-600 font-medium max-w-3xl mt-2">
                    We design bespoke digital solutions that combine creativity,
                    technology, and strategy—every project reflecting our commitment to
                    innovation, creating tangible impact and useful user experiences on a
                    variety of industries and platforms.
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center  gap-4 mb-8 overflow-x-auto md:w-full">
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

            {/* Project Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className="relative rounded-3xl overflow-hidden shadow-md group bg-white"
                    >
                        {/* Live View Icon */}
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
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-blue-600 font-semibold mb-1">
                                {project.type}
                            </p>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {project.name}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-4">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
