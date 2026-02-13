"use client";

import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

export default function Contact(){

    return(
        <section
            className="pt-20 pb-10"
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-20">
               <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text-color)]">
                    CONTACT ME
                </h2>
                <div className="pt-20 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="space-y-6">
                            <p className=" flex gap-5 text-lg md:text-xl font-bold text-[var(--text-color)]">
                               <FaPaperPlane />
                                ndegwaviv254@gmail.com
                            </p>
                            <p className="flex gap-5 text-lg md:text-xl font-bold text-[var(--text-color)]">
                                <FaPhone />
                                0745508841
                            </p>
                        </div>
                        <div className=" pt-10 flex-1">
                            <form
                                className="space-y-4 mb-8"
                                id="contact-form"
                            >
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full border-0 outline-none bg-[var(--snd-bg-color)] px-4 py-4 text-[var(--text-color)] text-lg rounded-[6px]"
                                /> 
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full border-0 outline-none bg-[var(--snd-bg-color)] px-4 py-4 text-[var(--text-color)] text-lg rounded-[6px]"
                                />
                                <textarea
                                    name="Message"
                                    rows="6"
                                    placeholder="Add your message"
                                    className="w-full border-0 outline-none bg-[var(--snd-bg-color)] px-4 py-4 text-[var(--text-color)] text-lg rounded-[6px] resize-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-4 bg-[var(--main-color)] rounded-full shadow-lg font-semibold text-base md:text-xl text-[var(--bg-color)] tracking-wide hover:shadow-none transition"
                                >
                                    SUBMIT
                                </button>
                            </form>
                            <div className="flex flex-wrap gap-6 my-12">
                                <a
                                    href="www.linkedin.com/in/abigail-vivian-muthoni-ndegwa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center w-16 h-16 border-2 border-[var(--main-color)] rounded-full text-2xl text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--snd-bg-color)] hover:shadow-lg transition"
                                    style={{ boxShadow: '0 0 0 var(--main-color)' }}
                                >
                                     <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/AbigailVivianNdegwa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center w-16 h-16 border-2 border-[var(--main-color)] rounded-full text-2xl text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--snd-bg-color)] transition" 
                                >
                                    <FaGithub />

                                </a>
                                <a
                                    href="https://x.com/VivianNdegwa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center w-16 h-16 border-2 border-[var(--main-color)] rounded-full text-2xl text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--snd-bg-color)] transition"
                                >
                                    <FaXTwitter />

                                </a>
                                <a
                                    href="https://discord.com/channels/@me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center w-16 h-16 border-2 border-[var(--main-color)] rounded-full text-2xl text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--snd-bg-color)] transition"
                                >
                                    <FaDiscord />

                                </a>
                                <a
                                    href="https://dev.to/ndegwa_vivian_3593fac3daa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center w-16 h-16 border-2 border-[var(--main-color)] rounded-full text-2xl text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--snd-bg-color)] transition"
                                >
                                     <FaDev />

                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}