"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaCropAlt } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";



export default function Services(){
    const services =[
        {
            icon: <FaCode/>,
            title: 'Web design',
            description: 'Design and creation of web sites and web applications',
        },
        {
            icon: <FaCropAlt/>,
            title: 'UI/UX Design',
            description: 'Desging of user friendly interfaces increasing the user experience',
        },
        {
            icon: < FaAppStore/>,
            title: 'App Design',
            description: 'Designing and creation of applications that bring solutions.',
        },
        {
            icon: < FaMagnifyingGlass/>,
            title: 'SEO Optimization',
            description: 'Improving your websites visibility, quality and traffic in search engines',
        },
        {
            icon: <  FaCloud />,
            title: 'Cloud Roles',
            description: 'Coming up with cloud solutions for your organization.',
        },
        {
            icon: <  FaCamera />,
            title: 'Photography',
            description: 'Taking and capturing moments in real-time, advertising and content creation.',
        },
    ]

    return(
        <section 
            className="py-16 px-5 md:px-20"
            id="services"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text-color)] mb-16">
                    MY SERVICES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    
                    {services.map((service, idx) => (
                        
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            className="bg-[var(--snd-bg-color)] p-10 rounded-lg transition-all duration-500 hover:bg-[var(--main-color)] hover:-translate-y-2 hover:cursor-pointer"
                            >
                            {/* ICON */}
                            <div className="text-5xl text-[var(--main-color)] mb-6 transition-colors duration-300 group-hover:text-[var(--text-color)]">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
                                {service.title}
                            </h3>

                            <p className="text-sm font-bold text-[var(--text-color)] mb-5">
                                {service.description}
                            </p>

                            <a
                                href="#"
                                className="text-xs text-[var(--text-color)] font-bold inline-block transition hover:underline"
                            >
                                Learn more
                            </a>
                         </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )

}