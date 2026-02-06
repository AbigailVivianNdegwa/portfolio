import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

export default function Home(){
    return (
        <section 
            className= "flex justify-between items-center gap-8 pt-32 md:pt-20"
            id="home"
        >
            <div className="text-2xl md:text-4xl font-bold max-w-full flex-1 pl-15">
                <h3 className="text-xl md:text-3xl text-[var(--text-color)] ">
                    Hi, My Name is
                </h3>
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-color)] leading-tight">
                    Abigail Vivian,
                </h1>
                <h3 className="text-2xl md:text-3xl text-[var(--text-color)] mt-2">
                    And I'm a{' '}
                     <span className="text-[var(--main-color)]">Software Developer</span>
                </h3>
                <p className="font-bold text-lg md:text-xl mt-4 text-[var(--text-color)]">
                    <b>Welcome to my Portfolio!</b>
                </p>
                <div className="mt-6 text-base md:text-l/7">
                    <p className="text-[var(--text-color)]">
                        Here, you'll find a showcase of my projects, skills, and passion for
                        creating effective solutions. From web applications, SEO Optimization
                        and cloud-based architectures, my work reflects my commitment to
                        innovating, quality, and user-centric design. Whether you're here to
                        explore my technical expertise or collaborate on a new project, I'm
                        excited to share my journey and accomplishments with you. Dive in to
                        see how I can bring value to your next idea!
                    </p>
                </div>
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
                
                <a
                    href="/Images/Abigail Ndegwa - CV.pdf"
                    download
                    className="inline-block px-7 py-4 bg-[var(--main-color)] rounded-full shadow-lg font-semibold text-base md:text-xl text-[var(--bg-color)] tracking-wide hover:shadow-none transition"
                > 
                    Download CV

                </a>
            
               
            </div>
            <div className="hidden lg:flex flex-1 justify-end pr-10">
                <img
                src="/Images/Image1.jpg"
                alt="home-img"
                className="w-[30vw] rounded-full m-8 object-cover animate-bounce"
                style={{
                    animation: 'floatImage 4s ease-in-out infinite',
                }}
                />
            </div>
           

        </section>
    )
}