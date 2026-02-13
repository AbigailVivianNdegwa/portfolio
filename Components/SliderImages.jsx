"use client"

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function SliderImages(){
    const slides = [
        {img: "/Images/AWS1.png"},
        {img: "/Images/AWS2.png"},
        {img: "/Images/AWS3.png"},
    ]

    const duplicatedSlides = [...slides, ...slides];

return(
    <div className="w-full overflow-hidden py-10">
        <motion.div 
            className='flex gap-10'
            animate={{
                x: ['0%', '-50%'],
                transition:{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity
                }
            }}
        >
        {duplicatedSlides.map((slide,index)=>{
            return <div key={index} className='flex-shrink-0' style={{width: `${100/slides.length}%`}}>
                <div className='flex items-center justify-center text-6xl'>
                    <Image src={slide.img} width={150} height={100} alt='slider'/>
                </div>
            </div>
        })}

        </motion.div>

    </div>
)


}
