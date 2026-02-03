"use client";
/*import React from "react";*/
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <div id="navbar" className="flex items-center justify-between  px-6 py-3 bg-black shadow-md text-white">
          <div className="flex items-center"> 
            <Image 
                src="/Images/Logo.png"
                width={140}
                height={140}
                alt="Logo Image"
            />
          </div>

{/* Desktop Menu  */}
            <ul className="flex items-center gap-15 text-m">
                <li className="cursor-pointer hover:text-blue-500">Home</li>
                <li className="cursor-pointer hover:text-blue-500">About</li>
                <li className="cursor-pointer hover:text-blue-500">Services</li>
                <li className="cursor-pointer hover:text-blue-500">Portfolio</li>
                <li className="cursor-pointer hover:text-blue-500">Blogs</li>
                <li className="cursor-pointer hover:text-blue-500">Contact</li>
            </ul>

{/* Mobile Menu Button  */}

            <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
            >
                <FaBars />
                {/* Add the button logo */}
            </button>
{/* Mobile Menu  */}
            {open && (
                <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden">
                    <li className="cursor-pointer hover:text-blue-500">Home</li>
                    <li className="cursor-pointer hover:text-blue-500">About</li>
                    <li className="cursor-pointer hover:text-blue-500">Services</li>
                    <li className="cursor-pointer hover:text-blue-500">Portfolio</li>
                    <li className="cursor-pointer hover:text-blue-500">Blogs</li>
                    <li className="cursor-pointer hover:text-blue-500">Contact</li>
                    </ul>
            )} 
            
        </div>
    );
};

export default Navbar;