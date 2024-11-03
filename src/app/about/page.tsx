import Image from "next/image";
import profile from "../../../public/profile.png";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import javascript from "../../../public/javascript.png";
import typescript from "../../../public/typescript.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.png";

function About(){
    return(
        <section className="lg:px-32 md:px-4 h-auto min-h-svh flex flex-col md:flex-row text-center justify-center items-center md:text-start" style={{backgroundImage: "url('bg.png')"}}>
            <div className="m-4 sm:ml-12 md:ml-20 md:w-1/3">
                <h1 className="text-white text-3xl md:text-6xl sm:my-6 sm:pt-11"> About Me</h1>
                <h2 className="text-[#d58952] my-4 text-3xl">Get to know me!</h2> 
                <p className="text-white sm:mt-5">
                As a frontend developer, I thrive on turning complex ideas into beautifully crafted web experiences. My approach combines technical skill in HTML, CSS, JavaScript, TypeScript and frameworks like React, Next.js, Tailwand CSS and with a creative vision that prioritizes usability and design. I believe in creating interfaces that are not just functional but memorable—ensuring users have a seamless, enjoyable journey every time. From responsive layouts to interactive elements, I&#39;m driven to make the web a more captivating place, one project at a time.
                </p>  
              
            </div>
            <div className="mx-auto">
                <Image src={profile} alt="Profile Picture" className="w-[87%] mx-6 md:mx-1"/>
                <div>
                  <ul className="flex space-x-6 mt-5">
                    <li><Image src={html} alt="html logo" className="w-[30px] h-[30px]"/></li>
                    <li><Image src={css} alt="css logo" className="w-[30px] h-[30px]"/></li>
                    <li><Image src={javascript} alt="javascript logo" className="w-[30px] h-[30px]"/></li>
                    <li><Image src={typescript} alt="typescript logo" className="w-[30px] h-[30px]"/></li>
                    <li><Image src={react} alt="react logo" className="w-[30px] h-[30px] bg-white"/></li>
                    <li><Image src={nextjs} alt="nextjs logo" className="w-[30px] h-[30px] bg-white"/></li>
                  </ul>
                </div>
            </div> 
        </section>
    )
}

export default About