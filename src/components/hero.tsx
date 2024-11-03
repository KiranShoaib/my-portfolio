import Image from "next/image";
import profile from "../../public/profile.png";
import Button from "./button";

function Hero(){
    return(
        <section className="lg:px-32 md:px-4 h-auto min-h-svh flex flex-col md:flex-row text-center justify-center items-center md:text-start" style={{backgroundImage: "url('bg.png')"}}>
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#d58952] shadow-2xl shadow-[#d58952]">
                <Image src={profile} alt="Profile Picture" objectFit="cover" width={300} height={300}/>
            </div>
            <div className="sm:ml-12 md:ml-20 md:w-1/3">
                <h1 className="text-white text-3xl md:text-7xl uppercase md:block sm:pt-11"> FRONTEND DEVELOPER</h1>
                <h2 className="text-[#d58952] text-2xl mt-3 md:text-3xl"> Hi! I&#39;m <span className="text-3xl md:text-4xl">Kiran</span></h2> 
                <p className="text-white text-center md:text-start mt-2 mb-4">
                    As a passionate frontend developer, I specialize in building responsive, user-friendly web applications with a focus on clean, efficient code. With a keen eye for design and a strong understanding of modern web technologies like HTML, CSS, JavaScript, and frameworks such as React, Next.js and Tailwind CSS, I strive to create seamless digital experiences that prioritize both functionality and aesthetics. My goal is to bring creative ideas to life through innovative web solutions, ensuring that each project is not only visually appealing but also highly performant.
                </p>
                <div className="-translate-y-6">
                    <Button text="View Projects"/>
                </div>
            </div>

        </section>
    )
}

export default Hero