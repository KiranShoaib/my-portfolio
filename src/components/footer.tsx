import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";



function Footer(){
    return(
        <footer className="sticky md:pt-16" style={{backgroundImage: "url('bg.png')"}} >
            <div>
                <h1 className=" px-2 md:px-4 pt-4  lg:px-32 text-xl md:text-5xl text-white">Do you have any Project? <span className=" text-xl md:text-5xl text-[#d58952]">Let&#39;s Talk</span></h1>
                <p className="px-2 md:px-4 lg:px-32 pt-6 text-center md:text-start max-w-xl md:max-w-4xl text-white">
                    Have an idea you&#39;d like to bring to life? I&#39;m always excited to collaborate on new and innovative projects! Whether it&#39;s building a sleek website or enhancing user experiences, let&#39;s work together to turn your vision into reality. Feel free to reach out, and let&#39;s create something amazing!
                </p>
            </div>
            <div  className="px-2 md:px-4 lg:px-32 pt-10 md:pt-20">
                <ul className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-24">
                    <li className="text-white border border-[#d58952] hover:bg-[#d58952] flex pl-5 pb-3 w-48 h-16 text-xl font-semibold"><a href="https://github.com/KiranShoaib" target="_blank" className="flex justify-between items-center w-full h-full"> Github <span className="text-[#d58952] hover:text-white pt-2 pr-5"><FaGithub/></span></a></li>
                    
                    <li className="text-white border border-[#d58952] hover:bg-[#d58952] flex pl-5 pb-3 w-48 h-16 text-xl font-semibold"><a href="https://www.facebook.com/profile.php?id=100082489991459" target="-blank" className="flex justify-between items-center w-full h-full"> Facebook <span className="text-[#d58952] hover:text-white pt-2 pr-5"><FaFacebookSquare/></span></a></li>
                    
                    <li className="text-white border border-[#d58952] hover:bg-[#d58952] flex pl-5 pb-3 w-48 h-16 text-xl font-semibold"><a href="https://www.linkedin.com/in/kiran-shoaib-9582392a3" target="_blank" className="flex justify-between items-center w-full h-full">Linkedin <span className="text-[#d58952] hover:text-white pt-2 pr-5"><FaLinkedinIn/></span></a></li>
                    
                    <li className="text-white border border-[#d58952] hover:bg-[#d58952] flex pl-5 pb-3 w-48 h-16 text-xl font-semibold"><a href="https://www.instagram.com/kiranshoaib091/" target="_blank"  className="flex justify-between items-center w-full h-full">Instagram <span className="text-[#d58952] hover:text-white pt-2 pr-5"><GrInstagram/></span></a></li>
                </ul>
            </div>
            <div className="pt-5 md:pt-10">
                <p className="text-center text-white">Copyright<span className="text-[#d58952]">&copy;</span> 2024 All Rights Reserved.</p>
            </div>
            
        </footer>
    )
}

export default Footer