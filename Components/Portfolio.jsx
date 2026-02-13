"use client";

import Image from "next/image";
import {useState} from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Portfolio(){
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const works = [
        {
            image: '/Images/Placeholder1.png',
            title: 'Kejani Rental Management System',
            description:'Kejani was created to solve the problems apartment owners and tenants face.',
        },
        {
            image: '/Images/Placeholder2.png',
            title: 'SmartThreads Textile Application',
            description:'SmartThreads is a website created for a texile business',
        },
        {
            image: '/Images/Placeholder3.png',
            title: 'Procare Patient Management System',
            description:'Procare is an application designed to automate the patient scheduling process in the hospital',
        },
        
    ]

    return (
        <section
            className="bg-[var(--snd-bg-color)] py-16 px-5 md:px-20"
            id="portfolio"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text-color)]">
                    MY WORK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 py-15">
                    {works.map((work, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-[10px] overflow-hidden group cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={work.image || "/Images/Placeholder.jpg"}
                                alt={work.title}
                                className=" w-full h-64 object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-110"
                            />

                            <div 
                                id="overlay-div" 
                               className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-[var(--main-color)] rounded-[10px] overflow-hidden flex flex-col items-center justify-center p-10 text-center transition-all duration-500 translate-y-full group-hover:translate-y-0"

                            >
                                <h3 className="font-bold text-xl text-[var(--text-color)] mb-5">
                                     {work.title}
                                </h3>
                                <p className="text-sm text-[var(--text-color)] mb-5">
                                    {work.description}
                                </p>
                                <a
                                    href="#"
                                    className="w-15 h-15 bg-[var(--text-color)] rounded-full flex items-center justify-center text-[var(--main-color)] text-xl"
                                >
                                     <FaArrowUpRightFromSquare />
                                </a>
                            
                            </div>
                            
                        </div>
                    ))}

                </div>

                <a
                    href="#"
                    className="block mx-auto w-fit border border-[var(--main-color)] px-12 py-3 rounded-[6px] text-[var(--text-color)] transition-all duration-500 hover:bg-[var(--main-color)] hover:cursor-pointer font-bold"
                >
                    SEE MORE
                 </a>

            </div>
            
        </section>
    )
}

