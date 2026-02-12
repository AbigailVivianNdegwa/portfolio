"use client";

import {useState} from 'react'
import SliderImages from '@/Components/SliderImages';

export default function About(){
    const [activeTab, setActiveTab] = useState('skills')

    const tabs ={
        skills:[
            {
                title: 'Software Development',
                description: 'Application development, networking, database management, machine learning and artificial intelligence'
            },
            {
                title: 'UI/UX', 
                description: 'Designing Web App interfaces'
            },
            {
                title: 'SEO Optimization',
                description: "Improving your website's quality and quantity of traffic from search engines.",
            },
            {
                title: 'Cloud',
                description: 'Cloud Practitioner roles',
            },
            {
                title: 'Photography',
                description: 'Basic photography, videography and sound roles',
            }     
        ],
        experience:[
            {
                period: 'October 2025 - current',
                role: 'IT Support at Anti-Counterfeit Authority',
            },
            {
                period: 'May 2025 - August 2025',
                role: 'IT Support Attachee at Anti-Counterfeit Authority',
            },
            {
                period: 'May 2024 - August 2024',
                role: 'IT Support at Water Resources Authority - Laikipia Region',
            },
            {
                period: 'May 2023 - August 2023',
                role: 'Social media manager at Daja Enterprices',
            },
            {
                period: 'June 2022 - August 2022',
                role: 'Sales Representative at Daja Enterprices',
            },
        ],
        education:[
            {
                period: 'September 2021 - November 2025',
                role: 'Bachelor of Science in Software Development - First class honors',
            },
            {
                period: 'September 2024 - December 2024',
                role: 'AWS Re/Start Program',
            },
            {
                period: 'January 2017 - April 2021',
                role: 'Kenya Certificate of Secondary Education',
            },
             {
                period: 'January 2007 - November 2016',
                role: 'Kenya Certificate of Primary Education',
            },
        ],
        volunteer: [
            {
                period: 'ongoing',
                role: 'Community Lead, Ajira AWS Re/Start Community',
            },
            {
                period: 'ongoing',
                role: 'Co-founder Be Audacious',
            },
            
        ],
        events:[
            {
                period: 'November 2025',
                role: 'Africa DevOps Summit 2.0 - Volunteer',
            },
            {
                period: 'October 2025',
                role: 'EmpowerHer Machakos edition - Mentor/Panelist',
            },
            {
                period: 'June 2025',
                role: 'AWS Community Day 2025 - Volunteer',
            },
            {
                period: 'October 2024',
                role: 'Africa DevOps Summit - Volunteer ',
            },
            {
                period: 'May 2024 - October 2024',
                role: 'AWS Student Community Day 2024 - Organizer',
            },
             {
                period: 'May 2024',
                role: 'RubyConf Africa - Attendee',
            },
            {
                period: 'April 2024',
                role: 'AWS Community Day - Volunteer',
            },    
        ],    
    }
    return(
        <section
            className="flex flex-col justify-center bg-[var(--snd-bg-color)] px-2 md:px-5 py-5"
            id="about"
        >
            <h2 className=" pt-5 text-4xl md:text-5xl font-bold text-center text-[var(--text-clor)] mb-8">
                 ABOUT ME
             </h2>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 bg-[var(--snd-bg-color)] pt-0 px-5 md:px-20 py-20">
                 <div className="w-full md:place-items-center lg:w-[35%] flex-shrink-0 pt-2 md:pt-10 pr-0">
                <img
                    src="/Images/Image2.jpg"
                    alt="about image"
                    className="w-full max-w-[400px] rounded-[15px]"
                />
            </div>
            <div className=" pt-5 flex-1 w-full lg:w-[60%]">
                <p className="text-base md:text-base font-bold text-[var(--text-color)] my-6 leading-relaxed">
                    Hi, I'm Abigail Vivian Muthoni Ndegwa, a passionate student software
                    developer, cloud enthusiast, co-founder of the Be Audacious tech
                    community and community lead at Ajira AWS Re/Start Community. 
                    I specialize in full-stack development, cloud computing, SEO
                    optimization, and UI/UX design, with a strong interest in leveraging AWS
                    technologies to build scalable, secure, and efficient applications. I've
                    had the privilege of organizing and volunteering at events like AWS
                    Student Community Day, AWS User-group Community Day, and the Africa
                    DevOps Summit, where I've helped foster collaboration and innovation. In
                    addition to my technical skills, I'm dedicated to mentoring and inspiring
                    others in student tech communities. Feel free to explore my portfolio, and
                    don't hesitate to reach out if you'd like to collaborate or learn more
                    about my work!
                </p>
                <div className="flex flex-wrap gap-8 my-8 mb-12">
                    {['skills', 'experience', 'education', 'events', 'volunteer'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative text-xl md:text-xl font-bold  cursor-pointer transition ${
                                activeTab === tab
                                ? 'text-[var(--text-color)]'
                                : 'text-[var(--text-color)]'
                            }`}
                            >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            <span
                                className={`absolute bottom-[-8px] left-0 h-[3px] bg-[var(--main-color)] transition-all duration-500 ${
                                activeTab === tab ? 'w-1/2' : 'w-0'
                                }`}
                            ></span>
                        </button>
                     ))}
                 </div>

                <div className="mt-8">
                    {tabs[activeTab] && (
                        <ul className="space-y-4">
                        {tabs[activeTab].map((item, idx) => (
                            <li key={idx} className="text-base font-mono md:text-base">
                            {item.title ? (
                                <>
                                <span className="text-[var(--main-color)] font-bold">
                                    {item.title}
                                </span>
                                <br />
                                <span className="text-[var(--text-color)]">
                                    {item.description}
                                </span>
                                </>
                            ) : (
                                <>
                                <span className="text-[var(--main-color)] font-bold">
                                    {item.period}
                                </span>
                                <br />
                                <span className="text-[var(--text-color)]">
                                    {item.role}
                                </span>
                                </>
                            )}
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>

            </div>
        
        <SliderImages/>
            
            
        </section>
    )
}
