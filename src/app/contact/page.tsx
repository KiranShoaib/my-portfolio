import Button from "@/components/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMail } from "react-icons/ti";


function Contact(){
    return (
        <section className="lg:px-32 md:px-4 h-screen bg-[#3b2930] flex flex-col md:flex-row ">
            <div>
                <h1 className="pt-20 md:pt-32 text-[#d58952] text-3xl md:text-4xl font-semibold text-center md:text-start">Get in Touch</h1>
                <p className="text-white pt-2 text-center md:pr-32">Have questions or need assistance? Reach out to us, and we&#39;ll be happy to help make your experience seamless</p>
                <div className="container pt-4 flex flex-col justify-center items-center" >
                <div className="md:mr-36">
                    <FaMapMarkerAlt className="text-[#d58952] bg-white w-[30px] h-[30px] rounded-full border-white border-[5px] -translate-x-12 translate-y-9"/>
                    <h3 className="text-[#d58952] font-semibold text-lg">Address</h3>
                    <p className="text-white">Jamshed Road, Karachi</p>
                </div>
                <div className="pt-2 pr-8 md:mr-36">
                    <FaPhoneAlt className="text-[#d58952] bg-white w-[30px] h-[30px] rounded-full border-white border-[5px] -translate-x-12 translate-y-9"/>
                    <h3 className="text-[#d58952] font-semibold text-lg">Phone</h3>
                    <p className="text-white">+92-321-1836917</p>
                </div>
                <div className="pt-2 pl-8 md:mr-36">
                    <TiMail className="text-[#d58952] bg-white w-[30px] h-[30px] rounded-full border-white border-[5px] -translate-x-12 translate-y-9"/>
                    <h3 className="text-[#d58952] font-semibold text-lg">Email</h3>
                    <p className="text-white">kiranshoaib091@gmail.com</p>
                </div>
                </div>
            </div>
            <div className="contactForm sticky mt-8 md:mt-60 mx-auto p-5 md:p-7 w-[90%] h-[300px] sm:w-[60%] md:w-[70%] bg-white md:mr-24">
                <form>
                    <h2 className="text-[#d58952] text-lg font-semibold">Send Message</h2>
                    <div className="inputBox relative mt-3 ">
                        <input 
                            type="text" 
                            name="fullName" 
                            required 
                            className="w-full border-b-2 border-[#d58952] block  px-0.5 py-2 text-gray-900 focus:outline-none focus:ring-0 focus:border-[#3b2930] peer"
                        />
                    <span className="text-[#d58952] absolute left-0 top-1/2 transform -translate-y-1/2 text-base pointer-events-none transition-all duration-500 peer-focus:text-[#3b2930] peer-focus:text-sm peer-focus:-translate-y-7 peer-valid:text-[#3b2930] peer-valid:text-sm peer-valid:-translate-y-7" >Full Name</span>
                    </div>
                    <div className="inputBox relative mt-3">
                    <input 
                        type="email" 
                        name="email" 
                        required
                        className="w-full border-b-2 border-[#d58952] block  px-0.5 py-2 text-gray-900 focus:outline-none focus:ring-0 focus:border-[#3b2930] peer" 
                        />
                    <span className="text-[#d58952] absolute left-0 top-1/2 transform -translate-y-1/2 text-base pointer-events-none transition-all duration-500 peer-focus:text-[#3b2930] peer-focus:text-sm peer-focus:-translate-y-7 peer-valid:text-[#3b2930] peer-valid:text-sm peer-valid:-translate-y-7"
                    >
                    Email
                    </span>
                    </div>
                    <div className="inputBox relative mt-3">
                    <input 
                        type="email" 
                        name="email" 
                        required
                        className="w-full border-b-2 border-[#d58952] block  px-0.5 py-2 text-gray-900 focus:outline-none focus:ring-0 focus:border-[#3b2930] peer" 
                        />
                    <span className="text-[#d58952] absolute left-0 top-1/2 transform -translate-y-1/2 text-base pointer-events-none transition-all duration-500 peer-focus:text-[#3b2930] peer-focus:text-sm peer-focus:-translate-y-7 peer-valid:text-[#3b2930] peer-valid:text-sm peer-valid:-translate-y-7"
                    >
                    Enter Your Subject
                    </span>
                    </div>
                    <div className="inputBox relative mt-3">
                        <textarea 
                        name="message" 
                        required
                        className="w-full border-b-2 border-[#d58952] block  px-0.5 py-2 text-gray-900 focus:outline-none focus:ring-0 focus:border-[#3b2930] peer" 
                        ></textarea>
                    <span className="text-[#d58952] absolute left-0 top-1/2 transform -translate-y-1/2 text-base pointer-events-none transition-all duration-500 peer-focus:text-[#3b2930] peer-focus:text-sm peer-focus:-translate-y-10 peer-valid:text-[#3b2930] peer-valid:text-sm peer-valid:-translate-y-10" >Your Message</span>
                    </div>
                    <div className="-translate-y-3 -translate-x-5 md:-translate-x-7 ">
                        <Button text="Send"/>
                    </div>
                </form>

            </div>    
        </section>
    )
}

export default Contact