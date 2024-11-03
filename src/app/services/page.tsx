import Image from "next/image";
import wnm from "../../../public/wnm.png";
import wb from "../../../public/wb.png";
import e from "../../../public/e.png";

function Services(){
    return(
        <div className="bg-[#3b2930] lg:px-32 md:px-4 h-auto min-h-screen">
            <h1 className="text-white text-3xl text-center sm:text-start sm:px-10 md:px-0 md:text-4xl font-semibold pt-20 md:pt-32">My Services</h1>
            <div className="card-container flex flex-col md:flex-row justify-center items-center pt-14 md:space-x-7">
                <div className="card border border-[#d58952] -translate-y-6  md:-translate-y-0 mx-auto md:mx-0 w-[90%] h-[35%] md:w-[800px] md:h-[270px]">
                    <Image src={wnm} alt="" className="w-20 mx-auto pt-10"/>
                    <h2 className="text-[#d58952] text-center text-xl font-semibold pt-2">Web & Mobile Design</h2>
                    <p className="text-white text-center pt-2">Creating seamless, responsive web and mobile designs that prioritize user experience and <br/> visual appeal.</p>
                </div>
                <div className="card border border-[#d58952] mx-auto md:mx-0 w-[90%] h-[35%] md:w-[800px] md:h-[270px] ">
                <Image src={wb} alt="" className="w-16 mx-auto pt-10"/>
                    <h2 className="text-[#d58952] text-center text-xl font-semibold pt-2">Web Devlopment</h2>
                    <p className="text-white text-center pt-2">Transforming ideas into engaging, responsive, and user-friendly websites to elevate your <br/> online presence</p>
                </div>
                <div className="card border border-[#d58952] mt-6 md:mt-0 mx-auto md:mx-0 w-[90%] h-[35%] md:w-[800px] md:h-[270px] ">
                <Image src={e} alt="" className="w-16 mx-auto pt-10"/>
                    <h2 className="text-[#d58952] text-center text-xl font-semibold pt-2"> E-commerce</h2>
                    <p className="text-white text-center pt-2">Empowering your business with seamless, innovative e-commerce solutions to enhance customer experience and drive growth</p>
                </div>
            </div>
        </div>
    )
}

export default Services