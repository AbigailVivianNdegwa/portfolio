"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const router = useRouter();



    return (
        <div id="navbar" className="flex py-3 justify-between items-center px-6 bg-black shadow-md">
           <Image 
                src="/Images/Logo.png"
                width={300}
                height={300}
                alt="Logo Image"
            />
            <ul className="flex gap-8 text-m">
                <li className="cursor-pointer hover:text-blue-500">Home</li>
                <li className="cursor-pointer hover:text-blue-500">About</li>
                <li className="cursor-pointer hover:text-blue-500">Services</li>
                <li className="cursor-pointer hover:text-blue-500">Portfolio</li>
                <li className="cursor-pointer hover:text-blue-500">Blogs</li>
                <li className="cursor-pointer hover:text-blue-500">Contact</li>
            </ul>
            
        </div>
    );
};

export default Navbar;