'use client'
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

function Header(){
    const[menuOpen, setMenuOpen] =useState<boolean>(false);



    return(
        <header className="sticky text-[#d58952] p-6 justify-between top-0 w-full z-10 md:flex" style={{backgroundImage: "url('bg.png')"}} >
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">KIRAN</h1>
                <BiMenu 
                size={30} 
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                /> 
            </div>
            <div className={`mr-8 ${menuOpen ? "block" : "hidden"} md:block`}>
                <nav>
                    <ul className="bg-white md:bg-[url('/bg.png')] block md:inline-flex md:space-x-6 mt-3  md:mt-0 cursor-pointer font-semibold">
                        <li className="p-3 md:p-0 text-center">
                            <Link href="/" className="relative inline-block  text-center transition duration-150 ease-in-out group">
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d58952] transition-all duration-150 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li className="p-3 md:p-0 text-center">
                            <Link href="/about" className="relative inline-block  text-center transition duration-150 ease-in-out group">
                                About
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d58952] transition-all duration-150 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li className="p-3 md:p-0 text-center">
                            <Link href="/projects" className="relative inline-block  text-center transition duration-150 ease-in-out group">
                                Projects
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d58952] transition-all duration-150 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li className="p-3 md:p-0 text-center">
                            <Link href="/services" className="relative inline-block  text-center transition duration-150 ease-in-out group">
                                Services
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d58952] transition-all duration-150 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li className="p-3 md:p-0 text-center">
                            <Link href="/contact" className="relative inline-block  text-center transition duration-150 ease-in-out group">
                                Contact
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d58952] transition-all duration-150 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default Header